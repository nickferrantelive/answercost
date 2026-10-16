import { SITE } from "@/lib/data";
export const metadata = { title: "Sponsor AnswerCost", description: "Featured placement for AI receptionist and answering service vendors." };
export default function Page() {
  return (<>
    <h1>Sponsor AnswerCost</h1>
    <p>Reach owners comparing answering services and AI receptionists by trade. Sponsored placements are always labeled "Sponsored" and never change our published prices or table order.</p>
    <ul><li>Featured slot on trade pages and the calculator</li><li>Logo in the weekly email</li></ul>
    {SITE.stripeSponsorLink ? <p><a href={SITE.stripeSponsorLink}><button>Book a sponsor slot</button></a></p> : <p className="label">Sponsor checkout is coming soon. Stripe payment link placeholder (NEXT_PUBLIC_STRIPE_SPONSOR_LINK).</p>}
  </>);
}
