// Base Subject class
namespace Subjects {
  export class Subject {
    teacher: Teacher | undefined;
  }

  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC === undefined) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC === undefined) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC === undefined) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }

  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
  }
}

// ==========================
// MAIN EXECUTION BELOW
// ==========================

// Create and export constants for each subject
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create one teacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// ============ CPP ============
console.log("C++");
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// ============ Java ============
console.log("Java");
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// ============ React ============
console.log("React");
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());



// Define interfaces with "branding" for unique identification

interface MajorCredits {
  credits: number;
  brand: 'Major'; // unique brand property to distinguish type
}

interface MinorCredits {
  credits: number;
  brand: 'Minor'; // unique brand property to distinguish type
}

// Functions to sum MajorCredits and MinorCredits respectively

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'Major' };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'Minor' };
}

// ✅ Example usage (for your own testing)
const major1: MajorCredits = { credits: 3, brand: 'Major' };
const major2: MajorCredits = { credits: 4, brand: 'Major' };
const minor1: MinorCredits = { credits: 2, brand: 'Minor' };
const minor2: MinorCredits = { credits: 1, brand: 'Minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, brand: 'Major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, brand: 'Minor' }
