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