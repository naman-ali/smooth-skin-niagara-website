// Laser hair removal pricing — all prices in CAD, per session.
// Individual prices are under review by Ashley; update the numbers here.

export interface LaserArea {
  id: string;
  label: string;
  price: number;
  /**
   * Area ids fully covered by this option. Selecting this option removes any
   * fully-covered selections, and fully-covered options can't be selected
   * while this one is chosen (e.g. Full Legs covers Upper Legs, Lower Legs
   * and Toes & Feet).
   */
  includes?: string[];
}

export interface LaserAreaGroup {
  label: string;
  areas: LaserArea[];
}

// All individual areas below the neck, covered by "Full Body (Below Neck)".
// Full Back is excluded because it includes the neck.
const BELOW_NECK_AREA_IDS = [
  "shoulders",
  "half-arms",
  "fingers-hands",
  "underarms",
  "chest",
  "areolas",
  "stomach",
  "belly-strip",
  "upper-back",
  "lower-back",
  "buttocks",
  "tailbone",
  "bikini",
  "brazilian",
  "upper-legs",
  "lower-legs",
  "toes-feet",
];

export const LASER_AREA_GROUPS: LaserAreaGroup[] = [
  {
    label: "Face & Neck",
    areas: [
      { id: "upper-lip", label: "Upper Lip", price: 40 },
      { id: "lower-lip", label: "Lower Lip", price: 40 },
      { id: "sideburns", label: "Sideburns", price: 50 },
      { id: "cheeks", label: "Cheeks", price: 50 },
      { id: "ears", label: "Ears", price: 50 },
      { id: "chin", label: "Chin", price: 40 },
      { id: "jawline", label: "Jawline", price: 50 },
      { id: "neck", label: "Neck (Front or Back)", price: 60 },
      {
        id: "full-face",
        label: "Full Face (incl. Neck)",
        price: 90,
        includes: [
          "upper-lip",
          "lower-lip",
          "sideburns",
          "cheeks",
          "ears",
          "chin",
          "jawline",
          "neck",
        ],
      },
    ],
  },
  {
    label: "Arms",
    areas: [
      { id: "shoulders", label: "Shoulders", price: 100 },
      { id: "underarms", label: "Underarms", price: 60 },
      { id: "half-arms", label: "Half Arms", price: 110 },
      { id: "fingers-hands", label: "Fingers & Hands", price: 90 },
      {
        id: "full-arms",
        label: "Full Arms (incl. Hands & Fingers)",
        price: 180,
        includes: ["half-arms", "fingers-hands"],
      },
    ],
  },
  {
    label: "Upper Body",
    areas: [
      { id: "chest", label: "Chest", price: 140 },
      { id: "areolas", label: "Areolas", price: 80 },
      {
        id: "stomach",
        label: "Stomach",
        price: 150,
        includes: ["belly-strip"],
      },
      {
        id: "belly-strip",
        label: "Belly Strip (Belly Button to Pelvis)",
        price: 60,
      },
      {
        id: "chest-abdomen",
        label: "Full Chest & Abdomen",
        price: 200,
        includes: ["chest", "stomach", "belly-strip"],
      },
    ],
  },
  {
    label: "Back",
    areas: [
      { id: "upper-back", label: "Upper Back", price: 120 },
      { id: "lower-back", label: "Lower Back", price: 120 },
      {
        id: "full-back",
        label: "Full Back (incl. Neck)",
        price: 180,
        includes: ["upper-back", "lower-back", "neck"],
      },
    ],
  },
  {
    label: "Lower Body",
    areas: [
      { id: "buttocks", label: "Buttocks", price: 90 },
      { id: "tailbone", label: "Tailbone", price: 50 },
      { id: "bikini", label: "Bikini", price: 80 },
      {
        id: "brazilian",
        label: "Brazilian",
        price: 90,
        includes: ["bikini"],
      },
      { id: "upper-legs", label: "Upper Legs", price: 140 },
      { id: "lower-legs", label: "Lower Legs", price: 120 },
      { id: "toes-feet", label: "Toes & Feet", price: 60 },
      {
        id: "full-legs",
        label: "Full Legs (incl. Toes & Feet)",
        price: 240,
        includes: ["upper-legs", "lower-legs", "toes-feet"],
      },
    ],
  },
  {
    label: "Full Body",
    areas: [
      {
        id: "full-body-below-neck",
        label: "Full Body (Below Neck)",
        price: 400,
        includes: [...BELOW_NECK_AREA_IDS],
      },
      {
        id: "full-body-complete",
        label: "Full Body (Full Face, Neck to Toe)",
        price: 450,
        includes: [
          "upper-lip",
          "lower-lip",
          "sideburns",
          "cheeks",
          "ears",
          "chin",
          "jawline",
          "neck",
          ...BELOW_NECK_AREA_IDS,
        ],
      },
    ],
  },
];

const laserAreaIndex = new Map<string, LaserArea>(
  LASER_AREA_GROUPS.flatMap((g) => g.areas.map((a) => [a.id, a] as const)),
);

export function laserAreaById(id: string): LaserArea | undefined {
  return laserAreaIndex.get(id);
}

