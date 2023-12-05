// Create a function updateStudentGradeByCity that returns an array of
// students for a specific city with their new grade
export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  if (Array.isArray(studentsArray)) {
    return studentsArray.filter((gradeStudents) => gradeStudents.location
            === city).map((gradeStudents) => {
      gradeStudents.grade = 'N/A'; // eslint-disable-line no-param-reassign
      for (const grade of newGrades) {
        if (grade.studentId === gradeStudents.id) {
          gradeStudents.grade = grade.grade; // eslint-disable-line no-param-reassign
        }
      }
      return gradeStudents;
    });
  }
  return [];
}
