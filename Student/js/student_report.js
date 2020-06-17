let html = '';  
let student;
let search;

function print( message ) {
  let varDiv = document.getElementById('output');
  varDiv.innerHTML = message;  
}

function getStudentReport( student ){
  let report = '<h2>Student Name: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievement + '</p>';
  return report;
}

while( true ){
  search = prompt("Enter a student name to search or type 'quit' to exit the searching function.");
  if ( search === null || search.toLowerCase() === 'quit' ) {
    break;
  } 
  for ( let i = 0; i < students.length; i += 1 ){
    student = students[i];
    if ( student.name.toLowerCase() === search.toLowerCase() ){
      message = getStudentReport ( student );
      print(message);
      }
   }
}
//check if the name matches
//if it matches write the name out to the message
//if it doesnt match write the message you are wrong
//cancel the loop