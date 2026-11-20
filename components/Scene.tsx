// One line drawing per trade: the place the owner is standing when the phone rings.
// Drawn here as inline SVG (no stock or CDN art). Everything is a white line on the
// blue field except the phone, which is the only orange object in the picture.
import type { ReactNode } from "react";

const GROUND = 222;

function Phone({ x, y = GROUND, r = -10 }: { x: number; y?: number; r?: number }) {
  const arc = (rad: number, side: 1 | -1) => {
    const dx = +(0.766 * rad).toFixed(1) * side, dy = +(0.643 * rad).toFixed(1);
    return `M${dx} ${-22 - dy}A${rad} ${rad} 0 0 ${side === 1 ? 1 : 0} ${dx} ${-22 + dy}`;
  };
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`} className="sc-phone">
      <g className="sc-ring">
        {[19, 27, 35].map((rad, i) => <path key={rad} className={`sc-arc sc-arc${i + 1}`} d={`${arc(rad, 1)}${arc(rad, -1)}`} />)}
      </g>
      <g className="sc-handset">
        <rect x={-11} y={-42} width={22} height={42} rx={5} className="sc-phone-body" />
        <path d="M-4 -6h8" className="sc-phone-mark" />
      </g>
    </g>
  );
}

const breakers = [0, 1, 2, 3, 4, 5].flatMap(i => [214, 266].map(x => <rect key={`${x}-${i}`} x={x} y={86 + i * 17} width={40} height={11} rx={2} />));
const columns = [136, 212, 288, 364].map(x => <g key={x}><rect x={x} y={112} width={28} height={72} /><path className="sc-f" d={`M${x + 9} 119v58M${x + 19} 119v58`} /></g>);
const flatWindows = [54, 94, 134].flatMap(y => [190, 247, 304].map(x => <rect key={`${x}-${y}`} x={x} y={y} width={36} height={26} rx={2} />));

const SCENES: Record<string, ReactNode> = {
  plumbers: <>
    <rect className="sc-fill" x={130} y={72} width={260} height={150} />
    <path strokeWidth={4} d="M108 70H412" />
    <path d="M130 72V222M390 72V222" />
    <path className="sc-f" d="M130 80L94 96V222M390 80l36 16V222" />
    <path d="M205 72v26q0 8 8 8h94q8 0 8-8V72" />
    <path d="M250 70h20M260 70V44a16 16 0 0 1 32 0v6" />
    <path d="M260 106v22a16 16 0 0 0 32 0v-8h98" />
    <rect x={253} y={113} width={14} height={7} rx={2} /><rect x={318} y={113} width={8} height={14} rx={2} />
    <path className="sc-f" d="M232 106c0 44-30 40-30 116" />
    <path d="M276 152c3 4 5 7 5 9a5 5 0 0 1-10 0c0-2 2-5 5-9z" />
    <path d="M254 190h44l-5 32h-34z" /><path className="sc-f" d="M254 190a22 13 0 0 1 44 0" />
    <rect x={30} y={192} width={64} height={30} rx={3} /><path d="M48 192v-8q0-6 6-6h16q6 0 6 6v8" /><path className="sc-f" d="M30 204h64" />
    <Phone x={476} />
  </>,
  hvac: <>
    <path className="sc-f" d="M22 222V150h52v72M452 222V128h62v94" />
    <rect className="sc-fill" x={160} y={96} width={200} height={118} rx={6} />
    <rect x={160} y={96} width={200} height={118} rx={6} /><path d="M180 214v8M340 214v8" />
    <circle cx={232} cy={155} r={42} /><circle className="sc-f" cx={232} cy={155} r={27} /><circle cx={232} cy={155} r={7} />
    <path className="sc-f" d="M232 113v84M190 155h84M202 125l60 60M262 125l-60 60" />
    <path d="M298 122h44M298 138h44M298 154h44M298 170h44M298 186h44" />
    <path d="M360 188h42v34" /><path className="sc-f" d="M360 200h30v22" />
    <circle cx={104} cy={176} r={11} /><circle cx={128} cy={176} r={11} /><path d="M116 165v-12h0M108 153h16" />
    <path className="sc-f" d="M104 187c0 30 40 30 56 14M128 187c0 14 20 16 32 8" />
    <Phone x={424} />
  </>,
  dentists: <>
    <path className="sc-pad" d="M152 108l62 56M222 168h70M302 170l50 18M130 90l8 7" />
    <path d="M256 178v26" /><rect x={218} y={204} width={76} height={18} rx={6} /><path className="sc-f" d="M226 148h46" />
    <path d="M336 8v38l-62 30" /><ellipse cx={262} cy={84} rx={24} ry={10} transform="rotate(-25 262 84)" />
    <path className="sc-f" d="M246 100l-10 18M260 104l-5 20M274 100l3 20" />
    <path d="M392 222V130h-34" /><rect x={316} y={122} width={76} height={8} rx={3} /><path d="M330 122v-12M342 122v-16M354 122v-10" />
    <rect x={438} y={160} width={52} height={10} rx={5} /><path d="M464 170v36M444 222l20-16 20 16" />
    <Phone x={66} r={8} />
  </>,
  roofers: <>
    <rect className="sc-fill" x={112} y={150} width={300} height={72} />
    <path strokeWidth={3} d="M92 150l50-80h240l50 80z" /><path d="M112 150V222M412 150V222" />
    <path className="sc-f" d="M129.500 90h265M117 110h290M104.500 130h315" />
    <path d="M322 70V44h28v26" /><rect x={206} y={54} width={54} height={16} rx={2} /><path className="sc-f" d="M206 62h54" />
    <rect className="sc-f" x={164} y={172} width={46} height={30} rx={2} /><rect className="sc-f" x={304} y={166} width={38} height={56} />
    <path d="M36 222l68-120M58 222l68-120M47 204h21M60 180h21M74 156h21M87 132h21M99 112h21" />
    <Phone x={476} />
  </>,
  electricians: <>
    <rect className="sc-fill" x={190} y={40} width={140} height={172} rx={6} /><rect x={190} y={40} width={140} height={172} rx={6} />
    <rect className="sc-f" x={204} y={54} width={112} height={144} rx={3} /><rect x={240} y={62} width={40} height={14} rx={2} />
    {breakers}
    <path d="M240 40V8M280 40V8M260 212v10" /><path className="sc-f" d="M330 46l42 14v150l-42-6" />
    <path className="sc-f" d="M214 160c-44 8-48 38-74 38" /><circle cx={128} cy={198} r={15} /><circle className="sc-f" cx={128} cy={198} r={8} />
    <path d="M410 222l28-112 28 112M420 182h36M426 156h24M432 132h12" />
    <Phone x={56} r={8} />
  </>,
  automotive: <>
    <path d="M144 196H104q-12 0-12-12v-30q0-12 12-12h18l24-34q8-12 24-12h112l40 46 96 10q16 2 16 16v16q0 12-12 12h-26M196 196h148" />
    <circle cx={170} cy={196} r={26} /><circle className="sc-f" cx={170} cy={196} r={10} /><circle cx={370} cy={196} r={26} /><circle className="sc-f" cx={370} cy={196} r={10} />
    <path className="sc-f" d="M148 138l20-28q4-6 12-6h36v34zM230 104h48l30 34h-78z" />
    <path strokeWidth={3} d="M322 142l84-60" /><path className="sc-f" d="M412 150l-26-52" />
    <rect x={22} y={200} width={54} height={22} rx={10} /><rect x={22} y={178} width={54} height={22} rx={10} /><rect x={22} y={156} width={54} height={22} rx={10} />
    <Phone x={492} />
  </>,
  salons: <>
    <rect className="sc-fill" x={300} y={28} width={116} height={150} rx={58} /><rect x={300} y={28} width={116} height={150} rx={58} />
    <path className="sc-f" d="M328 72l30-26M332 100l54-46" />
    <path d="M280 192h156" /><rect x={300} y={166} width={14} height={26} rx={3} /><rect x={322} y={174} width={12} height={18} rx={3} /><rect x={398} y={170} width={16} height={22} rx={3} />
    <path className="sc-pad" d="M152 160h70M150 148v-48" />
    <path d="M160 138h56M187 168v38M200 200h38" /><ellipse cx={187} cy={214} rx={40} ry={8} />
    <path className="sc-f" d="M112 215l8 4M246 217l10-3M128 220l6-5M262 220l5 2" />
    <rect x={36} y={140} width={50} height={70} rx={4} /><path className="sc-f" d="M36 163h50M36 186h50" /><path d="M44 210v12M78 210v12" />
    <Phone x={482} />
  </>,
  "law-firms": <>
    <path d="M120 96l140-62 140 62z" /><rect x={120} y={96} width={280} height={16} /><circle className="sc-f" cx={260} cy={72} r={10} />
    {columns}
    <path d="M112 184h296M96 197h328M80 210h360" />
    <rect x={24} y={196} width={46} height={26} rx={3} /><path d="M38 196v-6q0-5 5-5h8q5 0 5 5v6" />
    <Phone x={486} />
  </>,
  "property-management": <>
    <rect className="sc-fill" x={170} y={36} width={190} height={186} /><path d="M170 222V36M360 222V36M160 36h210" />
    {flatWindows}
    <rect x={190} y={176} width={36} height={26} rx={2} /><rect x={304} y={176} width={36} height={26} rx={2} /><rect x={247} y={176} width={36} height={46} /><path d="M240 170h50" />
    <path className="sc-f" d="M190 86h36M304 86h36M190 126h36M304 126h36M247 166h36" />
    <path d="M88 222v-46" /><circle cx={88} cy={146} r={30} />
    <path d="M410 222v-58" /><rect x={386} y={134} width={48} height={30} rx={3} /><path className="sc-f" d="M396 145h28M396 153h18" />
    <Phone x={488} />
  </>,
  "real-estate": <>
    <path className="sc-fill" d="M170 222V130l100-68 100 68v92z" />
    <path strokeWidth={3} d="M148 144L270 60l122 84" /><path d="M170 130V222M370 130V222M330 100V74h22v42" />
    <rect x={252} y={160} width={36} height={62} /><rect x={190} y={156} width={40} height={34} /><rect x={310} y={156} width={40} height={34} />
    <path className="sc-f" d="M210 156v34M190 173h40M330 156v34M310 173h40M176 222a18 18 0 0 1 36 0M328 222a18 18 0 0 1 36 0" /><circle cx={281} cy={192} r={2} className="sc-dot" />
    <path d="M62 222V118h70M78 118v12M116 118v12" /><rect x={70} y={130} width={54} height={38} rx={3} /><path className="sc-f" d="M82 144h30M82 154h20" />
    <Phone x={464} />
  </>,
  veterinarians: <>
    <rect x={150} y={150} width={220} height={10} rx={4} /><path d="M172 160v62M348 160v62" /><path className="sc-f" d="M172 200h176" />
    <path d="M238 150c-8-28 0-48 22-58M286 104c8 14 10 32 8 46M268 150v-26M282 150v-24" />
    <path d="M258 96c-4-18 8-32 26-30l22 6c7 2 7 11 0 13l-14 4c-2 10-10 15-20 13" />
    <path d="M264 70c-12 2-16 16-10 28" /><circle cx={284} cy={80} r={2} className="sc-dot" /><circle cx={307} cy={78} r={3} className="sc-dot" />
    <path d="M238 146c-16 4-24-6-20-20" />
    <path d="M82 54v30a16 16 0 0 0 32 0V54M98 100v24" /><circle cx={98} cy={131} r={7} />
    <rect x={408} y={178} width={74} height={44} rx={9} /><path d="M430 178q15-16 30 0" /><path className="sc-f" d="M420 190h26v22h-26zM433 190v22M420 201h26" />
    <Phone x={64} r={8} />
  </>,
  "medical-offices": <>
    <rect className="sc-fill" x={176} y={160} width={190} height={62} rx={4} /><rect x={176} y={160} width={190} height={62} rx={4} />
    <path className="sc-f" d="M271 160v62M188 190h72" /><path className="sc-pad" d="M240 150h122M230 147l-48-28" /><circle className="sc-f" cx={376} cy={150} r={7} />
    <rect x={402} y={46} width={72} height={92} rx={4} /><path d="M438 76v32M422 92h32" />
    <rect x={58} y={168} width={48} height={10} rx={5} /><path d="M82 178v30M64 222l18-14 18 14" />
    <path className="sc-f" d="M118 60h40v52h-40zM126 76h24M126 88h24M126 100h14" />
    <Phone x={448} />
  </>,
};

export const SCENE_ALT: Record<string, string> = {
  plumbers: "Line drawing of the cabinet under a kitchen sink, with a toolbox on the floor and a phone ringing nearby.",
  hvac: "Line drawing of an outdoor AC condenser with a set of gauges, and a phone ringing nearby.",
  dentists: "Line drawing of a dental chair, lamp and instrument tray, with a phone ringing nearby.",
  roofers: "Line drawing of a house with a ladder against the roof, and a phone ringing on the ground.",
  electricians: "Line drawing of an open breaker panel and a stepladder, with a phone ringing nearby.",
  automotive: "Line drawing of a car with its hood up beside a stack of tires, and a phone ringing nearby.",
  salons: "Line drawing of a salon chair facing a mirror, with a phone ringing nearby.",
  "law-firms": "Line drawing of a courthouse with a briefcase on its steps, and a phone ringing nearby.",
  "property-management": "Line drawing of an apartment building with a rental sign, and a phone ringing nearby.",
  "real-estate": "Line drawing of a house with a yard sign, and a phone ringing nearby.",
  veterinarians: "Line drawing of a dog sitting on an exam table, with a phone ringing nearby.",
  "medical-offices": "Line drawing of an exam table and a wall chart, with a phone ringing nearby.",
};

export default function Scene({ slug, className }: { slug: string; className?: string }) {
  const art = SCENES[slug] ?? SCENES.plumbers;
  return (
    <svg className={"scene" + (className ? " " + className : "")} viewBox="0 0 540 250" role="img" aria-label={SCENE_ALT[slug] ?? SCENE_ALT.plumbers} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path className="sc-f" d={`M8 ${GROUND}H532`} />
      {art}
    </svg>
  );
}
