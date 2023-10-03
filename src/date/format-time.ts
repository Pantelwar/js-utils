import { format, formatDistanceToNow, getTime, parse } from "date-fns";

export type InputValue = Date | string | number | null | undefined;

export function fDate(date: InputValue, newFormat?: string) {
  const fm = newFormat || "dd-MM-yyyy";

  return date ? format(new Date(date), fm) : "";
}

export function pDate(date: string, newFormat?: string) {
  const fm = newFormat || "dd-MM-yyyy";

  return date ? parse(date, fm, new Date()) : null;
}

export function fDateTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || "dd MMM yyyy p";

  return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date: InputValue) {
  return date ? getTime(new Date(date)) : "";
}

export function fToNow(date: InputValue) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : "";
}
