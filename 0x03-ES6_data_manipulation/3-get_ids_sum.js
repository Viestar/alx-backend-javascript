// Create a function getStudentIdsSum that returns the sum of all the student ids.
export default function getStudentIdsSum(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }
  const idSum = studentsArray.reduce(((counter, studentsArray) => counter + studentsArray.id), 0);
  return idSum;
}
