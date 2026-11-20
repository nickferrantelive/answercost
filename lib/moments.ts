// The moment the phone rings, per trade. Used in the home headline, the trade
// page intro and the drawn scene. Copy only: no prices or claims live here.
export const MOMENTS: Record<string, string> = {
  plumbers: "under a sink",
  dentists: "with a patient",
  roofers: "on a roof",
  salons: "mid-haircut",
  hvac: "fixing an AC unit",
  "law-firms": "in court",
  automotive: "under a hood",
  electricians: "wiring a panel",
  veterinarians: "with a nervous dog",
  "real-estate": "at a showing",
  "property-management": "showing a unit",
  "medical-offices": "in an exam room",
};
// Order the home headline walks through until the reader picks a trade.
export const MOMENT_ORDER = Object.keys(MOMENTS);
export const DEFAULT_MOMENT = "plumbers";
