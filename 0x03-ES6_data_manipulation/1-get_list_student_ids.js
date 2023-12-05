// A function getListStudentIds that returns an array of ids from a list of object.
export default function getListStudentIds(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }
  const idArray = studentsArray.map((item) => item.id);
  return idArray;
}
