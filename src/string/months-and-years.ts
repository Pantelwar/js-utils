export function monthsAndYears(num: number) {
  const years = Math.floor(num / 12);
  const months = num % 12;

  const str = [];

  if (years) str.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months) str.push(`${months} month${months > 1 ? "s" : ""}`);

  return str.join(" and ");
}
