import { useEffect, type ReactNode } from "react";

import { scopeAttrs, scopeStyle, scopeVars } from "./trial";

/**
 * Applies one palette and one type set to everything inside it. Used by the Matrix story, where many scopes sit side by side;
 * the real components inside re-theme because they read only the CSS variables.
 */
export function TrialScope({ palette, typeset, body, className = "", children }: { palette: string; typeset: string; body?: string; className?: string; children: ReactNode }) {
  return (
    <div style={scopeStyle(palette, typeset, body)} {...scopeAttrs(typeset)} className={`bg-void font-body text-text ${className}`}>
      {children}
    </div>
  );
}

/**
 * The toolbar's choice, applied to the whole preview document, so every story (not only the trial's) can be seen in any
 * candidate. Renders nothing; it sets the variables on <html>, where the theme declares them, and removes them on change.
 */
export function TrialRoot({ palette, typeset, body }: { palette: string; typeset: string; body?: string }) {
  useEffect(() => {
    const root = document.documentElement;
    const vars = scopeVars(palette, typeset, body);
    const attrs = scopeAttrs(typeset);
    for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v);
    for (const [k, v] of Object.entries(attrs)) root.setAttribute(k, v);
    return () => {
      for (const k of Object.keys(vars)) root.style.removeProperty(k);
      for (const k of Object.keys(attrs)) root.removeAttribute(k);
    };
  }, [palette, typeset, body]);
  return null;
}
