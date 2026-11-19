/**
 * The palette x type trial: the candidates, and the CSS that applies one of each to a scope.
 *
 * Nothing here ships in the site: it is imported only by Storybook (`.storybook/preview.tsx` and the trial stories). The real
 * theme still comes from band.config.json through `pnpm theme`; the pick made here is applied there, not here.
 */
import type { CSSProperties } from "react";

import config from "../../band.config.json";
import { typography } from "../../lib/band/config";
import { fontStack } from "../../lib/theme/fonts";
import { PALETTE_KEYS, resolvePalette, validatePalette, type Adjustment, type Palette } from "../../lib/theme/palette";
import candyPlum from "./palettes/candy-plum.json";
import foggyPeninsula from "./palettes/foggy-peninsula.json";
import lipstickBone from "./palettes/lipstick-bone.json";

export type PaletteId = "current" | "lipstick-bone" | "candy-plum" | "foggy-peninsula";
export type TypesetId = "current" | "pageant-bodoni" | "pageant-abril" | "jcard-anton" | "jcard-bebas";
export type BodyId = "set" | "courier-prime" | "cutive-mono";

export type PaletteCandidate = {
  id: PaletteId;
  label: string;
  /** What it is taken from, and what it is for. */
  blurb: string;
  /** After the contrast gate, exactly what `pnpm theme` would write. */
  palette: Palette;
  adjustments: Adjustment[];
};

const candidate = (id: PaletteId, label: string, blurb: string, raw: unknown): PaletteCandidate => ({ id, label, blurb, ...resolvePalette(validatePalette(raw)) });

export const PALETTES: PaletteCandidate[] = [
  candidate("current", "Current (band.config.json)", "The provisional palette from setup: the generator's output for a balanced red hue. The reference to beat.", config.palette),
  candidate("lipstick-bone", "Lipstick & bone", "Oxblood-black surfaces, bone text and metal, a bright cherry red as the accent. From the black-and-white portrait, the red lips and the red satin dress.", lipstickBone),
  candidate("candy-plum", "Candy clips on plum", "Aubergine-black surfaces with the hair clips' pink, mint and butter yellow as the three accents. Sweet colours on a dark ground.", candyPlum),
  candidate("foggy-peninsula", "Foggy Peninsula", "Slate-blue surfaces, fog-grey text, a stucco-pink accent, dusk blue and a softened bus-sign amber. Quieter. The dark version of the foggy street photo.", foggyPeninsula),
];

export type TypesetCandidate = {
  id: TypesetId;
  label: string;
  blurb: string;
  display: string;
  body: string;
  wordmark: string;
  kicker: string;
  /** Capitals and a little tracking on every display-face element (condensed faces need it). */
  caps: boolean;
  kickerStyle?: "italic" | "caps";
  /** What `init-band font-info` says about each face, so a choice is made knowing it. */
  notes: string[];
};

const BODONI = '"Bodoni Moda Variable", ui-serif, Georgia, serif';
const COURIER = '"Courier Prime", ui-monospace, monospace';
const CUTIVE = '"Cutive Mono", ui-monospace, monospace';

const currentDisplay = fontStack(typography.display);
const currentBody = fontStack(typography.body);

export const TYPESETS: TypesetCandidate[] = [
  {
    id: "current",
    label: "Current (band.config.json)",
    blurb: `${typography.display.family} headings, ${typography.body.family} body. Whatever band.config.json names today.`,
    display: currentDisplay,
    body: currentBody,
    wordmark: typography.wordmark ? fontStack(typography.wordmark) : currentDisplay,
    kicker: typography.kicker ? fontStack(typography.kicker) : currentDisplay,
    caps: Boolean(typography.wordmark?.uppercase),
    notes: [],
  },
  {
    id: "pageant-bodoni",
    label: "Pageant sash: Bodoni Moda",
    blurb: "A high-contrast Didone, sweet and formal on top. Italic Bodoni for the small flourish above headings; Courier Prime for the body.",
    display: BODONI,
    body: COURIER,
    wordmark: BODONI,
    kicker: BODONI,
    caps: false,
    kickerStyle: "italic",
    notes: ["Bodoni Moda: one variable file covering every weight (OFL-1.1).", "Courier Prime: static 400 and 700, so <strong> is a real bold (OFL-1.1)."],
  },
  {
    id: "pageant-abril",
    label: "Pageant sash: Abril Fatface",
    blurb: "A fat-face poster Didone: heavier and louder than Bodoni, like a sash lettered by a sign painter. Italic Bodoni for the flourish; Courier Prime body.",
    display: '"Abril Fatface", ui-serif, Georgia, serif',
    body: COURIER,
    wordmark: '"Abril Fatface", ui-serif, Georgia, serif',
    kicker: BODONI,
    caps: false,
    kickerStyle: "italic",
    notes: ["Abril Fatface tops out at 400, lighter than the extra-bold headings are set in; it is used at that weight as designed, not a faked bold (OFL-1.1).", "Bodoni Moda italic for the kicker: one variable file (OFL-1.1)."],
  },
  {
    id: "jcard-anton",
    label: "Cassette J-card: Anton",
    blurb: "Tall condensed capitals, like the title on a J-card spine. Cutive Mono for body and the small typed labels.",
    display: '"Anton", ui-sans-serif, system-ui, sans-serif',
    body: CUTIVE,
    wordmark: '"Anton", ui-sans-serif, system-ui, sans-serif',
    kicker: CUTIVE,
    caps: true,
    kickerStyle: "caps",
    notes: ["Anton tops out at 400, lighter than the extra-bold headings are set in; it is used at that weight as designed, not a faked bold (OFL-1.1).", "Cutive Mono has no bold, so <strong> text is a faked bold (OFL-1.1). Switch the body to Courier Prime in the toolbar to compare."],
  },
  {
    id: "jcard-bebas",
    label: "Cassette J-card: Bebas Neue",
    blurb: "Lighter, cleaner condensed capitals than Anton. Cutive Mono for body and the small typed labels.",
    display: '"Bebas Neue", ui-sans-serif, system-ui, sans-serif',
    body: CUTIVE,
    wordmark: '"Bebas Neue", ui-sans-serif, system-ui, sans-serif',
    kicker: CUTIVE,
    caps: true,
    kickerStyle: "caps",
    notes: ["Bebas Neue tops out at 400, lighter than the extra-bold headings are set in; it is used at that weight as designed, not a faked bold (OFL-1.1).", "Cutive Mono has no bold, so <strong> text is a faked bold (OFL-1.1). Switch the body to Courier Prime in the toolbar to compare."],
  },
];

