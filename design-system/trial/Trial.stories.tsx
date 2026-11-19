import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { contrastRatio } from "../../lib/theme/contrast";
import { MIN_RATIO, PALETTE_KEYS, fmt } from "../../lib/theme/palette";
import { AlbumCard } from "../components/AlbumCard";
import { AppLink } from "../components/AppLink";
import { Button, ButtonLink } from "../components/Button";
import { Hero } from "../components/Hero";
import { LyricsBlock } from "../components/LyricsBlock";
import { SectionHeading } from "../components/SectionHeading";
import { TrackRow } from "../components/TrackRow";
import { Wordmark } from "../components/Wordmark";
import { ContrastTable } from "./ContrastTable";
import { BODIES, PALETTES, PHOTOS, SPECIMEN, TYPESETS, paletteById, typesetById } from "./trial";
import { TrialScope } from "./TrialScope";

const meta = {
  title: "Trial/Palette and type",
  parameters: { layout: "fullscreen" },
} satisfies Meta;
export default meta;

const ratio = (a: string, b: string) => `${fmt(contrastRatio(a, b))}:1`;

function Chosen({ palette, typeset, body }: { palette?: string; typeset?: string; body?: string }) {
  return (
    <p className="border-b border-line bg-surface px-6 py-3 text-sm text-muted">
      Showing <strong className="text-text">{paletteById(palette).label}</strong> with <strong className="text-text">{typesetById(typeset).label}</strong>
      {" "}({BODIES.find((b) => b.id === body)?.label ?? BODIES[0].label}). Change them with the Palette, Type and Body menus in the toolbar above the canvas; every other story in this Storybook follows the same menus.
    </p>
  );
}

