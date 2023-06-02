/*
  Program: Computation of Grades using function
  Programmer: Mia Bernadette B. Corpuz
  Section: BSCS-AN22
  Start Date: 6/2/23
  End Date: 6/2/23
*/

function calculateAverage(arr) {
  return arr.reduce((sum, grade) => sum + grade, 0) / arr.length;
}

function determineLetterGrade(OverallGrade) {
  if (OverallGrade >= 90) {
    return 'A';
  } else if (OverallGrade >= 80) {
    return 'B';
  } else if (OverallGrade >= 70) {
    return 'C';
  } else if (OverallGrade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

let Students = [];

for (let i = 0; i < 5; i++) {
  let Student = {};

  Student.name = prompt(`Enter the name of student ${i + 1}:`);

  let enablingAssessments = [];
  for (let j = 0; j < 5; j++) {
    let grade = parseFloat(prompt(`Enter the grade for Enabling Assessment ${j + 1} for ${Student.name}:`));
    enablingAssessments.push(grade);
  }
  student.classParticipation = calculateAverage(enablingAssessments);

  let summativeAssessments = [];
  for (let j = 0; j < 3; j++) {
    let grade = parseFloat(prompt(`Enter the grade for Summative Assessment ${j + 1} for ${Student.name}:`));
    summativeAssessments.push(grade);
  }
  student.summativeGrade = calculateAverage(summativeAssessments);

  student.finalExam = parseFloat(prompt(`Enter the grade for Final Examination for ${Student.name}:`));

  student.grade = (student.classParticipation * 0.3) + (student.summativeGrade * 0.3) + (student.finalExam * 0.4);
  student.letterGrade = determineLetterGrade(student.grade);

  students.push(Student);
}

for (let i = 0; i < students.length; i++) {
  let Student = Students[i];
  console.log(`Name: ${Student.name}`);
  console.log(`Class Participation: ${student.classParticipation}`);
  console.log(`Summative Grade: ${student.summativeGrade}`);
  console.log(`Final Examination: ${student.finalExam}`);
  console.log(`Grade: ${student.grade}`);
  console.log(`Letter Grade: ${student.letterGrade}`);
  console.log('------------------------------');
}
