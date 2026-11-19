import type { Preview } from "@storybook/nextjs-vite";
import { themes } from "storybook/theming";

import "../design-system/fonts";
import "../design-system/ds.css";
import "../design-system/base.css";
// The palette x type trial (Storybook only): its font files, its few CSS rules, and the toolbar that applies a candidate.
import "../design-system/trial/fonts";
import "../design-system/trial/trial.css";
import { BODIES, PALETTES, TYPESETS } from "../design-system/trial/trial";
import { TrialRoot } from "../design-system/trial/TrialScope";

// The site is dark only. Without a wrapper, Storybook's own canvas and docs pages are white
// and the light-on-dark tokens become unreadable, so every story renders on the site surface.
const preview: Preview = {
  // Defaults are the current band.config.json choices, so every story looks as it does on the site until a candidate is picked.
  initialGlobals: { palette: "current", typeset: "current", body: "set" },
  globalTypes: {
    palette: {
      description: "Trial palette",
      toolbar: { title: "Palette", icon: "paintbrush", dynamicTitle: true, items: PALETTES.map((p) => ({ value: p.id, title: p.label })) },
    },
    typeset: {
      description: "Trial type set",
      toolbar: { title: "Type", icon: "type", dynamicTitle: true, items: TYPESETS.map((t) => ({ value: t.id, title: t.label })) },
    },
    body: {
      description: "Trial body face",
      toolbar: { title: "Body", icon: "edit", dynamicTitle: true, items: BODIES.map((b) => ({ value: b.id, title: b.label })) },
    },
  },
  decorators: [
    (Story, { parameters }) => (
      <div
        className={`bg-void font-body text-text ${parameters.layout === "fullscreen" ? "" : "p-8"}`}
      >
        <Story />
      </div>
    ),
    (Story, { globals }) => (
      <>
        <TrialRoot palette={globals.palette} typeset={globals.typeset} body={globals.body} />
        <Story />
      </>
    ),
  ],
  parameters: {
    backgrounds: { disable: true },
    docs: { theme: themes.dark },
    layout: "centered",
    a11y: { test: "error" },
  },
  tags: ["autodocs"],
};

export default preview;
