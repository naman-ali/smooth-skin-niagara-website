"use client";

import { Check, Info } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import { useConsultation } from "@/components/ConsultationModal";
import { cn } from "@/lib/utils";
import {
  LASER_AREA_GROUPS,
  LASER_DISCOUNT_TIERS,
  LASER_FULL_AREA_DISCOUNTS,
  LASER_SESSION_OPTIONS,
  formatCad,
  laserAreaById,
  laserAutoMerge,
  laserCoveredBy,
  laserEstimate,
  laserIndividualEquivalent,
  laserZoneCount,
  toggleLaserArea,
  type LaserMerge,
  type LaserSessionCount,
} from "@/lib/laser-pricing";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;

const sectionPadding = "px-3 lg:px-[53px]";

const eyebrowStyle =
  "font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)]";

const areaRow =
  "group flex items-center gap-[10px] rounded-[8px] px-[10px] py-[7px] transition-colors has-[:checked]:bg-[var(--olive-100)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--color-brand-primary)] has-[:focus-visible]:ring-offset-2";

const sessionCard =
  "group flex cursor-pointer items-center gap-[10px] rounded-[12px] border border-[var(--color-border)] bg-white px-[14px] py-[10px] transition-colors has-[:checked]:border-[var(--color-brand-primary)] has-[:checked]:bg-[var(--olive-100)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--color-brand-primary)] has-[:focus-visible]:ring-offset-2";

const checkboxBox =
  "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border-2 border-[var(--color-border-strong)] transition-all group-has-[:checked]:border-[var(--color-brand-primary)] group-has-[:checked]:bg-[var(--color-brand-primary)]";

const checkboxCheck =
  "text-white opacity-0 transition group-has-[:checked]:opacity-100";

const radioDot =
  "h-[16px] w-[16px] shrink-0 rounded-full border-2 border-[var(--color-border-strong)] bg-transparent transition-all group-has-[:checked]:border-[var(--color-brand-primary)] group-has-[:checked]:bg-[var(--color-brand-primary)] group-has-[:checked]:shadow-[inset_0_0_0_3px_#fff]";

