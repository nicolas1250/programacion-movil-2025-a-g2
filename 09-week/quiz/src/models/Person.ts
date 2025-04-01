export interface Person {
    id: string;
    name: string;
    lastName: string;
    age: number;
    email: string;
  }
  
  export interface Doctor extends Person {
    specialty: string;
    licenseNumber: string;
  }
  
  export interface Nurse extends Person {
    shift: string;
    careArea: string;
  }
  
  export interface Receptionist extends Person {
    workSchedule: string;
    phoneExtension: string;
  }
  
  export interface Patient extends Person {
    clinicalRecordNumber: string;
    affiliationType: string;
  }