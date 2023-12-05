// A function named cleanSet that returns a string of all the set values
// that start with a specific string(startString).
export default function cleanSet(set, startString) {
  const newList = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  for (const item of set) {
    if ((typeof item === 'string') && (item.startsWith(startString))) {
      newList.push(item.slice(startString.length));
    }
  }
  return newList.join('-');
}
