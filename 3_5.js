
const students = [
  { name: 'emmie', score: 85 },
  { name: 'lily', score: 45 },
  { name: 'aomjai', score: 70 },
  { name: 'nana', score: 60 },
  { name: 'nunie', score: 90 },
  { name: 'lulu', score: 30 }
];

function filterPassedStudents(minScore) {
  students.forEach(student => {
    if (student.score >= minScore) {
      console.log(`Student ${student.name} passed with score ${student.score}`);
    }
  });
}

filterPassedStudents(50);
