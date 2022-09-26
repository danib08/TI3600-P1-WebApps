/**
 * Model for the top-three students 
 */
 export interface TopThree {
    _id: {
        proposedBy: {
            firstName: string,
            lastName1: string,
            lastName2: string,
            email: string,
            classSection: string
        }
    },
    count: number
}