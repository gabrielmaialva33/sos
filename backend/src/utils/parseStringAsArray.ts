export default function parseStringAsArray(arrayAsString: string) {
  return arrayAsString.split(',').map(knowledge => knowledge.trim());
}
