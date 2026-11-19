import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{a as n,c as r,i,l as a,r as o,s,u as c}from"./config-D5xG7_as.js";import{a as l,c as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./palette-DM4qaO1u.js";import{n as _,t as v}from"./Wordmark-m5tuwydC.js";function y({pal:e}){let t=m(e);return(0,b.jsxs)(`table`,{className:`w-full max-w-3xl text-left text-sm`,children:[(0,b.jsxs)(`caption`,{className:`mb-2 text-left text-xs uppercase tracking-widest text-dim`,children:[`Every pair the generator gates on, against WCAG AA (`,g,`:1)`]}),(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{className:`text-xs uppercase tracking-widest text-dim`,children:[(0,b.jsx)(`th`,{scope:`col`,className:`py-1 pr-4 font-normal`,children:`Text or fill`}),(0,b.jsx)(`th`,{scope:`col`,className:`py-1 pr-4 font-normal`,children:`On`}),(0,b.jsx)(`th`,{scope:`col`,className:`py-1 pr-4 font-normal`,children:`Ratio`}),(0,b.jsx)(`th`,{scope:`col`,className:`py-1 font-normal`,children:`AA`})]})}),(0,b.jsx)(`tbody`,{children:t.map(t=>(0,b.jsxs)(`tr`,{className:`border-t border-line`,children:[(0,b.jsxs)(`td`,{className:`py-1 pr-4`,children:[(0,b.jsx)(`span`,{"aria-hidden":!0,className:`mr-2 inline-block size-3 border border-line align-middle`,style:{background:e[t.fg]}}),t.fg]}),(0,b.jsx)(`td`,{className:`py-1 pr-4 text-muted`,children:t.bg}),(0,b.jsx)(`td`,{className:`py-1 pr-4 tabular-nums`,children:w(e[t.fg],e[t.bg])}),(0,b.jsx)(`td`,{className:`py-1`,children:t.ok?`Pass`:`Fail`})]},`${t.fg}-${t.bg}`))})]})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{b=t(),c(),o(),d(),s(),l(),_(),{palette:x,adjustments:S}=p(h(a.palette)),C={void:`Page background`,surface:`Cards, header`,raised:`Raised panels`,line:`Borders`,text:`Body text`,muted:`Secondary text`,dim:`Tertiary text`,accent:`Primary accent`,"accent-2":`Links, labels`,"accent-3":`Focus, secondary actions`,"metal-hi":`Metal, bright`,"metal-mid":`Metal, gradient mid`,"metal-lo":`Metal, dark`},w=(e,t)=>`${(Math.floor(u(e,t)*10)/10).toFixed(1)}:1`,T={title:`Foundations/Color and type`,parameters:{layout:`padded`}},E={render:()=>(0,b.jsx)(`ul`,{className:`grid grid-cols-2 gap-4 md:grid-cols-5`,children:f.map(e=>(0,b.jsxs)(`li`,{className:`overflow-hidden rounded-card border border-line`,children:[(0,b.jsx)(`div`,{className:`h-20`,style:{background:`var(--color-${e})`}}),(0,b.jsxs)(`div`,{className:`space-y-1 bg-surface p-3 text-sm`,children:[(0,b.jsx)(`p`,{className:`font-display text-xs uppercase tracking-widest`,children:e}),(0,b.jsx)(`p`,{className:`tabular-nums text-muted`,children:x[e]}),(0,b.jsxs)(`p`,{className:`text-xs text-dim`,children:[C[e],e!==`void`&&e!==`surface`&&e!==`raised`&&e!==`line`?` (${w(x[e],x.surface)} on surface)`:``]})]})]},e))})},D={name:`Contrast (active palette)`,render:()=>(0,b.jsxs)(`div`,{className:`space-y-4`,children:[S.length>0?(0,b.jsx)(`ul`,{className:`text-sm text-muted`,children:S.map(e=>(0,b.jsxs)(`li`,{children:[e.key,` lifted from `,e.from,` to `,e.to,` (`,e.reason,`)`]},e.key))}):(0,b.jsx)(`p`,{className:`text-sm text-muted`,children:`No colour needed adjusting: band.config.json passes as written.`}),(0,b.jsx)(y,{pal:x})]})},O=p({...x,accent:`#7a1450`,"accent-3":`#1d6f78`,dim:`#4a4468`}),k={name:`Contrast (a failing palette, repaired)`,render:()=>(0,b.jsxs)(`div`,{className:`space-y-4`,children:[(0,b.jsx)(`ul`,{className:`text-sm text-muted`,children:O.adjustments.map(e=>(0,b.jsxs)(`li`,{className:`flex items-center gap-3`,children:[(0,b.jsx)(`span`,{"aria-hidden":!0,className:`inline-block size-4 border border-line`,style:{background:e.from}}),(0,b.jsx)(`span`,{"aria-hidden":!0,children:`→`}),(0,b.jsx)(`span`,{"aria-hidden":!0,className:`inline-block size-4 border border-line`,style:{background:e.to}}),e.key,`: `,e.from,` to `,e.to,` (`,e.reason,`)`]},e.key))}),(0,b.jsx)(y,{pal:O.palette})]})},A={render:()=>(0,b.jsxs)(`div`,{className:`space-y-4`,children:[(0,b.jsx)(`div`,{className:`h-16 rounded-card`,style:{background:`var(--grad-accent)`}}),(0,b.jsx)(`div`,{className:`h-16 rounded-card`,style:{background:`var(--grad-metal)`}})]})},j=e=>{let t=i[e];return t?`${t.family}${t.variable?`, variable`:`, ${r(t.weights,n[e]).join(`/`)}`}`:null},M={render:()=>(0,b.jsxs)(`div`,{className:`space-y-8`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`p`,{className:`mb-1 text-xs uppercase tracking-widest text-dim`,children:[`Headings · `,j(`display`),`, -0.04em (typography.display in band.config.json)`]}),(0,b.jsx)(`p`,{className:`text-metal font-display text-6xl font-extrabold uppercase leading-none tracking-[-0.04em]`,children:`Placeholder heading`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`p`,{className:`mb-1 text-xs uppercase tracking-widest text-dim`,children:[`Wordmark · `,i.wordmark?`${j(`wordmark`)}${i.wordmark.uppercase?`, capitals`:``}, -0.05em`:`the display face, as typed`,` (typography.wordmark in band.config.json)`]}),(0,b.jsx)(v,{size:`lg`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`p`,{className:`mb-1 text-xs uppercase tracking-widest text-dim`,children:[`Kickers · `,i.kicker?`${j(`kicker`)}, for kickers and flourishes only`:`the display face`,` (typography.kicker in band.config.json)`]}),(0,b.jsx)(`p`,{className:`font-kicker text-4xl text-accent`,children:`On the road`})]}),(0,b.jsxs)(`div`,{className:`max-w-xl`,children:[(0,b.jsxs)(`p`,{className:`mb-1 text-xs uppercase tracking-widest text-dim`,children:[`Body · `,j(`body`),` (typography.body in band.config.json)`]}),(0,b.jsx)(`p`,{className:`text-lg leading-8`,children:`Placeholder body copy sits at 18px on a 32px line. Replace this sentence with a longer one to judge line length and rhythm.`})]})]})},N=[`Palette`,`Contrast`,`AdjustedExample`,`Gradients`,`Typography`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {PALETTE_KEYS.map(name => <li key={name} className="overflow-hidden rounded-card border border-line">
          <div className="h-20" style={{
        background: \`var(--color-\${name})\`
      }} />
          <div className="space-y-1 bg-surface p-3 text-sm">
            <p className="font-display text-xs uppercase tracking-widest">{name}</p>
            <p className="tabular-nums text-muted">{palette[name]}</p>
            <p className="text-xs text-dim">
              {NOTES[name]}
              {name !== "void" && name !== "surface" && name !== "raised" && name !== "line" ? \` (\${ratio(palette[name], palette.surface)} on surface)\` : ""}
            </p>
          </div>
        </li>)}
    </ul>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Contrast (active palette)",
  render: () => <div className="space-y-4">
      {adjustments.length > 0 ? <ul className="text-sm text-muted">
          {adjustments.map(a => <li key={a.key}>
              {a.key} lifted from {a.from} to {a.to} ({a.reason})
            </li>)}
        </ul> : <p className="text-sm text-muted">No colour needed adjusting: band.config.json passes as written.</p>}
      <PairTable pal={palette} />
    </div>
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Contrast (a failing palette, repaired)",
  render: () => <div className="space-y-4">
      <ul className="text-sm text-muted">
        {dim.adjustments.map(a => <li key={a.key} className="flex items-center gap-3">
            <span aria-hidden className="inline-block size-4 border border-line" style={{
          background: a.from
        }} />
            <span aria-hidden>→</span>
            <span aria-hidden className="inline-block size-4 border border-line" style={{
          background: a.to
        }} />
            {a.key}: {a.from} to {a.to} ({a.reason})
          </li>)}
      </ul>
      <PairTable pal={dim.palette} />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="h-16 rounded-card" style={{
      background: "var(--grad-accent)"
    }} />
      <div className="h-16 rounded-card" style={{
      background: "var(--grad-metal)"
    }} />
    </div>
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <p className="mb-1 text-xs uppercase tracking-widest text-dim">Headings · {faceNote("display")}, -0.04em (typography.display in band.config.json)</p>
        <p className="text-metal font-display text-6xl font-extrabold uppercase leading-none tracking-[-0.04em]">Placeholder heading</p>
      </div>
      <div>
        <p className="mb-1 text-xs uppercase tracking-widest text-dim">
          Wordmark · {typography.wordmark ? \`\${faceNote("wordmark")}\${typography.wordmark.uppercase ? ", capitals" : ""}, -0.05em\` : "the display face, as typed"} (typography.wordmark in band.config.json)
        </p>
        <Wordmark size="lg" />
      </div>
      <div>
        <p className="mb-1 text-xs uppercase tracking-widest text-dim">
          Kickers · {typography.kicker ? \`\${faceNote("kicker")}, for kickers and flourishes only\` : "the display face"} (typography.kicker in band.config.json)
        </p>
        <p className="font-kicker text-4xl text-accent">On the road</p>
      </div>
      <div className="max-w-xl">
        <p className="mb-1 text-xs uppercase tracking-widest text-dim">Body · {faceNote("body")} (typography.body in band.config.json)</p>
        <p className="text-lg leading-8">Placeholder body copy sits at 18px on a 32px line. Replace this sentence with a longer one to judge line length and rhythm.</p>
      </div>
    </div>
}`,...M.parameters?.docs?.source}}}})))()}P();export{k as AdjustedExample,D as Contrast,A as Gradients,E as Palette,M as Typography,N as __namedExportsOrder,T as default};