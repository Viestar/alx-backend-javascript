// A function getStudentsByLocation that returns an array of objects who
// are located in a specific city.
export default function getStudentsByLocation(studentsArray, city) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }
  const cityArray = studentsArray.filter((item) => item.location === city);
  return cityArray;
}
