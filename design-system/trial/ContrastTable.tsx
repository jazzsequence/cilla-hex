import { contrastRatio } from "../../lib/theme/contrast";
import { MIN_RATIO, checkPalette, fmt, type Adjustment, type Palette } from "../../lib/theme/palette";

const ratio = (a: string, b: string) => `${fmt(contrastRatio(a, b))}:1`;

/** Every pair the generator gates on, for one palette, with what the gate adjusted (nothing, for every candidate here). */
export function ContrastTable({ palette, adjustments }: { palette: Palette; adjustments: Adjustment[] }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted">
        {adjustments.length
          ? adjustments.map((a) => `${a.key} lifted from ${a.from} to ${a.to}`).join("; ")
          : "The gate adjusted nothing: every colour clears it as written."}
      </p>
      <table className="w-full max-w-3xl text-left text-sm">
        <caption className="mb-2 text-left text-xs uppercase tracking-widest text-dim">Every gated pair against WCAG AA ({MIN_RATIO}:1)</caption>
        <thead>
          <tr className="text-xs uppercase tracking-widest text-dim">
            <th scope="col" className="py-1 pr-4 font-normal">Text or fill</th>
            <th scope="col" className="py-1 pr-4 font-normal">On</th>
            <th scope="col" className="py-1 pr-4 font-normal">Ratio</th>
            <th scope="col" className="py-1 font-normal">AA</th>
          </tr>
        </thead>
        <tbody>
          {checkPalette(palette).map((r) => (
            <tr key={`${r.fg}-${r.bg}`} className="border-t border-line">
              <td className="py-1 pr-4">
                <span aria-hidden className="mr-2 inline-block size-3 border border-line align-middle" style={{ background: palette[r.fg] }} />
                {r.fg}
              </td>
              <td className="py-1 pr-4 text-muted">{r.bg}</td>
              <td className="py-1 pr-4 tabular-nums">{ratio(palette[r.fg], palette[r.bg])}</td>
              <td className="py-1">{r.ok ? "Pass" : "Fail"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
