export default function parseStringAsArray(arrayAsString: String) {
  return arrayAsString
    .toString()
    .split(',')
    .map(knowledge => knowledge.trim());
}