export const BODIES: { id: BodyId; label: string; stack?: string }[] = [
  { id: "set", label: "Body: as the type set has it" },
  { id: "courier-prime", label: "Body: Courier Prime (real bold)", stack: COURIER },
  { id: "cutive-mono", label: "Body: Cutive Mono (no bold)", stack: CUTIVE },
];

const find = <T extends { id: string }>(list: T[], id: string | undefined): T => list.find((x) => x.id === id) ?? list[0];

export const paletteById = (id: string | undefined) => find(PALETTES, id);
export const typesetById = (id: string | undefined) => find(TYPESETS, id);

type Vars = Record<`--${string}`, string>;

/**
 * Every custom property a scope has to set. The font, shadow and gradient tokens are defined in terms of other tokens on
 * :root, where they are resolved once; a nested scope that only changed the colours would keep the root's glows, gradients
 * and wordmark and kicker faces. So each one is set again here, where it can see this scope's values.
 */
export function scopeVars(paletteId: string | undefined, typesetId: string | undefined, bodyId: string | undefined): Vars {
  const { palette } = paletteById(paletteId);
  const set = typesetById(typesetId);
  const body = BODIES.find((b) => b.id === bodyId)?.stack ?? set.body;
  const vars: Vars = {
    "--font-display": set.display,
    "--font-body": body,
    "--font-wordmark": set.wordmark,
    "--font-kicker": set.kicker,
    "--shadow-glow-accent": "0 0 24px color-mix(in srgb, var(--color-accent) 45%, transparent)",
    "--shadow-glow-accent-3": "0 0 24px color-mix(in srgb, var(--color-accent-3) 35%, transparent)",
    "--grad-accent": "linear-gradient(110deg, var(--color-accent) 0%, var(--color-accent-2) 55%, var(--color-accent-3) 100%)",
    "--grad-metal": "linear-gradient(180deg, var(--color-metal-hi) 0%, var(--color-metal-lo) 55%, var(--color-metal-mid) 100%)",
  };
  for (const key of PALETTE_KEYS) vars[`--color-${key}`] = palette[key];
  return vars;
}

/** The attributes trial.css keys its capitals and kicker rules on. */
export function scopeAttrs(typesetId: string | undefined): Record<string, string> {
  const set = typesetById(typesetId);
  return { ...(set.caps ? { "data-trial-caps": "" } : {}), ...(set.kickerStyle ? { "data-trial-kicker": set.kickerStyle } : {}) };
}

export const scopeStyle = (paletteId: string | undefined, typesetId: string | undefined, bodyId: string | undefined) => scopeVars(paletteId, typesetId, bodyId) as CSSProperties;

/** The photos, as web copies in public/images/, with the alt text a page would carry. */
export const PHOTOS = [
  { file: "hero.jpg", alt: "Cilla Hex singing into a microphone in a small, dark club, hands raised in the crowd in front of her.", use: "Hero (live)" },
  { file: "portrait.jpg", alt: "Black-and-white portrait of Cilla Hex in a dark blazer, ribbons and letter clips in her hair.", use: "Press kit portrait" },
  { file: "photobooth-strip.jpg", alt: "A four-frame photo-booth strip of Cilla Hex, serious in the first frame and laughing in the next two.", use: "Gallery strip" },
  { file: "studio.jpg", alt: "Cilla Hex standing with her arms crossed in a small rehearsal room, a drum machine, a synthesizer and cassettes on the table beside her.", use: "Wide (studio)" },
  { file: "laundromat.jpg", alt: "Cilla Hex sitting on a folding table in a laundromat, headphones around her neck and a cassette player on her belt.", use: "Wide (laundromat)" },
  { file: "street.jpg", alt: "Cilla Hex walking down a foggy San Francisco street in a red dress and a leather jacket, shoes in her hand.", use: "Tall (street)" },
  { file: "kitchen.jpg", alt: "Cilla Hex at a kitchen table in a striped shirt, a mug of coffee and handwritten pages in front of her.", use: "Square (kitchen)" },
  { file: "four-track.jpg", alt: "Hands in lace gloves on a cassette four-track recorder under a desk lamp, handwritten pages beside it.", use: "Thumbnail only (512px)" },
] as const;

/** Public-safe specimen copy. */
export const SPECIMEN = {
  name: "Cilla Hex",
  tagline: "Demos made alone while the band is on pause.",
  release: "Demos",
  tracks: ["Blood Doll", "He's My Pusher", "Everybody Likes You", "Heavy Sleeper", "Sugar Daddy"],
  lyric: { title: "Heavy Sleeper", album: "Demos", label: "Chorus", lines: ["I'd have done anything for you", "You never even had to say please", "I was so glad it was me", "I was so glad it was me"] },
} as const;
