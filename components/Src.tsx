import { SOURCES, SourceKey, CHECKED } from "@/lib/data";
export function Src({ keys }: { keys: SourceKey[] }) {
  return (<span className="src">{keys.map((k, i) => (<a key={k} href={SOURCES[k].url} target="_blank" rel="noopener nofollow">[{i + 1}]</a>))} <small>checked {CHECKED}</small></span>);
}
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
