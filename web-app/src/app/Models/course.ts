/**
 * Model for the Course entity 
 */
 export interface Course {
    name: string,
    category: string,
    interestedStudents: number,
    proposedBy: {
        firstName: string,
        lastName1: string,
        lastName2: string,
        email: string
    },
}