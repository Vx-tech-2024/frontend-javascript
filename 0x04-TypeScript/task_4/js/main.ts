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


//abnormal trial below//

// task_4/js/subjects/Cpp.ts

/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration Merging: Add a new optional attribute to the Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  /**
   * @class Cpp
   * Represents the C++ subject, extending the base Subject class.
   */
  export class Cpp extends Subject {
    /**
     * Returns the requirements string for C++.
     * @returns The requirements string.
     */
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    /**
     * Returns the available teacher's name or a "No available teacher" message.
     * @returns The availability string.
     */
    getAvailableTeacher(): string {
      const experience = this.teacher.experienceTeachingC;
      if (experience === undefined || experience <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

// task_4/js/subjects/Java.ts

/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration Merging: Add a new optional attribute to the Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  /**
   * @class Java
   * Represents the Java subject, extending the base Subject class.
   */
  export class Java extends Subject {
    /**
     * Returns the requirements string for Java.
     * @returns The requirements string.
     */
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    /**
     * Returns the available teacher's name or a "No available teacher" message.
     * @returns The availability string.
     */
    getAvailableTeacher(): string {
      const experience = this.teacher.experienceTeachingJava;
      if (experience === undefined || experience <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

// task_4/js/subjects/React.ts

/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration Merging: Add a new optional attribute to the Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  /**
   * @class React
   * Represents the React subject, extending the base Subject class.
   */
  export class React extends Subject {
    /**
     * Returns the requirements string for React.
     * @returns The requirements string.
     */
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    /**
     * Returns the available teacher's name or a "No available teacher" message.
     * @returns The availability string.
     */
    getAvailableTeacher(): string {
      const experience = this.teacher.experienceTeachingReact;
      if (experience === undefined || experience <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}


// task_4/js/subjects/Subject.ts

/// <reference path="./Teacher.ts" /> 

namespace Subjects {
  
export class Subject {
  teacher: Teacher;

  setTeacher(teacher:Teacher){

    this.teacher = teacher;  
  }
}
}

// task_4/js/subjects/Teacher.ts

namespace Subjects {
  
  export interface Teacher {
    firstName: string;
    lastName: string;
  
  }
}