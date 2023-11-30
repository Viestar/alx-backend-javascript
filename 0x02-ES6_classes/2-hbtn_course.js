// Validation functions
function validateLength(length) {
  const parsedLength = parseInt(length, 10);
  if (Number.isNaN(parsedLength) && typeof parsedLength === 'number') {
    return parsedLength;
  }
  throw new TypeError('Length must be a number');
}

function validateName(name) {
  if (typeof name === 'string') {
    return name;
  }
  throw new TypeError('Name must be a string');
}

function validateStudents(students) {
  if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
    return students;
  }
  throw new TypeError('Students must be an array of strings');
}

export default class HolbertonCourse {
  // Constructor with validators
  constructor(name, length, students) {
    this._name = validateName(name);
    this._length = validateLength(length);
    this._students = validateStudents(students);
  }

  // Getters and setters for the attributes.
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = validateName(newName);
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = validateLength(newLength);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = validateStudents(newStudents);
  }
}
