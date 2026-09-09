import { test, expect } from "@playwright/test";
import assert from "node:assert";
import { prisma } from "../src/lib/prisma";

type SubmissionRecord = NonNullable<
  Awaited<ReturnType<typeof prisma.clientFormSubmission.findUnique>>
> & {
  contact: { email: string; phone: string; contactType: string } | null;
};

const timestamp = Date.now();
const CLIENT = {
  firstName: "E2E",
  lastName: `Laser-${timestamp}`,
  email: `e2e-laser-${timestamp}@example.com`,
  phone: `905-555-${String(timestamp).slice(-4)}`,
  street: "456 Test Ave",
  city: "Niagara Falls",
  province: "ON",
  postalCode: "L2G 1A1",
  age: "32",
  emergencyContact: "Partner 416-555-0200",
};

function fieldByPath(page: any, path: string) {
  return page.locator(`[id="${path}"]`);
}

async function clickNoForYesNo(page: any, path: string) {
  await page.locator(`label[for="${path}-no"]`).click();
}

async function clickYesForYesNo(page: any, path: string) {
  await page.locator(`label[for="${path}-yes"]`).click();
}

async function selectOptionChip(page: any, scope: any, label: string) {
  await scope.getByRole("radio", { name: label, exact: true }).click();
}

async function toggleMultiChip(page: any, scope: any, label: string) {
  await scope.getByRole("checkbox", { name: label, exact: true }).click();
}

async function continueStep(page: any) {
  await page.getByRole("button", { name: /Continue|Submit Form/ }).click();
}

