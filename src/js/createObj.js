export default function createObj(arr = []) {
  const obj = {};
  arr.forEach((element) => (obj[element.name] = element.value || "-"));
  return obj;
}
