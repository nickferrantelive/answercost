// Reader-facing dates; source data stays in ISO format.
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${Number(month)}/${Number(day)}/${year.slice(-2)}`;
}
