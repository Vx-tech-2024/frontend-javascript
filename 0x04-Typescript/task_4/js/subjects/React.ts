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