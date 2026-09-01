import type { ConsentDefinition } from "../types";

/**
 * Key used to store this consent's answer in `FormValues["consents"]` and
 * in the submission's `consents` record. It is not a selectable treatment
 * id — this consent applies once per submission, regardless of which
 * treatment(s) were selected (see `getIsPhotoReleaseRequired`).
 */
export const PHOTO_RELEASE_CONSENT_ID = "photo-release";

// NOTE: The source form (waver-forms/smooth-skin-niagara-photo-release.md)
// spells the practitioner's name "Ashley Wohnowski" in the body text, while
// every other clinic document spells it "Ashley Wojnowski." The source
// wording is preserved as-is below — confirm the intended legal spelling
// with the clinic before this goes to production rather than silently
// correcting it.
export const photoReleaseConsent: ConsentDefinition = {
  treatmentId: PHOTO_RELEASE_CONSENT_ID,
  title: "Photo Release",
  version: "photo-release-2026-09-01",
  status: "approved",
  acceptanceLabel: "I HAVE READ THE FOREGOING RELEASE AND FULLY UNDERSTAND IT.",
  content: [
    {
      kind: "paragraph",
      text: 'I authorize and license Ashley Wohnowski (Custom Lash Lounge inc) its parents, affiliates, including subsidiaries, licensees, representatives, and all persons or corporations acting with its permission or upon its authority, to use my photograph (the "Material") arising this/these treatments sessions in connection with manufacturing, advertising, promotion, distribution and sale of the service/product of this current photos.',
    },
    {
      kind: "paragraph",
      text: 'Ashley Wohnowski (Custom Lash Lounge inc) may modify the Material and may incorporate and use all or any part of the Material in video, audio, online, print ads, still photographs, catalogs, packaging and package inserts and all other media and may reproduce, exhibit, broadcast, transmit and distribute advertising containing the Material by any means, media and channels of distribution.',
    },
    {
      kind: "paragraph",
      text: "I waive any and all rights of the material and to inspect or approve the advertising or the manner in which it is used.",
    },
  ],
};
