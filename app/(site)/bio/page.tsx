import type { Metadata } from "next";

import { Page } from "../../../components/site/section";
import { ButtonLink } from "../../../design-system/components/Button";
import { band, features } from "../../../lib/band/config";
import { pageMetadata } from "../../../lib/site/seo";
import { JsonLd } from "../../../components/site/json-ld";
import { getP1Page, rootProp } from "../../../lib/site/p1-content";
import { artistData } from "../../../lib/site/structured-data";
import { LightboxImage } from "../../../design-system/components/LightboxImage";
import { P1Page } from "../../../components/site/p1-page";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getP1Page("/bio");
  return pageMetadata({
    title: rootProp(doc, "title") ?? "Bio",
    description: rootProp(doc, "description") ?? band.description,
    path: "/bio",
    image: "/images/portrait.jpg",
  });
}

/** Renders the published P1 page when there is one; otherwise this copy. */
export default async function Bio() {
  const doc = await getP1Page("/bio");
  if (doc) {
    return (
      <>
        <JsonLd data={artistData()} />
        <P1Page data={doc} path="/bio" />
      </>
    );
  }
  return (
    <Page>
      <JsonLd data={artistData()} />
      <div className="grid items-start gap-10 md:grid-cols-[22rem_1fr]">
        <LightboxImage src="/images/portrait.jpg" alt={`${band.name}, portrait`} width={1100} height={1366} fetchPriority="high" className="w-full rounded-card border border-line" />
        <div className="space-y-6">
          <p className="font-kicker text-3xl text-accent">About</p>
          <h1 className="text-metal font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">
            {band.name}
          </h1>
          <div className="space-y-4 text-lg leading-8 text-muted">
            <p>{band.description}</p>
            <p>
              Cilla Hex was born Pricilla Nakagawa in Daly City, south of San Francisco. Her father worked at a cemetery in Colma, the next town over,
              where the dead outnumber the living, and she grew up around it. Her mother entered her in pageants. She left home at seventeen.
            </p>
            <p>She sings in Dead Prom Queens. Demos is her own: five songs, sung straight about the things she has decided to say out loud.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {features.tour && <ButtonLink href="/tour">Tour dates</ButtonLink>}
            {features.press && <ButtonLink href="/press" variant="outline">Press</ButtonLink>}
          </div>
        </div>
      </div>
    </Page>
  );
}
