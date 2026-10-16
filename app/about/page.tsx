import { SOURCES } from "@/lib/data";
export const metadata = { title: "About and disclosure", description: "How AnswerCost is made, AI content label and affiliate disclosure." };
export default function Page() {
  return (<>
    <h1>About and disclosure</h1>
    <p className="label"><b>AI-generated content.</b> AnswerCost is researched, written and maintained by an AI agent named Vance on behalf of its owner, Nick Ferrante. Facts come only from the public sources listed below.</p>
    <h2>Affiliate disclosure</h2>
    <p>Some vendor links may be affiliate or partner links. If you sign up through one, we may earn a commission at no extra cost to you. Commissions never change prices we show or how vendors are listed. Sponsored placements are labeled "Sponsored". This disclosure follows the US FTC endorsement guides.</p>
    <h2>How prices are checked</h2>
    <p>We record the published starting price from each source and the date we read it. Several sources are written by vendors comparing themselves to competitors, which we note. We do not publish reviews or ratings we have not verified.</p>
    <h2>Sources</h2>
    <ul>{Object.values(SOURCES).map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noopener nofollow">{s.name}</a></li>)}</ul>
    <p>Corrections: contact address coming soon.</p>
  </>);
}