/** One live page built from the real components. The toolbar's Palette, Type and Body menus re-theme it (and every other story). */
export const Specimen: StoryObj = {
  render: (_args, { globals }) => {
    const set = typesetById(globals.typeset);
    return (
      <div>
        <Chosen palette={globals.palette} typeset={globals.typeset} body={globals.body} />
        <Hero
          image="images/hero.jpg"
          kicker={SPECIMEN.release}
          title={SPECIMEN.name}
          blurb={SPECIMEN.tagline}
          actions={[
            { label: "Listen", href: "#" },
            { label: "Lyrics", href: "#", variant: "outline" },
          ]}
        />
        <div className="mx-auto max-w-5xl space-y-16 px-6 py-16">
          <section className="space-y-8">
            <SectionHeading kicker="Latest">{SPECIMEN.release}</SectionHeading>
            <div className="grid gap-8 md:grid-cols-[18rem_1fr]">
              <AlbumCard title={SPECIMEN.release} cover="images/portrait.jpg" trackCount={SPECIMEN.tracks.length} featured headingLevel="h3" />
              <ul>
                {SPECIMEN.tracks.map((title, i) => (
                  <TrackRow key={title} number={i + 1} title={title} lyricsHref="#" onQueue={() => {}} current={i === 3} />
                ))}
              </ul>
            </div>
          </section>

          <section>
            <LyricsBlock title={SPECIMEN.lyric.title} album={SPECIMEN.lyric.album} sections={[{ label: SPECIMEN.lyric.label, lines: [...SPECIMEN.lyric.lines] }]} />
          </section>

          <section className="space-y-6">
            <SectionHeading kicker="Buttons">Actions</SectionHeading>
            <div className="flex flex-wrap items-center gap-4">
              <Button>Listen</Button>
              <Button variant="outline">Lyrics</Button>
              <Button variant="ghost">Press kit</Button>
              <ButtonLink href="#" variant="outline">Link button</ButtonLink>
            </div>
          </section>

          <section className="space-y-4 rounded-card border border-line bg-surface p-6">
            <h2 className="font-display text-xs uppercase tracking-[0.25em] text-accent-2">This type set</h2>
            <p className="max-w-2xl">
              Body text in the body face, with <strong>bold</strong> and <em>italic</em>. {SPECIMEN.tagline}
            </p>
            <p className="text-sm text-muted">{set.blurb}</p>
            {set.notes.length > 0 && (
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
                {set.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    );
  },
};

/** Every palette against every type set, side by side. Each cell is a real Wordmark, SectionHeading and Button inside its own scope. */
export const Matrix: StoryObj = {
  render: () => (
    <div className="space-y-4 bg-void p-6 text-text">
      <p className="max-w-3xl text-sm text-muted">
        Rows are palettes, columns are type sets. The J-card sets use Cutive Mono for body text, which has no bold, so the bold words in those cells are faked:
        use the Body menu in the Specimen story to compare Courier Prime.
      </p>
      <div className="overflow-x-auto">
        <div className="grid min-w-max gap-3" style={{ gridTemplateColumns: `9rem repeat(${TYPESETS.length}, 19rem)` }}>
          <div />
          {TYPESETS.map((t) => (
            <h2 key={t.id} className="self-end text-xs uppercase tracking-widest text-dim">
              {t.label}
            </h2>
          ))}
          {PALETTES.map((p) => (
            <div key={p.id} className="contents">
              <h2 className="self-start pt-5 text-xs uppercase tracking-widest text-dim">{p.label}</h2>
              {TYPESETS.map((t) => (
                <TrialScope key={t.id} palette={p.id} typeset={t.id} className="space-y-4 rounded-card border border-line p-5">
                  <Wordmark />
                  <SectionHeading kicker={SPECIMEN.release}>Heavy Sleeper</SectionHeading>
                  <p className="text-sm">
                    Demos <strong>made alone</strong> while the band is on pause.
                  </p>
                  <div className="flex items-center gap-2" aria-label="Accent colours">
                    {(["accent", "accent-2", "accent-3"] as const).map((k) => (
                      <span key={k} className="size-5 rounded-full border border-line" style={{ background: `var(--color-${k})` }} />
                    ))}
                    <span className="ml-auto text-xs text-muted">{p.palette.accent}</span>
                  </div>
                  <Button>Listen</Button>
                </TrialScope>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Reds, from a deep lipstick to the bright cherry the Lipstick & bone palette uses as its accent.
const REDS: [string, string][] = [
  ["#b3141f", "Deep lipstick"],
  ["#c8202b", "Lipstick"],
  ["#dc2a35", "Bright lipstick"],
  ["#ee2f3a", "Cherry"],
  ["#f4313c", "Cherry (the palette's accent)"],
];

function RedNote() {
  const { palette } = paletteById("lipstick-bone");
  return (
    <section className="space-y-4 rounded-card border border-line bg-surface p-6">
      <h3 className="font-display text-xs uppercase tracking-[0.25em] text-accent-2">How red can this palette go?</h3>
      <p className="max-w-3xl text-sm text-muted">
        The accent colours are used as text (kickers, links, outline buttons), so each must reach {MIN_RATIO}:1 on every surface. A deep lipstick red does not; a bright cherry does. Deeper
        reds still work as a <em>fill</em> behind bone text, below. The worst case is the lightest surface (raised, {palette.raised}).
      </p>
      <table className="w-full max-w-3xl text-left text-sm">
        <caption className="mb-2 text-left text-xs uppercase tracking-widest text-dim">As text on this palette&apos;s surfaces, and as a fill under bone text</caption>
        <thead>
          <tr className="text-xs uppercase tracking-widest text-dim">
            <th scope="col" className="py-1 pr-4 font-normal">Red</th>
            <th scope="col" className="py-1 pr-4 font-normal">On surface</th>
            <th scope="col" className="py-1 pr-4 font-normal">On raised (worst)</th>
            <th scope="col" className="py-1 pr-4 font-normal">As text</th>
            <th scope="col" className="py-1 font-normal">Bone text on it</th>
          </tr>
        </thead>
        <tbody>
          {REDS.map(([hex, name]) => {
            const worst = contrastRatio(hex, palette.raised);
            return (
              <tr key={hex} className="border-t border-line">
                <td className="py-2 pr-4">
                  <span aria-hidden className="mr-2 inline-block size-3 border border-line align-middle" style={{ background: hex }} />
                  {name} <span className="text-muted">{hex}</span>
                </td>
                <td className="py-2 pr-4 tabular-nums">{ratio(hex, palette.surface)}</td>
                <td className="py-2 pr-4 tabular-nums">{ratio(hex, palette.raised)}</td>
                <td className="py-2 pr-4">{worst >= MIN_RATIO ? "Pass" : "Fail"}</td>
                <td className="py-2 tabular-nums">{ratio(palette.text, hex)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-wrap items-center gap-4">
        <span className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em]" style={{ background: "#b3141f", color: palette.text }}>
          Deep lipstick as a fill
        </span>
        <span className="text-sm text-muted">Bone text on it: {ratio(palette.text, "#b3141f")}.</span>
      </div>
    </section>
  );
}

/** The palettes: swatches with their contrast on the surface, the full gated-pair table, and the red question. */
export const Colors: StoryObj = {
  render: (_args, { globals }) => (
    <div className="space-y-12 bg-void p-8 text-text">
      {PALETTES.map((p) => (
        <TrialScope key={p.id} palette={p.id} typeset={globals.typeset} body={globals.body} className="space-y-6 rounded-card border border-line p-6">
          <header className="space-y-1">
            <h2 className="text-metal font-display text-3xl font-extrabold leading-none">{p.label}</h2>
            <p className="max-w-3xl text-sm text-muted">{p.blurb}</p>
          </header>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {PALETTE_KEYS.map((key) => (
              <li key={key} className="overflow-hidden rounded-card border border-line">
                <div className="h-14" style={{ background: p.palette[key] }} />
                <div className="space-y-0.5 bg-surface p-2 text-xs">
                  <p className="uppercase tracking-widest">{key}</p>
                  <p className="tabular-nums text-muted">{p.palette[key]}</p>
                  {!["void", "surface", "raised", "line"].includes(key) && <p className="text-dim">{ratio(p.palette[key], p.palette.surface)} on surface</p>}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <p className="font-kicker text-2xl text-accent">Kicker</p>
            <AppLink href="#" className="text-accent-2 underline underline-offset-4">A link</AppLink>
          </div>
          <ContrastTable palette={p.palette} adjustments={p.adjustments} />
          {p.id === "lipstick-bone" && <RedNote />}
        </TrialScope>
      ))}
    </div>
  ),
};

/** The type sets, each with the wordmark, a heading, a kicker, body text with bold, and what Fontsource says about each face. */
export const Type: StoryObj = {
  render: (_args, { globals }) => (
    <div className="space-y-12 bg-void p-8 text-text">
      <p className="max-w-3xl text-sm text-muted">Shown in the palette chosen in the toolbar. Single-weight faces are used at their one weight; none is given a faked bold.</p>
      {TYPESETS.map((t) => (
        <TrialScope key={t.id} palette={globals.palette} typeset={t.id} className="space-y-6 rounded-card border border-line p-6">
          <header className="space-y-1">
            <h2 className="font-display text-xs uppercase tracking-[0.25em] text-accent-2">{t.label}</h2>
            <p className="max-w-3xl text-sm text-muted">{t.blurb}</p>
          </header>
          <Wordmark size="lg" />
          <SectionHeading kicker={SPECIMEN.release}>Everybody Likes You</SectionHeading>
          <p className="max-w-2xl text-lg leading-8">
            {SPECIMEN.tagline} Body text with <strong>bold</strong> and <em>italic</em>: 01 02 03 04 05.
          </p>
          <ul className="max-w-xl">
            {SPECIMEN.tracks.slice(0, 3).map((title, i) => (
              <TrackRow key={title} number={i + 1} title={title} lyricsHref="#" onQueue={() => {}} />
            ))}
          </ul>
          {t.notes.length > 0 && (
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
              {t.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          )}
        </TrialScope>
      ))}
    </div>
  ),
};

/** The eight web copies in public/images/ (JPEG, at most 1600px wide, under 300 KB, metadata stripped), with the alt text each would carry. */
export const Photos: StoryObj = {
  render: () => (
    <div className="bg-void p-8 text-text">
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PHOTOS.map((p) => (
          <li key={p.file} className="overflow-hidden rounded-card border border-line bg-surface">
            <img src={`images/${p.file}`} alt={p.alt} loading="lazy" className="max-h-[28rem] w-full object-cover" />
            <div className="space-y-1 p-4 text-sm">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-accent-2">
                {p.file} · {p.use}
              </p>
              <p className="text-muted">{p.alt}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ),
};
