// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "George",
  lastName: "Joel",
  age: 22,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Beatrice",
  lastName: "Williams",
  age: 23,
  location: "Kisumu"
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Render a table dynamically using Vanilla JS
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Create table rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);

// Optional: Basic styling for clarity
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.querySelectorAll("td").forEach(td => {
  td.style.border = "1px solid gray";
  td.style.padding = "8px";
});