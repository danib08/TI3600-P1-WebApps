import { Course } from 'src/app/Models/course';

/**
 * Model for the User entity 
 */
export interface User {
    firstName: string,
    lastName1: string,
    lastName2: string,
    isAdmin: boolean,
    email: string,
    password: string,
    classSection: string,
    proposedCourses: Course[],
    wantedCourses: Course[]
}