export function LaserPricingCalculator() {
  const { open: openConsultation } = useConsultation();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sessions, setSessions] = useState<LaserSessionCount>(8);
  const [mergeNotice, setMergeNotice] = useState<{
    merges: LaserMerge[];
    previousIds: string[];
  } | null>(null);

  const estimate = laserEstimate(selectedIds, sessions);
  const zoneCount = laserZoneCount(selectedIds);
  const hasSelection = selectedIds.length > 0;

  const discountRows = [
    ...LASER_DISCOUNT_TIERS.map((tier) => ({
      label: tier.label,
      discounts: tier.discounts,
      active:
        hasSelection &&
        estimate.individualAreaCount >= tier.minAreas &&
        estimate.individualAreaCount <= tier.maxAreas,
    })),
    {
      label: "Full Area Treatments*",
      discounts: LASER_FULL_AREA_DISCOUNTS,
      active: hasSelection && estimate.bundleAreaCount > 0,
    },
  ];

  const applyMerge = (ids: string[], sessionCount: LaserSessionCount) => {
    const { selectedIds: mergedIds, merges } = laserAutoMerge(
      ids,
      sessionCount,
    );
    setSelectedIds(mergedIds);
    setMergeNotice(
      merges.length > 0 ? { merges, previousIds: ids } : null,
    );
  };

  const onToggleArea = (areaId: string) => {
    applyMerge(toggleLaserArea(areaId, selectedIds), sessions);
  };

  const onSelectSessions = (count: LaserSessionCount) => {
    setSessions(count);
    applyMerge(selectedIds, count);
  };

  const undoMerge = () => {
    if (mergeNotice) {
      setSelectedIds(mergeNotice.previousIds);
      setMergeNotice(null);
    }
  };

  return (
    <section
      id="pricing"
      className={cn(`${sectionPadding} bg-olive-50`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <span className={cn("block", eyebrowStyle)}>
            Laser Hair Removal Pricing
          </span>
          <h2
            className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[36px] leading-[1.1] lg:text-[44px]"
            style={{ margin: "22px 0 16px" }}
          >
            Build Your Package &amp; Estimate Your Savings
          </h2>
          <p
            className={cn(
              "mx-auto max-w-[680px] text-base lg:text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            Select one or more treatment areas and choose your sessions for an
            instant estimate. Prices are in Canadian dollars, per session — the
            more areas and sessions you choose, the more you save.
          </p>
        </div>

        <div className="border border-transparent p-0 sm:rounded-[24px] sm:border-[var(--color-border)] sm:bg-white sm:p-[36px]">
          <div className="grid grid-cols-1 gap-[36px] lg:grid-cols-[minmax(0,1fr)_370px] lg:gap-[80px]">
            <div className="min-w-0">
              <fieldset className="m-0 min-w-0 border-0 p-0">
                <legend className="mb-[6px] p-0">
                  <span className={eyebrowStyle}>Step 1</span>
                  <span className="mt-[6px] block font-[var(--font-display)] text-[20px] lg:text-[22px] font-normal text-[var(--color-text-primary)]">
                    Choose Your Treatment Areas
                  </span>
                </legend>
                <p className="mt-0 mr-0 mb-[22px] ml-0 font-[var(--font-body)] text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
                  Select as many areas as you like — each is priced per session.
                  Choosing a full area (like Full Legs) automatically covers its
                  smaller areas for you — and if your selections add up to a
                  full area, we&apos;ll combine them for the better price.
                </p>
                {mergeNotice && (
                  <div
                    aria-live="polite"
                    className="mb-[18px] flex items-start gap-[10px] rounded-[12px] bg-[var(--olive-100)] px-[14px] py-[12px]"
                    style={{ border: "1px solid var(--color-brand-primary)" }}
                  >
                    <Info
                      size={15}
                      className="mt-[2px] shrink-0 text-[var(--color-brand-primary)]"
                    />
                    <p className="m-0 flex-1 font-[var(--font-body)] text-[13px] leading-[1.55] text-[var(--color-text-primary)]">
                      {mergeNotice.merges.map((m) => (
                        <span key={m.comboId} className="block">
                          We combined{" "}
                          <strong>{m.coveredLabels.join(" + ")}</strong> into{" "}
                          <strong>{m.comboLabel}</strong> — same coverage,
                          better price.
                        </span>
                      ))}
                    </p>
                    <button
                      type="button"
                      onClick={undoMerge}
                      className="shrink-0 cursor-pointer border-0 bg-transparent p-0 font-[var(--font-body)] text-[13px] font-semibold text-[var(--color-brand-primary)] underline underline-offset-2"
                    >
                      Undo
                    </button>
                    <button
                      type="button"
                      aria-label="Dismiss"
                      onClick={() => setMergeNotice(null)}
                      className="shrink-0 cursor-pointer border-0 bg-transparent p-0 font-[var(--font-body)] text-[15px] leading-[1.2] text-[var(--color-text-secondary)]"
                    >
                      ×
                    </button>
                  </div>
                )}
                {LASER_AREA_GROUPS.map((group) => (
                  <div key={group.label} className="mb-[20px] last:mb-0">
                    <div className="mb-[10px] flex items-center gap-[16px]">
                      <span
                        className={cn(
                          eyebrowStyle,
                          "text-[var(--color-text-secondary)]",
                        )}
                      >
                        {group.label}
                      </span>
                      <span className="h-[1px] flex-1 bg-[var(--color-border)]" />
                    </div>
                    <div className="grid grid-cols-1 gap-x-[24px] gap-y-[2px] sm:grid-cols-2 xl:grid-cols-3">
                      {group.areas.map((area) => {
                        const coveredBy = laserCoveredBy(
                          area.id,
                          selectedIds,
                        );
                        const disabled = coveredBy !== null;
                        const equivalent = laserIndividualEquivalent(area.id);
                        return (
                          <label
                            key={area.id}
                            className={cn(
                              areaRow,
                              disabled
                                ? "cursor-not-allowed opacity-55"
                                : "cursor-pointer",
                            )}
                          >
                            <input
                              type="checkbox"
                              name="laser-area"
                              value={area.id}
                              checked={selectedIds.includes(area.id)}
                              disabled={disabled}
                              onChange={() => onToggleArea(area.id)}
                              className="sr-only"
                            />
                            <span
                              aria-hidden="true"
                              className={checkboxBox}
                            >
                              <Check
                                size={12}
                                strokeWidth={3}
                                className={checkboxCheck}
                              />
                            </span>
                            <span className="min-w-0 flex-1 font-[var(--font-body)] text-[13px] font-medium leading-[1.3] text-[var(--color-text-primary)]">
                              {area.label}
                              {disabled && (
                                <span className="block font-normal text-[11px] leading-[1.4] text-[var(--color-text-secondary)]">
                                  Included in {coveredBy}
                                </span>
                              )}
                              {equivalent !== null &&
                                equivalent > area.price && (
                                  <span className="block font-normal text-[11px] leading-[1.4] text-[var(--color-brand-primary)]">
                                    vs ${formatCad(equivalent)} individually
                                  </span>
                                )}
                            </span>
                            <span className="shrink-0 font-[var(--font-body)] text-[13px] font-semibold tabular-nums text-[var(--color-text-primary)]">
                              ${area.price}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </fieldset>

              <fieldset className="m-0 mt-[34px] min-w-0 border-0 p-0">
                <legend className="mb-[6px] p-0">
                  <span className={eyebrowStyle}>Step 2</span>
                  <span className="mt-[6px] block font-[var(--font-display)] text-[20px] lg:text-[22px] font-normal text-[var(--color-text-primary)]">
                    Choose Your Sessions
                  </span>
                </legend>
                <p className="mt-0 mr-0 mb-[18px] ml-0 font-[var(--font-body)] text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
                  Most clients see their best results with a series of 8
                  sessions, with occasional touch-ups as needed afterward.
                  Longer series unlock bigger package discounts.
                </p>
                <div className="grid grid-cols-1 gap-[8px] sm:grid-cols-3">
                  {LASER_SESSION_OPTIONS.map((count) => {
                    const preview = hasSelection
                      ? laserEstimate(selectedIds, count)
                      : null;
                    // Badge shows the package discount only — bundle savings
                    // are built-in pricing, not a session-count discount.
                    const previewDiscount =
                      preview && preview.regularTotal > 0
                        ? (preview.regularTotal - preview.packageTotal) /
                          preview.regularTotal
                        : 0;
                    return (
                      <label key={count} className={sessionCard}>
                        <input
                          type="radio"
                          name="laser-sessions"
                          value={count}
                          checked={sessions === count}
                          onChange={() => onSelectSessions(count)}
                          className="sr-only"
                        />
                        <span aria-hidden="true" className={radioDot} />
                        <span className="min-w-0 flex-1">
                          <span className="block font-[var(--font-body)] text-[14px] font-semibold leading-[1.3] text-[var(--color-text-primary)]">
                            {count === 1
                              ? "Single Session"
                              : `${count} Sessions`}
                          </span>
                          {previewDiscount > 0 && (
                            <span className="mt-[4px] inline-block font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand-primary)] bg-[var(--olive-100)] px-[8px] py-[2px] rounded-[999px] group-has-[:checked]:bg-white">
                              Save {Math.round(previewDiscount * 100)}%
                            </span>
                          )}
                        </span>
                        <span className="font-[var(--font-body)] text-[15px] font-semibold tabular-nums text-[var(--color-text-primary)]">
                          {preview !== null
                            ? `$${formatCad(preview.packageTotal)}`
                            : "Select areas"}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-[34px]">
                <span className={eyebrowStyle}>Package Discounts</span>
                <h3 className="mt-[6px] mr-0 mb-[6px] ml-0 font-[var(--font-display)] text-[20px] lg:text-[22px] font-normal text-[var(--color-text-primary)]">
                  The More You Treat, the More You Save
                </h3>
                <p className="mt-0 mr-0 mb-[16px] ml-0 font-[var(--font-body)] text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
                  The more areas and sessions you choose, the more you save.
                  Your discount is applied once to your package total, based on
                  the number of areas and sessions selected.
                </p>
                <div className="overflow-x-auto rounded-[16px] border border-[var(--color-border)] bg-white">
                  <table className="w-full min-w-[420px] border-collapse font-[var(--font-body)] text-[14px]">
                    <thead>
                      <tr className="bg-[var(--olive-100)]">
                        <th className="border-b border-[var(--color-border)] px-[16px] py-[12px] text-left font-semibold text-[var(--color-text-primary)]">
                          Treatment areas
                        </th>
                        {LASER_SESSION_OPTIONS.map((count) => (
                          <th
                            key={count}
                            className="border-b border-l border-[var(--color-border)] px-[16px] py-[12px] text-center font-semibold text-[var(--color-text-primary)]"
                          >
                            {count === 1
                              ? "1 session"
                              : `${count} sessions`}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {discountRows.map((row) => (
                        <tr
                          key={row.label}
                          className="last:[&>td]:border-b-0"
                        >
                          <td
                            className={cn(
                              "border-b border-[var(--color-border)] px-[16px] py-[12px] font-semibold",
                              row.active
                                ? "text-[var(--color-brand-primary)]"
                                : "text-[var(--color-text-primary)]",
                            )}
                          >
                            {row.label}
                          </td>
                          {LASER_SESSION_OPTIONS.map((count) => {
                            const active = row.active && sessions === count;
                            const cellText =
                              row.discounts[count] === 0
                                ? "0%"
                                : `${row.discounts[count] * 100}% off`;
                            return (
                              <td
                                key={count}
                                className={cn(
                                  "border-b border-l border-[var(--color-border)] px-[16px] py-[12px] text-center tabular-nums",
                                  active
                                    ? "bg-[var(--olive-100)]"
                                    : "text-[var(--color-text-secondary)]",
                                )}
                              >
                                {active ? (
                                  <span className="inline-block rounded-[999px] bg-[var(--olive-700)] px-[14px] py-[4px] font-bold text-[var(--olive-100)]">
                                    {cellText}
                                  </span>
                                ) : (
                                  cellText
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-[10px] mr-0 mb-0 ml-0 font-[var(--font-body)] text-[12px] leading-[1.55] text-[var(--color-text-secondary)]">
                  *Full Area Treatments include Full Face, Full Arms, Full
                  Legs, Full Back, Full Chest &amp; Abdomen, and Full Body.
                  These treatments are already specially priced, so only
                  session discounts apply — they do not qualify for additional
                  multi-area discounts. Discounts are applied once and cannot
                  be combined.
                </p>
              </div>
            </div>

            <div aria-live="polite" className="min-w-0 lg:self-start">
              <div
                className="rounded-[20px] bg-white p-[24px] sm:bg-[var(--olive-50)] sm:p-[28px] lg:sticky lg:top-[100px]"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <span className={eyebrowStyle}>Your Treatment Estimate</span>
                <h3 className="mt-[10px] mr-0 mb-[10px] ml-0 font-[var(--font-display)] text-[24px] font-normal leading-[1.2] text-[var(--color-text-primary)]">
                  Your Selections and Estimated Cost
                </h3>
                <p className="m-0 mb-[20px] font-[var(--font-body)] text-[13px] leading-[1.6] text-[var(--color-text-secondary)]">
                  A starting point to help you plan. Your final treatment plan
                  and pricing are confirmed during a free consultation with
                  Ashley.
                </p>

                {!hasSelection ? (
                  <div
                    className="rounded-[14px] bg-white px-[18px] py-[20px] text-center"
                    style={{ border: "1px dashed var(--color-border-strong)" }}
                  >
                    <p className="m-0 font-[var(--font-body)] text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
                      Select one or more treatment areas to see your estimate.
                    </p>
                  </div>
                ) : (
                  <>
                    <dl className="m-0 font-[var(--font-body)] text-[14px]">
                      <div className="flex items-baseline justify-between gap-[14px] border-b border-[var(--color-border)] pb-[9px]">
                        <dt className="shrink-0 text-[var(--color-text-secondary)]">
                          Treatment areas
                        </dt>
                        <dd className="m-0 text-right font-semibold text-[var(--color-text-primary)]">
                          {zoneCount} {zoneCount === 1 ? "area" : "areas"}
                        </dd>
                      </div>
                      <div className="border-b border-[var(--color-border)] py-[9px]">
                        <dd className="m-0 text-right font-[var(--font-body)] text-[13px] leading-[1.6] text-[var(--color-text-secondary)]">
                          {selectedIds
                            .map((id) => laserAreaById(id)?.label)
                            .filter(Boolean)
                            .join(" · ")}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-[14px] border-b border-[var(--color-border)] py-[9px]">
                        <dt className="text-[var(--color-text-secondary)]">
                          Sessions
                        </dt>
                        <dd className="m-0 text-right font-semibold text-[var(--color-text-primary)]">
                          {sessions === 1
                            ? "Single session"
                            : `${sessions} sessions`}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-[16px] space-y-[8px] font-[var(--font-body)] text-[14px]">
                      <div className="flex items-baseline justify-between gap-[14px]">
                        <span className="text-[var(--color-text-secondary)]">
                          {estimate.bundleSavings > 0
                            ? "If booked individually"
                            : "Regular price"}
                        </span>
                        <span className="font-medium tabular-nums text-[var(--color-text-primary)]">
                          ${formatCad(estimate.individualEquivalentTotal)}
                        </span>
                      </div>
                      {(
                        [
                          ["Full treatment savings", estimate.bundleSavings],
                          ["Multi-session savings", estimate.multiSessionSavings],
                          ["Multi-area savings", estimate.multiAreaSavings],
                        ] as const
                      ).map(([label, amount]) =>
                        amount > 0 ? (
                          <div
                            key={label}
                            className="flex items-baseline justify-between gap-[14px] text-[var(--color-brand-primary)]"
                          >
                            <span>{label}</span>
                            <span className="font-medium tabular-nums">
                              −${formatCad(amount)}
                            </span>
                          </div>
                        ) : null,
                      )}
                      <div className="mt-[14px] flex items-baseline justify-between gap-[14px] border-t border-[var(--color-border)] pt-[14px]">
                        <span className="font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)]">
                          Package price
                        </span>
                        <span className="font-[var(--font-display)] text-[30px] font-medium leading-[1.1] tabular-nums text-[var(--color-text-primary)]">
                          ${formatCad(estimate.packageTotal)}
                          <span className="ml-[4px] font-[var(--font-body)] text-[12px] font-normal text-[var(--color-text-secondary)]">
                            CAD
                          </span>
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between gap-[14px]">
                        <span className="text-[var(--color-text-secondary)]">
                          Price per session
                        </span>
                        <span className="font-medium tabular-nums text-[var(--color-text-primary)]">
                          ${formatCad(estimate.perSession)}
                        </span>
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-[22px]">
                  <Button
                    variant="primary"
                    onClick={openConsultation}
                    style={{ width: "100%", whiteSpace: "normal" }}
                  >
                    Book My Free Consultation →
                  </Button>
                  <p className="mb-0 mt-[10px] text-center font-[var(--font-body)] text-[12px] text-[var(--color-text-secondary)]">
                    Free consultation · No obligation
                  </p>
                  <p className="mb-0 mt-[16px] flex items-start gap-[8px] border-t border-[var(--color-border)] pt-[14px] font-[var(--font-body)] text-[12px] leading-[1.5] text-[var(--color-text-secondary)]">
                    <Info
                      size={14}
                      className="mt-[1px] shrink-0 text-[var(--color-text-secondary)]"
                    />
                    <span>
                      Pricing shown in Canadian dollars. Treatment suitability
                      and final pricing will be confirmed during your
                      consultation.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LaserPricingCalculator;
