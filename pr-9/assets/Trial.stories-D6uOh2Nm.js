import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{a as n,c as r,i,l as a,n as o,r as s,t as c}from"./palette-DM4qaO1u.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,u as v}from"./iframe-C80D-jK_.js";import{n as y,t as b}from"./AppLink-BK5-TIRE.js";import{n as x,t as S}from"./Wordmark-m5tuwydC.js";import{n as C,t as w}from"./AlbumCard-uRF5hUkb.js";import{n as T,r as E,t as D}from"./Button-BvSej_XS.js";import{n as O,t as k}from"./Hero-BB7RS6Ly.js";import{n as A,t as j}from"./LyricsBlock-DnPHoTZ3.js";import{n as M,t as N}from"./SectionHeading-HS01VILk.js";import{n as P,t as F}from"./TrackRow-DG7ufE1R.js";function I({palette:e,adjustments:t}){return(0,L.jsxs)(`div`,{className:`space-y-3`,children:[(0,L.jsx)(`p`,{className:`text-sm text-muted`,children:t.length?t.map(e=>`${e.key} lifted from ${e.from} to ${e.to}`).join(`; `):`The gate adjusted nothing: every colour clears it as written.`}),(0,L.jsxs)(`table`,{className:`w-full max-w-3xl text-left text-sm`,children:[(0,L.jsxs)(`caption`,{className:`mb-2 text-left text-xs uppercase tracking-widest text-dim`,children:[`Every gated pair against WCAG AA (`,c,`:1)`]}),(0,L.jsx)(`thead`,{children:(0,L.jsxs)(`tr`,{className:`text-xs uppercase tracking-widest text-dim`,children:[(0,L.jsx)(`th`,{scope:`col`,className:`py-1 pr-4 font-normal`,children:`Text or fill`}),(0,L.jsx)(`th`,{scope:`col`,className:`py-1 pr-4 font-normal`,children:`On`}),(0,L.jsx)(`th`,{scope:`col`,className:`py-1 pr-4 font-normal`,children:`Ratio`}),(0,L.jsx)(`th`,{scope:`col`,className:`py-1 font-normal`,children:`AA`})]})}),(0,L.jsx)(`tbody`,{children:s(e).map(t=>(0,L.jsxs)(`tr`,{className:`border-t border-line`,children:[(0,L.jsxs)(`td`,{className:`py-1 pr-4`,children:[(0,L.jsx)(`span`,{"aria-hidden":!0,className:`mr-2 inline-block size-3 border border-line align-middle`,style:{background:e[t.fg]}}),t.fg]}),(0,L.jsx)(`td`,{className:`py-1 pr-4 text-muted`,children:t.bg}),(0,L.jsx)(`td`,{className:`py-1 pr-4 tabular-nums`,children:R(e[t.fg],e[t.bg])}),(0,L.jsx)(`td`,{className:`py-1`,children:t.ok?`Pass`:`Fail`})]},`${t.fg}-${t.bg}`))})]})]})}var L,R;function z(){return(z=e((()=>{L=t(),a(),n(),R=(e,t)=>`${i(r(e,t))}:1`,I.__docgenInfo={description:`Every pair the generator gates on, for one palette, with what the gate adjusted (nothing, for every candidate here).`,methods:[],displayName:`ContrastTable`,props:{palette:{required:!0,tsType:{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof PALETTE_KEYS)[number]`},{name:`string`}],raw:`Record<PaletteKey, string>`},description:``},adjustments:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ key: PaletteKey; from: string; to: string; reason: string }`,signature:{properties:[{key:`key`,value:{name:`unknown[number]`,raw:`(typeof PALETTE_KEYS)[number]`,required:!0}},{key:`from`,value:{name:`string`,required:!0}},{key:`to`,value:{name:`string`,required:!0}},{key:`reason`,value:{name:`string`,required:!0}}]}}],raw:`Adjustment[]`},description:``}}}})))()}function B({palette:e,typeset:t,body:n}){return(0,H.jsxs)(`p`,{className:`border-b border-line bg-surface px-6 py-3 text-sm text-muted`,children:[`Showing `,(0,H.jsx)(`strong`,{className:`text-text`,children:v(e).label}),` with `,(0,H.jsx)(`strong`,{className:`text-text`,children:d(t).label}),` `,`(`,f.find(e=>e.id===n)?.label??f[0].label,`). Change them with the Palette, Type and Body menus in the toolbar above the canvas; every other story in this Storybook follows the same menus.`]})}function V(){let{palette:e}=v(`lipstick-bone`);return(0,H.jsxs)(`section`,{className:`space-y-4 rounded-card border border-line bg-surface p-6`,children:[(0,H.jsx)(`h3`,{className:`font-display text-xs uppercase tracking-[0.25em] text-accent-2`,children:`How red can this palette go?`}),(0,H.jsxs)(`p`,{className:`max-w-3xl text-sm text-muted`,children:[`The accent colours are used as text (kickers, links, outline buttons), so each must reach `,c,`:1 on every surface. A deep lipstick red does not; a bright cherry does. Deeper reds still work as a `,(0,H.jsx)(`em`,{children:`fill`}),` behind bone text, below. The worst case is the lightest surface (raised, `,e.raised,`).`]}),(0,H.jsxs)(`table`,{className:`w-full max-w-3xl text-left text-sm`,children:[(0,H.jsx)(`caption`,{className:`mb-2 text-left text-xs uppercase tracking-widest text-dim`,children:`As text on this palette's surfaces, and as a fill under bone text`}),(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{className:`text-xs uppercase tracking-widest text-dim`,children:[(0,H.jsx)(`th`,{scope:`col`,className:`py-1 pr-4 font-normal`,children:`Red`}),(0,H.jsx)(`th`,{scope:`col`,className:`py-1 pr-4 font-normal`,children:`On surface`}),(0,H.jsx)(`th`,{scope:`col`,className:`py-1 pr-4 font-normal`,children:`On raised (worst)`}),(0,H.jsx)(`th`,{scope:`col`,className:`py-1 pr-4 font-normal`,children:`As text`}),(0,H.jsx)(`th`,{scope:`col`,className:`py-1 font-normal`,children:`Bone text on it`})]})}),(0,H.jsx)(`tbody`,{children:q.map(([t,n])=>{let i=r(t,e.raised);return(0,H.jsxs)(`tr`,{className:`border-t border-line`,children:[(0,H.jsxs)(`td`,{className:`py-2 pr-4`,children:[(0,H.jsx)(`span`,{"aria-hidden":!0,className:`mr-2 inline-block size-3 border border-line align-middle`,style:{background:t}}),n,` `,(0,H.jsx)(`span`,{className:`text-muted`,children:t})]}),(0,H.jsx)(`td`,{className:`py-2 pr-4 tabular-nums`,children:W(t,e.surface)}),(0,H.jsx)(`td`,{className:`py-2 pr-4 tabular-nums`,children:W(t,e.raised)}),(0,H.jsx)(`td`,{className:`py-2 pr-4`,children:i>=4.5?`Pass`:`Fail`}),(0,H.jsx)(`td`,{className:`py-2 tabular-nums`,children:W(e.text,t)})]},t)})})]}),(0,H.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,H.jsx)(`span`,{className:`px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em]`,style:{background:`#b3141f`,color:e.text},children:`Deep lipstick as a fill`}),(0,H.jsxs)(`span`,{className:`text-sm text-muted`,children:[`Bone text on it: `,W(e.text,`#b3141f`),`.`]})]})]})}var H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{H=t(),a(),n(),C(),y(),E(),O(),A(),M(),P(),x(),z(),p(),g(),U={title:`Trial/Palette and type`,parameters:{layout:`fullscreen`}},W=(e,t)=>`${i(r(e,t))}:1`,G={render:(e,{globals:t})=>{let n=d(t.typeset);return(0,H.jsxs)(`div`,{children:[(0,H.jsx)(B,{palette:t.palette,typeset:t.typeset,body:t.body}),(0,H.jsx)(k,{image:`images/hero.jpg`,kicker:_.release,title:_.name,blurb:_.tagline,actions:[{label:`Listen`,href:`#`},{label:`Lyrics`,href:`#`,variant:`outline`}]}),(0,H.jsxs)(`div`,{className:`mx-auto max-w-5xl space-y-16 px-6 py-16`,children:[(0,H.jsxs)(`section`,{className:`space-y-8`,children:[(0,H.jsx)(N,{kicker:`Latest`,children:_.release}),(0,H.jsxs)(`div`,{className:`grid gap-8 md:grid-cols-[18rem_1fr]`,children:[(0,H.jsx)(w,{title:_.release,cover:`images/portrait.jpg`,trackCount:_.tracks.length,featured:!0,headingLevel:`h3`}),(0,H.jsx)(`ul`,{children:_.tracks.map((e,t)=>(0,H.jsx)(F,{number:t+1,title:e,lyricsHref:`#`,onQueue:()=>{},current:t===3},e))})]})]}),(0,H.jsx)(`section`,{children:(0,H.jsx)(j,{title:_.lyric.title,album:_.lyric.album,sections:[{label:_.lyric.label,lines:[..._.lyric.lines]}]})}),(0,H.jsxs)(`section`,{className:`space-y-6`,children:[(0,H.jsx)(N,{kicker:`Buttons`,children:`Actions`}),(0,H.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,H.jsx)(D,{children:`Listen`}),(0,H.jsx)(D,{variant:`outline`,children:`Lyrics`}),(0,H.jsx)(D,{variant:`ghost`,children:`Press kit`}),(0,H.jsx)(T,{href:`#`,variant:`outline`,children:`Link button`})]})]}),(0,H.jsxs)(`section`,{className:`space-y-4 rounded-card border border-line bg-surface p-6`,children:[(0,H.jsx)(`h2`,{className:`font-display text-xs uppercase tracking-[0.25em] text-accent-2`,children:`This type set`}),(0,H.jsxs)(`p`,{className:`max-w-2xl`,children:[`Body text in the body face, with `,(0,H.jsx)(`strong`,{children:`bold`}),` and `,(0,H.jsx)(`em`,{children:`italic`}),`. `,_.tagline]}),(0,H.jsx)(`p`,{className:`text-sm text-muted`,children:n.blurb}),n.notes.length>0&&(0,H.jsx)(`ul`,{className:`list-disc space-y-1 pl-5 text-sm text-muted`,children:n.notes.map(e=>(0,H.jsx)(`li`,{children:e},e))})]})]})]})}},K={render:()=>(0,H.jsxs)(`div`,{className:`space-y-4 bg-void p-6 text-text`,children:[(0,H.jsx)(`p`,{className:`max-w-3xl text-sm text-muted`,children:`Rows are palettes, columns are type sets. The J-card sets use Cutive Mono for body text, which has no bold, so the bold words in those cells are faked: use the Body menu in the Specimen story to compare Courier Prime.`}),(0,H.jsx)(`div`,{className:`overflow-x-auto`,children:(0,H.jsxs)(`div`,{className:`grid min-w-max gap-3`,style:{gridTemplateColumns:`9rem repeat(${u.length}, 19rem)`},children:[(0,H.jsx)(`div`,{}),u.map(e=>(0,H.jsx)(`h2`,{className:`self-end text-xs uppercase tracking-widest text-dim`,children:e.label},e.id)),l.map(e=>(0,H.jsxs)(`div`,{className:`contents`,children:[(0,H.jsx)(`h2`,{className:`self-start pt-5 text-xs uppercase tracking-widest text-dim`,children:e.label}),u.map(t=>(0,H.jsxs)(m,{palette:e.id,typeset:t.id,className:`space-y-4 rounded-card border border-line p-5`,children:[(0,H.jsx)(S,{}),(0,H.jsx)(N,{kicker:_.release,children:`Heavy Sleeper`}),(0,H.jsxs)(`p`,{className:`text-sm`,children:[`Demos `,(0,H.jsx)(`strong`,{children:`made alone`}),` while the band is on pause.`]}),(0,H.jsxs)(`div`,{className:`flex items-center gap-2`,"aria-label":`Accent colours`,children:[[`accent`,`accent-2`,`accent-3`].map(e=>(0,H.jsx)(`span`,{className:`size-5 rounded-full border border-line`,style:{background:`var(--color-${e})`}},e)),(0,H.jsx)(`span`,{className:`ml-auto text-xs text-muted`,children:e.palette.accent})]}),(0,H.jsx)(D,{children:`Listen`})]},t.id))]},e.id))]})})]})},q=[[`#b3141f`,`Deep lipstick`],[`#c8202b`,`Lipstick`],[`#dc2a35`,`Bright lipstick`],[`#ee2f3a`,`Cherry`],[`#f4313c`,`Cherry (the palette's accent)`]],J={render:(e,{globals:t})=>(0,H.jsx)(`div`,{className:`space-y-12 bg-void p-8 text-text`,children:l.map(e=>(0,H.jsxs)(m,{palette:e.id,typeset:t.typeset,body:t.body,className:`space-y-6 rounded-card border border-line p-6`,children:[(0,H.jsxs)(`header`,{className:`space-y-1`,children:[(0,H.jsx)(`h2`,{className:`text-metal font-display text-3xl font-extrabold leading-none`,children:e.label}),(0,H.jsx)(`p`,{className:`max-w-3xl text-sm text-muted`,children:e.blurb})]}),(0,H.jsx)(`ul`,{className:`grid grid-cols-2 gap-3 md:grid-cols-5`,children:o.map(t=>(0,H.jsxs)(`li`,{className:`overflow-hidden rounded-card border border-line`,children:[(0,H.jsx)(`div`,{className:`h-14`,style:{background:e.palette[t]}}),(0,H.jsxs)(`div`,{className:`space-y-0.5 bg-surface p-2 text-xs`,children:[(0,H.jsx)(`p`,{className:`uppercase tracking-widest`,children:t}),(0,H.jsx)(`p`,{className:`tabular-nums text-muted`,children:e.palette[t]}),![`void`,`surface`,`raised`,`line`].includes(t)&&(0,H.jsxs)(`p`,{className:`text-dim`,children:[W(e.palette[t],e.palette.surface),` on surface`]})]})]},t))}),(0,H.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,H.jsx)(D,{children:`Primary`}),(0,H.jsx)(D,{variant:`outline`,children:`Outline`}),(0,H.jsx)(D,{variant:`ghost`,children:`Ghost`}),(0,H.jsx)(`p`,{className:`font-kicker text-2xl text-accent`,children:`Kicker`}),(0,H.jsx)(b,{href:`#`,className:`text-accent-2 underline underline-offset-4`,children:`A link`})]}),(0,H.jsx)(I,{palette:e.palette,adjustments:e.adjustments}),e.id===`lipstick-bone`&&(0,H.jsx)(V,{})]},e.id))})},Y={render:(e,{globals:t})=>(0,H.jsxs)(`div`,{className:`space-y-12 bg-void p-8 text-text`,children:[(0,H.jsx)(`p`,{className:`max-w-3xl text-sm text-muted`,children:`Shown in the palette chosen in the toolbar. Single-weight faces are used at their one weight; none is given a faked bold.`}),u.map(e=>(0,H.jsxs)(m,{palette:t.palette,typeset:e.id,className:`space-y-6 rounded-card border border-line p-6`,children:[(0,H.jsxs)(`header`,{className:`space-y-1`,children:[(0,H.jsx)(`h2`,{className:`font-display text-xs uppercase tracking-[0.25em] text-accent-2`,children:e.label}),(0,H.jsx)(`p`,{className:`max-w-3xl text-sm text-muted`,children:e.blurb})]}),(0,H.jsx)(S,{size:`lg`}),(0,H.jsx)(N,{kicker:_.release,children:`Everybody Likes You`}),(0,H.jsxs)(`p`,{className:`max-w-2xl text-lg leading-8`,children:[_.tagline,` Body text with `,(0,H.jsx)(`strong`,{children:`bold`}),` and `,(0,H.jsx)(`em`,{children:`italic`}),`: 01 02 03 04 05.`]}),(0,H.jsx)(`ul`,{className:`max-w-xl`,children:_.tracks.slice(0,3).map((e,t)=>(0,H.jsx)(F,{number:t+1,title:e,lyricsHref:`#`,onQueue:()=>{}},e))}),e.notes.length>0&&(0,H.jsx)(`ul`,{className:`list-disc space-y-1 pl-5 text-sm text-muted`,children:e.notes.map(e=>(0,H.jsx)(`li`,{children:e},e))})]},e.id))]})},X={render:()=>(0,H.jsx)(`div`,{className:`bg-void p-8 text-text`,children:(0,H.jsx)(`ul`,{className:`grid gap-6 md:grid-cols-2 xl:grid-cols-3`,children:h.map(e=>(0,H.jsxs)(`li`,{className:`overflow-hidden rounded-card border border-line bg-surface`,children:[(0,H.jsx)(`img`,{src:`images/${e.file}`,alt:e.alt,loading:`lazy`,className:`max-h-[28rem] w-full object-cover`}),(0,H.jsxs)(`div`,{className:`space-y-1 p-4 text-sm`,children:[(0,H.jsxs)(`p`,{className:`font-display text-xs uppercase tracking-[0.2em] text-accent-2`,children:[e.file,` · `,e.use]}),(0,H.jsx)(`p`,{className:`text-muted`,children:e.alt})]})]},e.file))})})},Z=[`Specimen`,`Matrix`,`Colors`,`Type`,`Photos`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: (_args, {
    globals
  }) => {
    const set = typesetById(globals.typeset);
    return <div>
        <Chosen palette={globals.palette} typeset={globals.typeset} body={globals.body} />
        <Hero image="images/hero.jpg" kicker={SPECIMEN.release} title={SPECIMEN.name} blurb={SPECIMEN.tagline} actions={[{
        label: "Listen",
        href: "#"
      }, {
        label: "Lyrics",
        href: "#",
        variant: "outline"
      }]} />
        <div className="mx-auto max-w-5xl space-y-16 px-6 py-16">
          <section className="space-y-8">
            <SectionHeading kicker="Latest">{SPECIMEN.release}</SectionHeading>
            <div className="grid gap-8 md:grid-cols-[18rem_1fr]">
              <AlbumCard title={SPECIMEN.release} cover="images/portrait.jpg" trackCount={SPECIMEN.tracks.length} featured headingLevel="h3" />
              <ul>
                {SPECIMEN.tracks.map((title, i) => <TrackRow key={title} number={i + 1} title={title} lyricsHref="#" onQueue={() => {}} current={i === 3} />)}
              </ul>
            </div>
          </section>

          <section>
            <LyricsBlock title={SPECIMEN.lyric.title} album={SPECIMEN.lyric.album} sections={[{
            label: SPECIMEN.lyric.label,
            lines: [...SPECIMEN.lyric.lines]
          }]} />
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
            {set.notes.length > 0 && <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
                {set.notes.map(n => <li key={n}>{n}</li>)}
              </ul>}
          </section>
        </div>
      </div>;
  }
}`,...G.parameters?.docs?.source},description:{story:`One live page built from the real components. The toolbar's Palette, Type and Body menus re-theme it (and every other story).`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 bg-void p-6 text-text">
      <p className="max-w-3xl text-sm text-muted">
        Rows are palettes, columns are type sets. The J-card sets use Cutive Mono for body text, which has no bold, so the bold words in those cells are faked:
        use the Body menu in the Specimen story to compare Courier Prime.
      </p>
      <div className="overflow-x-auto">
        <div className="grid min-w-max gap-3" style={{
        gridTemplateColumns: \`9rem repeat(\${TYPESETS.length}, 19rem)\`
      }}>
          <div />
          {TYPESETS.map(t => <h2 key={t.id} className="self-end text-xs uppercase tracking-widest text-dim">
              {t.label}
            </h2>)}
          {PALETTES.map(p => <div key={p.id} className="contents">
              <h2 className="self-start pt-5 text-xs uppercase tracking-widest text-dim">{p.label}</h2>
              {TYPESETS.map(t => <TrialScope key={t.id} palette={p.id} typeset={t.id} className="space-y-4 rounded-card border border-line p-5">
                  <Wordmark />
                  <SectionHeading kicker={SPECIMEN.release}>Heavy Sleeper</SectionHeading>
                  <p className="text-sm">
                    Demos <strong>made alone</strong> while the band is on pause.
                  </p>
                  <div className="flex items-center gap-2" aria-label="Accent colours">
                    {(["accent", "accent-2", "accent-3"] as const).map(k => <span key={k} className="size-5 rounded-full border border-line" style={{
                background: \`var(--color-\${k})\`
              }} />)}
                    <span className="ml-auto text-xs text-muted">{p.palette.accent}</span>
                  </div>
                  <Button>Listen</Button>
                </TrialScope>)}
            </div>)}
        </div>
      </div>
    </div>
}`,...K.parameters?.docs?.source},description:{story:`Every palette against every type set, side by side. Each cell is a real Wordmark, SectionHeading and Button inside its own scope.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: (_args, {
    globals
  }) => <div className="space-y-12 bg-void p-8 text-text">
      {PALETTES.map(p => <TrialScope key={p.id} palette={p.id} typeset={globals.typeset} body={globals.body} className="space-y-6 rounded-card border border-line p-6">
          <header className="space-y-1">
            <h2 className="text-metal font-display text-3xl font-extrabold leading-none">{p.label}</h2>
            <p className="max-w-3xl text-sm text-muted">{p.blurb}</p>
          </header>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {PALETTE_KEYS.map(key => <li key={key} className="overflow-hidden rounded-card border border-line">
                <div className="h-14" style={{
            background: p.palette[key]
          }} />
                <div className="space-y-0.5 bg-surface p-2 text-xs">
                  <p className="uppercase tracking-widest">{key}</p>
                  <p className="tabular-nums text-muted">{p.palette[key]}</p>
                  {!["void", "surface", "raised", "line"].includes(key) && <p className="text-dim">{ratio(p.palette[key], p.palette.surface)} on surface</p>}
                </div>
              </li>)}
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
        </TrialScope>)}
    </div>
}`,...J.parameters?.docs?.source},description:{story:`The palettes: swatches with their contrast on the surface, the full gated-pair table, and the red question.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: (_args, {
    globals
  }) => <div className="space-y-12 bg-void p-8 text-text">
      <p className="max-w-3xl text-sm text-muted">Shown in the palette chosen in the toolbar. Single-weight faces are used at their one weight; none is given a faked bold.</p>
      {TYPESETS.map(t => <TrialScope key={t.id} palette={globals.palette} typeset={t.id} className="space-y-6 rounded-card border border-line p-6">
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
            {SPECIMEN.tracks.slice(0, 3).map((title, i) => <TrackRow key={title} number={i + 1} title={title} lyricsHref="#" onQueue={() => {}} />)}
          </ul>
          {t.notes.length > 0 && <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
              {t.notes.map(n => <li key={n}>{n}</li>)}
            </ul>}
        </TrialScope>)}
    </div>
}`,...Y.parameters?.docs?.source},description:{story:`The type sets, each with the wordmark, a heading, a kicker, body text with bold, and what Fontsource says about each face.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-void p-8 text-text">
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PHOTOS.map(p => <li key={p.file} className="overflow-hidden rounded-card border border-line bg-surface">
            <img src={\`images/\${p.file}\`} alt={p.alt} loading="lazy" className="max-h-[28rem] w-full object-cover" />
            <div className="space-y-1 p-4 text-sm">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-accent-2">
                {p.file} · {p.use}
              </p>
              <p className="text-muted">{p.alt}</p>
            </div>
          </li>)}
      </ul>
    </div>
}`,...X.parameters?.docs?.source},description:{story:`The eight web copies in public/images/ (JPEG, at most 1600px wide, under 300 KB, metadata stripped), with the alt text each would carry.`,...X.parameters?.docs?.description}}}})))()}Q();export{J as Colors,K as Matrix,X as Photos,G as Specimen,Y as Type,Z as __namedExportsOrder,U as default};