test.describe("Laser Hair Removal client form", () => {
  test("completes the full wizard and stores all answers correctly", async ({
    page,
  }) => {
    await page.goto("/client-form");

    // 1. Select treatment
    await page
      .getByRole("checkbox", { name: "Laser Hair Removal", exact: false })
      .click();
    await continueStep(page);

    // 2. Client information
    await fieldByPath(page, "clientInfo.firstName").fill(CLIENT.firstName);
    await fieldByPath(page, "clientInfo.lastName").fill(CLIENT.lastName);
    await fieldByPath(page, "clientInfo.email").fill(CLIENT.email);
    await fieldByPath(page, "clientInfo.phone").fill(CLIENT.phone);
    await fieldByPath(page, "clientInfo.street").fill(CLIENT.street);
    await fieldByPath(page, "clientInfo.city").fill(CLIENT.city);
    await fieldByPath(page, "clientInfo.province").fill(CLIENT.province);
    await fieldByPath(page, "clientInfo.postalCode").fill(CLIENT.postalCode);
    await fieldByPath(page, "clientInfo.age").fill(CLIENT.age);
    await fieldByPath(page, "clientInfo.emergencyContact").fill(
      CLIENT.emergencyContact,
    );

    // Referral source: "Other" so we exercise the conditional text field.
    const referralScope = page.locator("[id='clientInfo.referralSource']");
    await selectOptionChip(page, referralScope, "Other");
    await fieldByPath(page, "clientInfo.referralSource.otherText").fill(
      "Saw an Instagram ad",
    );
    await continueStep(page);

    // 3. Shared health & safety
    await clickNoForYesNo(page, "sharedAnswers.pregnant");
    await clickNoForYesNo(page, "sharedAnswers.contactLenses");
    await continueStep(page);

    // 4. Laser: Medical History — answer No to all so follow-ups stay hidden
    const laserPrefix = "treatmentAnswers.laser-hair-removal";
    const medicalYesNoIds = [
      "laser_cancer_history",
      "laser_active_infection",
      "laser_light_sensitive_condition",
      "laser_photosensitive_medication",
      "laser_immunosuppression",
      "laser_hormonal_disorder",
      "laser_diabetes",
      "laser_bleeding_disorder",
      "laser_keloid_scarring",
      "laser_very_dry_skin",
      "laser_recent_sun_exposure",
    ];
    for (const id of medicalYesNoIds) {
      await clickNoForYesNo(page, `${laserPrefix}.${id}`);
    }
    await continueStep(page);

    // 5. Laser: Medications & Other Information
    await fieldByPath(page, `${laserPrefix}.laser_medications`).fill("None");

    const alcoholScope = fieldByPath(
      page,
      `${laserPrefix}.laser_alcohol_consumption`,
    );
    await selectOptionChip(page, alcoholScope, "Other");
    await fieldByPath(
      page,
      `${laserPrefix}.laser_alcohol_consumption-other`,
    ).fill("Wine on weekends");

    // Trigger a follow-up to prove conditional questions work.
    await clickYesForYesNo(page, `${laserPrefix}.laser_allergies`);
    await fieldByPath(page, `${laserPrefix}.laser_allergies_details`).fill(
      "Mild seasonal allergies",
    );

    await clickNoForYesNo(page, `${laserPrefix}.laser_herbal_preparations`);
    await continueStep(page);

    // 6. Laser: Skin & Treatment Details
    const skinScope = fieldByPath(page, `${laserPrefix}.laser_sun_response`);
    await selectOptionChip(
      page,
      skinScope,
      "Sometimes burns and gradually tans",
    );

    const sunExposureScope = fieldByPath(
      page,
      `${laserPrefix}.laser_last_sun_exposure`,
    );
    await selectOptionChip(page, sunExposureScope, "More than 3 months ago");

    await clickNoForYesNo(page, `${laserPrefix}.laser_chemical_tanning`);
    await clickNoForYesNo(page, `${laserPrefix}.laser_upcoming_sun_holiday`);

    const areaScope = fieldByPath(page, `${laserPrefix}.laser_treatment_area`);
    await toggleMultiChip(page, areaScope, "Underarms");
    await toggleMultiChip(page, areaScope, "Legs");

    // Trigger the multi-select follow-up and the optional nested details.
    await clickYesForYesNo(page, `${laserPrefix}.laser_previous_treatment`);
    const previousAreaScope = fieldByPath(
      page,
      `${laserPrefix}.laser_previous_treatment_areas`,
    );
    await toggleMultiChip(page, previousAreaScope, "Legs");
    await fieldByPath(
      page,
      `${laserPrefix}.laser_previous_treatment_details`,
    ).fill("Previous sessions went well, no side effects.");
    await continueStep(page);

    // 7. Consents — all 8 acknowledgements plus photo release
    const acknowledgements = [
      "risks",
      "individualResults",
      "treatmentSeries",
      "naturePurpose",
      "pregnancyAccutaneDevices",
      "cancellationPolicy",
      "recommendedTreatments",
      "promotionalExpiry",
    ];
    for (const id of acknowledgements) {
      // Click the visible label that targets the Base UI Checkbox input.
      await page
        .locator(
          `label[for="consents.laser-hair-removal.acknowledgements.${id}-checkbox"]`,
        )
        .click();
    }

    await page
      .locator('label[for="consents.laser-hair-removal.photoConsent-yes"]')
      .click();
    await page.locator('label[for="consents.photo-release.accepted"]').click();
    await continueStep(page);

    // 8. Review — verify rendered values, then continue
    const fullName = `${CLIENT.firstName} ${CLIENT.lastName}`;
    await expect(page.getByText(fullName)).toBeVisible();
    await expect(page.getByText(CLIENT.email, { exact: true })).toBeVisible();
    await expect(
      page.getByText("Underarms, Legs", { exact: true }),
    ).toBeVisible();
    await expect(page.getByText("Legs", { exact: true })).toBeVisible();
    await expect(page.getByText("Wine on weekends")).toBeVisible();
    await expect(page.getByText("Saw an Instagram ad")).toBeVisible();
    await continueStep(page);

    // 9. Final acknowledgement
    await fieldByPath(page, "acknowledgement.typedName").fill(
      `${CLIENT.firstName} ${CLIENT.lastName}`,
    );
    await page.locator('label[for="acknowledgement.accepted"]').click();

    // Capture the submission ID and submit.
    const submitResponsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("/api/client-form") &&
        response.request().method() === "POST" &&
        response.status() === 201,
    );
    await continueStep(page);
    const submitResponse = await submitResponsePromise;
    const { id }: { id: string } = await submitResponse.json();

    await expect(page.getByRole("heading", { name: /Thank you/i })).toBeVisible(
      {
        timeout: 10_000,
      },
    );

    // 10. Database assertions
    const record = (await prisma.clientFormSubmission.findUnique({
      where: { id },
      include: { contact: true },
    })) as SubmissionRecord;

    expect(record).not.toBeNull();
    expect(record.firstName).toBe(CLIENT.firstName);
    expect(record.lastName).toBe(CLIENT.lastName);
    expect(record.email).toBe(CLIENT.email.toLowerCase());
    expect(record.phone).toBe(CLIENT.phone);
    expect(record.selectedTreatments).toContain("laser-hair-removal");

    const submission = record.submission as Record<string, any>;
    expect(submission.client.firstName).toBe(CLIENT.firstName);
    expect(submission.client.lastName).toBe(CLIENT.lastName);
    expect(submission.client.email).toBe(CLIENT.email);
    expect(submission.client.phone).toBe(CLIENT.phone);
    expect(submission.client.address).toEqual({
      street: CLIENT.street,
      city: CLIENT.city,
      province: CLIENT.province,
      postalCode: CLIENT.postalCode,
    });
    expect(submission.client.age).toBe(Number(CLIENT.age));
    expect(submission.client.emergencyContact).toBe(CLIENT.emergencyContact);
    expect(submission.client.referralSource).toEqual({
      value: "other",
      label: "Other",
      otherText: "Saw an Instagram ad",
    });

    expect(submission.sharedAnswers.pregnant).toBe(false);
    expect(submission.sharedAnswers.contactLenses).toBe(false);

    const laser = submission.treatmentResponses["laser-hair-removal"].answers;
    expect(laser.laser_medications).toBe("None");
    expect(laser.laser_alcohol_consumption).toEqual({
      value: "other",
      otherText: "Wine on weekends",
    });
    expect(laser.laser_allergies).toBe(true);
    expect(laser.laser_allergies_details).toBe("Mild seasonal allergies");
    expect(laser.laser_sun_response).toEqual({
      value: "sometimes_burns_gradually_tans",
    });
    expect(laser.laser_last_sun_exposure).toEqual({
      value: "more_than_3_months_ago",
    });
    expect(laser.laser_treatment_area).toMatchObject({
      values: ["underarms", "legs"],
    });
    expect(laser.laser_previous_treatment).toBe(true);
    expect(laser.laser_previous_treatment_areas).toMatchObject({
      values: ["legs"],
    });
    expect(laser.laser_previous_treatment_details).toBe(
      "Previous sessions went well, no side effects.",
    );

    expect(submission.consents["laser-hair-removal"].accepted).toBe(true);
    expect(submission.consents["photo-release"].accepted).toBe(true);
    expect(submission.laserConsent.acknowledgements.risks).toBe(true);
    expect(submission.laserConsent.acknowledgements.promotionalExpiry).toBe(
      true,
    );
    expect(submission.laserConsent.photoConsent).toBe(true);
    expect(submission.laserConsent.typedName).toBe(
      `${CLIENT.firstName} ${CLIENT.lastName}`,
    );
    expect(submission.acknowledgement.typedName).toBe(
      `${CLIENT.firstName} ${CLIENT.lastName}`,
    );
    expect(submission.acknowledgement.accepted).toBe(true);
    expect(submission.guardian).toBeNull();

    expect(record.contact).not.toBeNull();
    assert(record.contact);
    expect(record.contact.email).toBe(CLIENT.email.toLowerCase());
    expect(record.contact.phone).toBe(CLIENT.phone);
    expect(record.contact.contactType).toBe("client");
  });

  test("blocks submission and shows validation errors when required fields are missing", async ({
    page,
  }) => {
    await page.goto("/client-form");
    await page
      .getByRole("checkbox", { name: "Laser Hair Removal", exact: false })
      .click();
    await continueStep(page);

    // Leave client info blank and continue.
    await continueStep(page);

    await expect(fieldByPath(page, "clientInfo.firstName")).toBeVisible();
    await expect(page.getByText("First name is required.")).toBeVisible();
    await expect(page.getByText("Email address is required.")).toBeVisible();
    await expect(page.getByText("Street address is required.")).toBeVisible();
    await expect(page.getByText("Age is required.")).toBeVisible();
    await expect(
      page.getByText("Emergency contact is required."),
    ).toBeVisible();
  });
});