// Combined "full" options (Full Legs, Full Face, Full Body, etc.) are already
// priced as bundles, so they only ever receive the full-area session discount
// — they don't count toward the multi-area discount tiers.
function isLaserBundle(area: LaserArea): boolean {
  return (area.includes?.length ?? 0) >= 2;
}

const nonBundleAreaIds = new Set(
  LASER_AREA_GROUPS.flatMap((g) => g.areas)
    .filter((a) => !isLaserBundle(a))
    .map((a) => a.id),
);

function expandIncludes(ids: string[]): Set<string> {
  const expanded = new Set<string>();
  const stack = [...ids];
  while (stack.length > 0) {
    const id = stack.pop()!;
    if (expanded.has(id)) continue;
    expanded.add(id);
    for (const covered of laserAreaIndex.get(id)?.includes ?? []) {
      stack.push(covered);
    }
  }
  return expanded;
}

/**
 * The atomic treatment zones covered by a set of selected options — bundles
 * reduce to the individual areas they contain (e.g. Full Legs → Upper Legs,
 * Lower Legs, Toes & Feet).
 */
function zoneSet(ids: string[]): Set<string> {
  const expanded = expandIncludes(ids);
  return new Set([...expanded].filter((id) => nonBundleAreaIds.has(id)));
}

function isZoneSubset(inner: Set<string>, outer: Set<string>): boolean {
  return [...inner].every((z) => outer.has(z));
}

/**
 * Returns the label of a selected option that already covers `areaId`
 * (e.g. "Full Legs" covers "upper-legs"), or null when selectable.
 */
export function laserCoveredBy(
  areaId: string,
  selectedIds: string[],
): string | null {
  const areaZones = zoneSet([areaId]);
  for (const selectedId of selectedIds) {
    if (selectedId === areaId) continue;
    if (isZoneSubset(areaZones, zoneSet([selectedId]))) {
      return laserAreaIndex.get(selectedId)?.label ?? selectedId;
    }
  }
  return null;
}

/**
 * Adds or removes an area. Adding an option removes any already-selected
 * areas whose zones it fully covers so overlapping selections can't occur.
 */
export function toggleLaserArea(
  areaId: string,
  selectedIds: string[],
): string[] {
  if (selectedIds.includes(areaId)) {
    return selectedIds.filter((id) => id !== areaId);
  }
  const newZones = zoneSet([areaId]);
  return [
    ...selectedIds.filter((id) => !isZoneSubset(zoneSet([id]), newZones)),
    areaId,
  ];
}

export interface LaserMerge {
  comboId: string;
  comboLabel: string;
  coveredLabels: string[];
}

export interface LaserMergeResult {
  selectedIds: string[];
  merges: LaserMerge[];
}

/**
 * Reverse-direction coverage check: when the selected individual areas fully
 * cover a combined option (e.g. Upper Legs + Lower Legs → Full Legs) and the
 * combination lowers the final package price — including any discount-tier
 * change — the areas are merged into the cheaper combined option.
 */
export function laserAutoMerge(
  selectedIds: string[],
  sessions: LaserSessionCount,
): LaserMergeResult {
  let ids = [...selectedIds];
  const merges: LaserMerge[] = [];
  let changed = true;
  while (changed) {
    changed = false;
    for (const group of LASER_AREA_GROUPS) {
      for (const combo of group.areas) {
        if (!isLaserBundle(combo) || ids.includes(combo.id)) {
          continue;
        }
        const comboZones = zoneSet([combo.id]);
        if (!isZoneSubset(comboZones, zoneSet(ids))) continue;
        const next = [
          ...ids.filter((id) => !isZoneSubset(zoneSet([id]), comboZones)),
          combo.id,
        ];
        const cheaper =
          laserEstimate(next, sessions).packageTotal <
          laserEstimate(ids, sessions).packageTotal;
        if (!cheaper) continue;
        merges.push({
          comboId: combo.id,
          comboLabel: combo.label,
          coveredLabels: ids
            .filter((id) => isZoneSubset(zoneSet([id]), comboZones))
            .map((id) => laserAreaIndex.get(id)?.label ?? id),
        });
        ids = next;
        changed = true;
      }
    }
  }
  return { selectedIds: ids, merges };
}

/**
 * What a combined "full" option would cost per session if its covered zones
 * were booked as individual areas (e.g. Full Legs = Upper Legs + Lower Legs
 * + Toes & Feet = $320 vs the $240 bundle price). Returns null for
 * individual areas, which have no equivalent to compare against.
 */
export function laserIndividualEquivalent(areaId: string): number | null {
  const area = laserAreaIndex.get(areaId);
  if (!area || !isLaserBundle(area)) return null;
  let sum = 0;
  for (const zoneId of zoneSet([areaId])) {
    sum += laserAreaIndex.get(zoneId)?.price ?? 0;
  }
  return sum;
}

export const LASER_SESSION_OPTIONS = [1, 3, 6] as const;
export type LaserSessionCount = (typeof LASER_SESSION_OPTIONS)[number];

