// Brief acceptance checks, 11/16/26. Run after npm run build.
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import ts from "typescript";

function loadData() {
  const source = readFileSync("lib/data.ts", "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports = {};
  new Function("exports", "process", compiled)(exports, process);
  return exports;
}
const { SITE, TRADES, VENDORS } = loadData();
let failures = 0;
function check(label, passed) {
  console.log(`${passed ? "PASS" : "FAIL"}: ${label}`);
  if (!passed) failures++;
}
const htmlFor = path => readFileSync(resolve(".next/server/app", path), "utf8");
const home = htmlFor("index.html");
const trade = htmlFor("trades/hvac.html");
for (const [path, html] of [["/", home], ["/trades/hvac/", trade]]) {
  const head = html.slice(0, html.indexOf("</head>"));
  const url = new URL(path, SITE.url).href;
  check(`${path} canonical and og:url`, head.includes(`<link rel="canonical" href="${url}"`) && head.includes(`<meta property="og:url" content="${url}"`));
  check(`${path} og:image`, /<meta property="og:image" content="[^"]+"/.test(head));
  check(`${path} twitter:card summary_large_image`, head.includes('<meta name="twitter:card" content="summary_large_image"'));
  check(`${path} icon link`, /<link rel="icon" /.test(head));
}
const routes = ["/", "/calculator/", "/vendors/", "/price-sheet/", "/sponsor/", "/about/", "/newsletter/", ...TRADES.map(t => `/trades/${t.slug}/`)];
check("all page canonical and og:url paths", routes.every(path => {
  const html = htmlFor(path === "/" ? "index.html" : `${path.slice(1, -1)}.html`);
  const url = new URL(path, SITE.url).href;
  return html.includes(`<link rel="canonical" href="${url}"`) && html.includes(`<meta property="og:url" content="${url}"`);
}));
check("all pages retain og:image and have no reader-facing ISO dates", routes.every(path => {
  const html = htmlFor(path === "/" ? "index.html" : `${path.slice(1, -1)}.html`);
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/\sdatetime="[^"]*"/gi, "");
  return /<meta property="og:image" content="[^"]+"/.test(html) && !/\b\d{4}-\d{2}-\d{2}\b/.test(visible);
}));
const withoutScripts = home.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/\sdatetime="[^"]*"/gi, "");
check("home has no old price range or reader-facing ISO date", !withoutScripts.includes("$10 to $50") && !withoutScripts.includes("2026-10-"));
const prices = VENDORS.filter(v => v.kind === "ai").flatMap(v => {
  const c = v.calc;
  if (!c || c.type === "perMin") return [];
  return (c.type === "tiers" ? c.tiers : [c]).map(t => ({ name: v.name, monthly: t.monthly }));
}).filter(p => p.monthly > 0).sort((a, b) => a.monthly - b.monthly);
check(`intro uses data minimum $${prices[0].monthly} (${prices[0].name})`, withoutScripts.replace(/<!--.*?-->/g, "").includes(`Paid AI plans start at $${prices[0].monthly} a month`));
check("footer credit and dates", withoutScripts.includes('href="https://ai-evolution.space/"') && withoutScripts.replace(/<!--.*?-->/g, "").includes("Go-live: 10/17/26") && withoutScripts.replace(/<!--.*?-->/g, "").includes("Last updated: 11/16/26"));
console.log(`HTML verification: ${failures === 0 ? "PASS" : `FAIL (${failures} failed checks)`}`);
process.exitCode = failures ? 1 : 0;
