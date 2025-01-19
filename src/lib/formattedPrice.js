export default function formatToPersianStyle(number) {
  return new Intl.NumberFormat("fa-IR").format(number);
}
