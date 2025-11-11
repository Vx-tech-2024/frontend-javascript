// Interfaces
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Function to create either a Teacher or Director
function createEmployee(salary: number | string): Teacher | Directors {
  if (typeof salary === 'number' && salary < 500) {
    return {
      firstName: 'John',
      lastName: 'Doe',
      fullTimeEmployee: true,
      location: 'Nairobi',
    };
  } else {
    return {
      firstName: 'Jane',
      lastName: 'Smith',
      fullTimeEmployee: true,
      location: 'London',
      numberOfReports: 10,
    };
  }
}

// Type predicate: checks if employee is a Director
function isDirector(employee: Teacher | Directors): employee is Directors {
  return (employee as Directors).numberOfReports !== undefined;
}

// Functions for each type of employee
function workDirectorTasks(): string {
  return 'Getting to director tasks';
}

function workTeacherTasks(): string {
  return 'Getting to work';
}

// Execute work based on employee type
function executeWork(employee: Teacher | Directors): string {
  if (isDirector(employee)) {
    return workDirectorTasks();
  } else {
    return workTeacherTasks();
  }
}

// ✅ Example Outputs
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
