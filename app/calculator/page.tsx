import Calculator from "@/components/Calculator";
import { JsonLd } from "@/components/Src";
export const metadata = { title: "AI receptionist and answering service cost calculator", description: "Enter calls per month and minutes per call to estimate monthly cost across AI receptionists, voice AI platforms and live answering services." };
export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "AnswerCost calculator", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }} />
    <h1>Cost calculator</h1>
    <p>Estimates use published starting prices only. Plans have limits, overages and add-ons this does not model.</p>
    <Calculator />
  </>);
}