export interface LaserDiscountTier {
  minAreas: number;
  maxAreas: number;
  label: string;
  discounts: Record<LaserSessionCount, number>;
}

// The discount is looked up once from this table — tiers do not stack.
export const LASER_DISCOUNT_TIERS: LaserDiscountTier[] = [
  {
    minAreas: 1,
    maxAreas: 2,
    label: "1–2 areas",
    discounts: { 1: 0, 3: 0.05, 6: 0.1 },
  },
  {
    minAreas: 3,
    maxAreas: 5,
    label: "3–5 areas",
    discounts: { 1: 0.05, 3: 0.1, 6: 0.15 },
  },
  {
    minAreas: 6,
    maxAreas: Number.POSITIVE_INFINITY,
    label: "6+ areas",
    discounts: { 1: 0.1, 3: 0.15, 6: 0.2 },
  },
];

// "Full Area Treatments" (Full Face, Full Arms, Full Legs, Full Back,
// Full Chest & Abdomen, Full Body) are already specially priced, so only
// session discounts apply — they never qualify for multi-area tiers.
export const LASER_FULL_AREA_DISCOUNTS: Record<LaserSessionCount, number> = {
  1: 0,
  3: 0.1,
  6: 0.15,
};

export function laserDiscountPercent(
  areaCount: number,
  sessions: LaserSessionCount,
): number {
  const tier = LASER_DISCOUNT_TIERS.find(
    (t) => areaCount >= t.minAreas && areaCount <= t.maxAreas,
  );
  return tier?.discounts[sessions] ?? 0;
}

export interface LaserEstimate {
  regularTotal: number;
  /**
   * What the same coverage would cost for the package if every selected
   * option were booked as its individual areas. Equals regularTotal when no
   * combined "full" options are selected.
   */
  individualEquivalentTotal: number;
  individualAreaCount: number;
  bundleAreaCount: number;
  /** Discount rate applied to the individual-area subtotal. */
  areaDiscountPercent: number;
  /** Discount rate applied to the full-area (bundle) subtotal. */
  bundleDiscountPercent: number;
  /**
   * Total saved vs booking the same coverage as individual areas — the sum
   * of the three savings components below.
   */
  savings: number;
  /** Extra discount earned by selecting 3–5 or 6+ individual areas. */
  multiAreaSavings: number;
  /** Discount earned by booking 3 or 6 sessions instead of a single one. */
  multiSessionSavings: number;
  /**
   * Built-in saving of combined "full" options — what their covered zones
   * would cost as individual areas minus the bundle price.
   */
  bundleSavings: number;
  packageTotal: number;
  perSession: number;
}

export function laserEstimate(
  selectedIds: string[],
  sessions: LaserSessionCount,
): LaserEstimate {
  let individualSum = 0;
  let bundleSum = 0;
  let individualAreaCount = 0;
  let bundleAreaCount = 0;
  for (const id of selectedIds) {
    const area = laserAreaIndex.get(id);
    if (!area) continue;
    if (isLaserBundle(area)) {
      bundleSum += area.price;
      bundleAreaCount++;
    } else {
      individualSum += area.price;
      individualAreaCount++;
    }
  }
  const tier = LASER_DISCOUNT_TIERS.find(
    (t) => individualAreaCount >= t.minAreas && individualAreaCount <= t.maxAreas,
  );
  const areaDiscountPercent =
    individualAreaCount > 0 ? (tier?.discounts[sessions] ?? 0) : 0;
  const bundleDiscountPercent =
    bundleSum > 0 ? LASER_FULL_AREA_DISCOUNTS[sessions] : 0;
  const discountedPerSession =
    individualSum * (1 - areaDiscountPercent) +
    bundleSum * (1 - bundleDiscountPercent);
  const regularTotal = (individualSum + bundleSum) * sessions;
  const individualEquivalentTotal =
    selectedIds.reduce(
      (sum, id) =>
        sum +
        (laserIndividualEquivalent(id) ?? laserAreaIndex.get(id)?.price ?? 0),
      0,
    ) * sessions;
  const packageTotal = Math.round(discountedPerSession * sessions);
  // The tier matrix splits additively: a tier's 1-session column is the pure
  // multi-area bonus, and the base tier's session column is the pure
  // multi-session bonus. Combined they always equal the tier's total rate.
  const multiAreaSavings =
    individualSum * (tier?.discounts[1] ?? 0) * sessions;
  const multiSessionSavings =
    (individualSum * LASER_DISCOUNT_TIERS[0].discounts[sessions] +
      bundleSum * bundleDiscountPercent) *
    sessions;
  const bundleSavings = individualEquivalentTotal - regularTotal;
  return {
    regularTotal,
    individualEquivalentTotal,
    individualAreaCount,
    bundleAreaCount,
    areaDiscountPercent,
    bundleDiscountPercent,
    savings: individualEquivalentTotal - packageTotal,
    multiAreaSavings,
    multiSessionSavings,
    bundleSavings,
    packageTotal,
    perSession: packageTotal / sessions,
  };
}

export function formatCad(amount: number): string {
  const hasCents = Math.round(amount * 100) % 100 !== 0;
  return amount.toLocaleString("en-CA", {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  });
}
