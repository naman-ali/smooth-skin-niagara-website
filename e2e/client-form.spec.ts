import { test, expect, type Page, type Locator } from "@playwright/test";

// ---- helpers -----------------------------------------------------------

function fieldByPath(page: Page, path: string): Locator {
  return page.locator(`[id="${path}"]`);
}

async function clickChip(scope: Locator | Page, label: string) {
  await scope.getByRole("radio", { name: label, exact: true }).click();
}

async function clickMultiChip(scope: Locator | Page, label: string) {
  await scope.getByRole("checkbox", { name: label, exact: true }).click();
}

async function answerYesNo(page: Page, path: string, value: "Yes" | "No") {
  const field = fieldByPath(page, path);
  // The Yes/No control is a visually-hidden radio input wrapped by a
  // visible label; click the label text to avoid interacting with a
  // zero-size (sr-only) element directly.
  await field.getByText(value, { exact: true }).click();
}

async function continueStep(page: Page) {
  await page.getByRole("button", { name: "Continue" }).click();
}

async function backStep(page: Page) {
  await page.getByRole("button", { name: "Back" }).click();
}

async function selectTreatments(page: Page, names: string[]) {
  for (const name of names) {
    await page.getByRole("checkbox", { name, exact: false }).click();
  }
}

async function fillClientInfo(page: Page, opts: { age?: string } = {}) {
  await page.locator('[id="clientInfo.firstName"]').fill("Jane");
  await page.locator('[id="clientInfo.lastName"]').fill("Doe");
  await page.locator('[id="clientInfo.email"]').fill("jane.doe@example.com");
  await page.locator('[id="clientInfo.phone"]').fill("905-555-0100");
  await page.locator('[id="clientInfo.street"]').fill("123 Main St");
  await page.locator('[id="clientInfo.city"]').fill("Niagara Falls");
  await page.locator('[id="clientInfo.province"]').fill("ON");
  await page.locator('[id="clientInfo.postalCode"]').fill("L2G 1A1");
  if (opts.age) {
    await page.locator('[id="clientInfo.age"]').fill(opts.age);
  }
}

const LASER_YES_NO_IDS = [
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
  "laser_pregnant",
];

const LASH_HEALTH_YES_NO_IDS = [
  "lash_thyroid",
  "lash_latex_acrylic_allergy",
  "lash_asthma",
  "lash_recent_chemotherapy",
  "lash_claustrophobia",
  "lash_light_sensitive",
  "lash_smoker",
  "lash_eye_disorders",
  "lash_contact_lenses",
  "lash_back_pain",
  "lash_pregnant",
  "lash_birth_control",
  "lash_oily_skin_hair",
  "lash_vitamin_serums",
];

async function answerAllNo(page: Page, prefix: string, ids: string[]) {
  for (const id of ids) {
    await answerYesNo(page, `${prefix}.${id}`, "No");
  }
}

// -------------------------------------------------------------------------

