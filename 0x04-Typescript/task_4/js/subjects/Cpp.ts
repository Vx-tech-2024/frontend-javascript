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