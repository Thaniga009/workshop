
const students = [
  { name: "nunu", grade: 90 },
  { name: "aomjai", grade: 85 },
  { name: "narin", grade: 78 }
];

students.forEach((student, index) => {
  console.log(`Student [${index}]: ${student.name}, Grade: ${student.grade}`);
});

function showStudentCount() {
  console.log(`Total students: ${students.length}`);
}

showStudentCount();

