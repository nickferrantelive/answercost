import Link from "next/link";
import Calculator from "@/components/Calculator";
import Signup from "@/components/Signup";
import { JsonLd } from "@/components/Src";
export const metadata = { title: "AI receptionist vs answering service cost calculator", description: "Enter calls per month and minutes per call to find the cheapest AI receptionist, voice AI platform or live answering service. Sourced prices." };
export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "AnswerCost calculator", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }} />
    <h1>What will it cost to answer your calls?</h1>
    <p className="lede">Two numbers in, every option out, sorted cheapest first.</p>
    <Calculator />
    <p>The table estimates the plan that fits your minutes. It does not add overage, setup, or a required phone or software plan. <Link href="/price-sheet/#overage">See how those three fees change a quote</Link>.</p>
    <Signup />
  </>);
}