test.describe("Client intake form", () => {
  test("completes the full happy path for both treatments and reaches success", async ({
    page,
  }) => {
    await page.goto("/client-form");

    // Step 1: treatment selection
    await selectTreatments(page, ["Laser Hair Removal", "Lash Lift & Tint"]);
    await continueStep(page);

    // Step 2: client info
    await fillClientInfo(page, { age: "34" });
    // Referral source: pick a plain option (no Other).
    await clickChip(page, "Instagram");
    await continueStep(page);

    const laserPrefix = "treatmentAnswers.laser-hair-removal";

    // Laser: medical history
    await answerAllNo(page, laserPrefix, LASER_YES_NO_IDS);
    await continueStep(page);

    // Laser: medications & other info
    await page.locator(`[id="${laserPrefix}.laser_medications"]`).fill("None");
    await clickChip(
      fieldByPath(page, `${laserPrefix}.laser_alcohol_consumption`),
      "Never",
    );
    await answerYesNo(page, `${laserPrefix}.laser_allergies`, "No");
    await answerYesNo(page, `${laserPrefix}.laser_herbal_preparations`, "No");
    await answerYesNo(page, `${laserPrefix}.laser_contact_lenses`, "No");
    await continueStep(page);

    // Laser: skin & treatment details
    await page
      .locator(`[id="${laserPrefix}.laser_ancestral_background"]`)
      .fill("Mixed European");
    await clickChip(
      fieldByPath(page, `${laserPrefix}.laser_sun_response`),
      "Sometimes burns and gradually tans",
    );
    await clickChip(
      fieldByPath(page, `${laserPrefix}.laser_last_sun_exposure`),
      "More than 3 months ago",
    );
    await answerYesNo(page, `${laserPrefix}.laser_chemical_tanning`, "No");
    await answerYesNo(page, `${laserPrefix}.laser_upcoming_sun_holiday`, "No");
    await clickMultiChip(
      fieldByPath(page, `${laserPrefix}.laser_treatment_area`),
      "Legs",
    );
    await answerYesNo(page, `${laserPrefix}.laser_previous_treatment`, "No");
    await continueStep(page);

    const lashPrefix = "treatmentAnswers.lash-lift-tint";

    // Lash: health & treatment info
    await answerAllNo(page, lashPrefix, LASH_HEALTH_YES_NO_IDS);
    await clickChip(
      fieldByPath(page, `${lashPrefix}.lash_exercise`),
      "Occasionally",
    );
    await continueStep(page);

    // Lash: lifestyle & lash history
    await clickChip(
      fieldByPath(page, `${lashPrefix}.lash_sleep_position`),
      "Back",
    );
    await clickMultiChip(
      fieldByPath(page, `${lashPrefix}.lash_tanning`),
      "None",
    );
    await answerYesNo(page, `${lashPrefix}.lash_previous_extensions`, "No");
    await answerYesNo(page, `${lashPrefix}.lash_other_sensitivities`, "No");
    await continueStep(page);

    // Lash: photo permissions
    await answerYesNo(page, `${lashPrefix}.lash_photo_permission`, "No");
    await answerYesNo(
      page,
      `${lashPrefix}.lash_marketing_photo_permission`,
      "No",
    );
    await continueStep(page);

    // Consents
    await page
      .getByRole("checkbox", { name: /Laser Hair Removal Consent/ })
      .check();
    await page
      .getByRole("checkbox", { name: /Lash Lift & Tint Consent/ })
      .check();
    await continueStep(page);

    // Review screen: assert human-readable labels, not raw stable values.
    await expect(
      page.getByText("Sometimes burns and gradually tans"),
    ).toBeVisible();
    await expect(page.getByText("More than 3 months ago")).toBeVisible();
    await expect(page.getByText("Legs", { exact: true })).toBeVisible();
    await expect(page.getByText("Instagram")).toBeVisible();
    await expect(page.locator("body")).not.toContainText("laser_sun_response");
    await expect(page.locator("body")).not.toContainText('["legs"');
    await continueStep(page);

    // Acknowledgement
    await page.locator('[id="acknowledgement.typedName"]').fill("Jane Doe");
    await page.locator('[id="acknowledgement.accepted"]').check();
    await page.getByRole("button", { name: "Submit Form" }).click();

    await expect(page.getByRole("heading", { name: "Thank you" })).toBeVisible({
      timeout: 10_000,
    });
  });

  test("Other option reveals a required field and clears when deselected", async ({
    page,
  }) => {
    await page.goto("/client-form");
    await selectTreatments(page, ["Laser Hair Removal"]);
    await continueStep(page);
    await fillClientInfo(page, { age: "40" });
    await clickChip(page, "Instagram");
    await continueStep(page);

    await answerAllNo(
      page,
      "treatmentAnswers.laser-hair-removal",
      LASER_YES_NO_IDS,
    );
    await continueStep(page);

    const alcoholField = fieldByPath(
      page,
      "treatmentAnswers.laser-hair-removal.laser_alcohol_consumption",
    );

    // Selecting "Other" reveals the free-text field.
    await clickChip(alcoholField, "Other");
    const otherInput = page.locator(
      '[id="treatmentAnswers.laser-hair-removal.laser_alcohol_consumption-other"]',
    );
    await expect(otherInput).toBeVisible();

    // Trying to continue without filling the required Other text should fail validation.
    await page
      .locator('[id="treatmentAnswers.laser-hair-removal.laser_medications"]')
      .fill("None");
    await answerYesNo(
      page,
      "treatmentAnswers.laser-hair-removal.laser_allergies",
      "No",
    );
    await answerYesNo(
      page,
      "treatmentAnswers.laser-hair-removal.laser_herbal_preparations",
      "No",
    );
    await answerYesNo(
      page,
      "treatmentAnswers.laser-hair-removal.laser_contact_lenses",
      "No",
    );
    await continueStep(page);
    await expect(page.getByText("Please provide more detail.")).toBeVisible();

    // Fill it in and continue succeeds.
    await otherInput.fill("Wine on special occasions");
    await continueStep(page);
    await expect(
      page.locator(
        '[id="treatmentAnswers.laser-hair-removal.laser_ancestral_background"]',
      ),
    ).toBeVisible();

    // Go back and switch away from "Other" — the field should disappear and clear.
    await backStep(page);
    await clickChip(alcoholField, "Never");
    await expect(otherInput).toHaveCount(0);
  });

  test("multi-select None option is mutually exclusive with other choices", async ({
    page,
  }) => {
    await page.goto("/client-form");
    await selectTreatments(page, ["Lash Lift & Tint"]);
    await continueStep(page);
    await fillClientInfo(page);
    await clickChip(page, "Facebook");
    await continueStep(page);

    await answerAllNo(
      page,
      "treatmentAnswers.lash-lift-tint",
      LASH_HEALTH_YES_NO_IDS,
    );
    await clickChip(
      fieldByPath(page, "treatmentAnswers.lash-lift-tint.lash_exercise"),
      "Occasionally",
    );
    await continueStep(page);

    const tanningField = fieldByPath(
      page,
      "treatmentAnswers.lash-lift-tint.lash_tanning",
    );
    await clickChip(
      fieldByPath(page, "treatmentAnswers.lash-lift-tint.lash_sleep_position"),
      "Back",
    );

    await clickMultiChip(tanningField, "Tanning bed");
    await clickMultiChip(tanningField, "Spray tan");
    await expect(
      tanningField.getByRole("checkbox", { name: "Tanning bed" }),
    ).toHaveAttribute("aria-checked", "true");
    await expect(
      tanningField.getByRole("checkbox", { name: "Spray tan" }),
    ).toHaveAttribute("aria-checked", "true");

    // Selecting "None" clears the other selections.
    await clickMultiChip(tanningField, "None");
    await expect(
      tanningField.getByRole("checkbox", { name: "Tanning bed" }),
    ).toHaveAttribute("aria-checked", "false");
    await expect(
      tanningField.getByRole("checkbox", { name: "Spray tan" }),
    ).toHaveAttribute("aria-checked", "false");
    await expect(
      tanningField.getByRole("checkbox", { name: "None" }),
    ).toHaveAttribute("aria-checked", "true");

    // Selecting a normal option again clears "None".
    await clickMultiChip(tanningField, "Spray tan");
    await expect(
      tanningField.getByRole("checkbox", { name: "None" }),
    ).toHaveAttribute("aria-checked", "false");
  });

  test("nested follow-up: previous laser treatment areas appear only when Yes is selected", async ({
    page,
  }) => {
    await page.goto("/client-form");
    await selectTreatments(page, ["Laser Hair Removal"]);
    await continueStep(page);
    await fillClientInfo(page, { age: "29" });
    await clickChip(page, "Website");
    await continueStep(page);

    await answerAllNo(
      page,
      "treatmentAnswers.laser-hair-removal",
      LASER_YES_NO_IDS,
    );
    await continueStep(page);

    await page
      .locator('[id="treatmentAnswers.laser-hair-removal.laser_medications"]')
      .fill("None");
    await clickChip(
      fieldByPath(
        page,
        "treatmentAnswers.laser-hair-removal.laser_alcohol_consumption",
      ),
      "Never",
    );
    await answerYesNo(
      page,
      "treatmentAnswers.laser-hair-removal.laser_allergies",
      "No",
    );
    await answerYesNo(
      page,
      "treatmentAnswers.laser-hair-removal.laser_herbal_preparations",
      "No",
    );
    await answerYesNo(
      page,
      "treatmentAnswers.laser-hair-removal.laser_contact_lenses",
      "No",
    );
    await continueStep(page);

    await page
      .locator(
        '[id="treatmentAnswers.laser-hair-removal.laser_ancestral_background"]',
      )
      .fill("Mixed");
    await clickChip(
      fieldByPath(
        page,
        "treatmentAnswers.laser-hair-removal.laser_sun_response",
      ),
      "Rarely burns and tans easily",
    );
    await clickChip(
      fieldByPath(
        page,
        "treatmentAnswers.laser-hair-removal.laser_last_sun_exposure",
      ),
      "1–3 months ago",
    );
    await answerYesNo(
      page,
      "treatmentAnswers.laser-hair-removal.laser_chemical_tanning",
      "No",
    );
    await answerYesNo(
      page,
      "treatmentAnswers.laser-hair-removal.laser_upcoming_sun_holiday",
      "No",
    );
    await clickMultiChip(
      fieldByPath(
        page,
        "treatmentAnswers.laser-hair-removal.laser_treatment_area",
      ),
      "Underarms",
    );

    const areasField = fieldByPath(
      page,
      "treatmentAnswers.laser-hair-removal.laser_previous_treatment_areas",
    );
    await expect(areasField).toHaveCount(0);

    await answerYesNo(
      page,
      "treatmentAnswers.laser-hair-removal.laser_previous_treatment",
      "Yes",
    );
    await expect(areasField).toBeVisible();
    await clickMultiChip(areasField, "Brazilian");

    const notesField = page.locator(
      '[id="treatmentAnswers.laser-hair-removal.laser_previous_treatment_details"]',
    );
    await expect(notesField).toBeVisible();
    await notesField.fill("Had good results previously.");
    await continueStep(page);

    // Go back and flip the answer to No \u2014 the follow-up chain should disappear.
    await backStep(page);
    await answerYesNo(
      page,
      "treatmentAnswers.laser-hair-removal.laser_previous_treatment",
      "No",
    );
    await expect(areasField).toHaveCount(0);
  });

  test("referral source: Other and Friend/Family reveal the correct conditional field", async ({
    page,
  }) => {
    await page.goto("/client-form");
    await selectTreatments(page, ["Lash Lift & Tint"]);
    await continueStep(page);
    await fillClientInfo(page);

    const referrerNameInput = page.locator(
      '[id="clientInfo.referralSource.referrerName"]',
    );
    const otherInput = page.locator(
      '[id="clientInfo.referralSource.otherText"]',
    );

    await expect(referrerNameInput).toHaveCount(0);
    await expect(otherInput).toHaveCount(0);

    await clickChip(page, "Friend / Family");
    await expect(referrerNameInput).toBeVisible();
    await expect(otherInput).toHaveCount(0);

    await clickChip(page, "Other");
    await expect(otherInput).toBeVisible();
    await expect(referrerNameInput).toHaveCount(0);

    // Required "Other" text should block continue until filled in.
    await continueStep(page);
    await expect(
      page.locator('[id="clientInfo.referralSource-error"]'),
    ).toBeVisible();

    await otherInput.fill("Saw the clinic while walking by");
    await continueStep(page);

    await expect(
      page.locator('[id="treatmentAnswers.lash-lift-tint.lash_thyroid"]'),
    ).toBeVisible();
  });
});
