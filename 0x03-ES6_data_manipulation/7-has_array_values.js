// function named hasValuesFromArray that returns a boolean 
// if all the elements in the array exist within the set.
export default function hasValuesFromArray(set, array) {
  for (const item of array) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
