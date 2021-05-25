export default function c(...classNames: string[]) {
  return classNames.filter((s) => s).join(" ");
}
