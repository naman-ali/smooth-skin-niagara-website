function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
  );
}

/** Scrolls the page to the top, respecting the user's motion preference. */
export function scrollToTop(element: HTMLElement | null) {
  if (typeof window === "undefined") return;
  const behavior = prefersReducedMotion() ? "auto" : "smooth";
  // Defer the scroll so React can finish rendering the new step first.
  window.setTimeout(() => {
    window.scrollTo({ top: 0, behavior });
    element?.scrollIntoView({ behavior, block: "start" });
  }, 0);
}

/** Scrolls to and focuses the first field with a validation error. */
export function focusFirstErrorField(fieldNames: string[], errors: unknown) {
  for (const name of fieldNames) {
    if (!hasNestedError(errors, name)) continue;
    const el = document.getElementById(name);
    if (!el) continue;
    el.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "center",
    });
    const focusable = el.matches("input, textarea, button, select")
      ? el
      : el.querySelector<HTMLElement>("input, textarea, button, select");
    focusable?.focus({ preventScroll: true });
    return;
  }
}

function hasNestedError(source: unknown, path: string): boolean {
  const segments = path.split(".");
  let current: unknown = source;
  for (const segment of segments) {
    if (!current || typeof current !== "object") return false;
    current = (current as Record<string, unknown>)[segment];
  }
  return Boolean(current);
}
