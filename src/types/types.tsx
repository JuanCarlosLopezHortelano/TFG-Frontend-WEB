/* ----------- ENUMS ----------- */
export enum UserRole     { Worker = 'worker', Employer = 'employer' }
export enum SkillLevel   { Basic = 1, Intermediate, Advanced, Expert, Master }
export enum JobStatus    { Open='open', InProgress='in-progress', Completed='completed' }
export enum AppStatus    { Pending='pending', Approved='approved', Rejected='rejected' }
export enum ActStatus    { Completed='completed', PendingFeedback='pending-feedback' }

/* ----------- TIPOS ----------- */
export interface Skill {
  name: string;
  level?: SkillLevel;
  category?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  location?: string;

  about?: string;
  rating?: number;
  ratingCount?: number;
  skills?: Skill[];

  roles: UserRole[];
  createdAt: string;
}

export interface Job {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  category: string;
  location: string;
  rate: number;               // €/h
  duration: string;           // “4 h”
  createdAt: string;

  rating?: number;
  ratingCount?: number;

  postedBy: string;           // userId
  applicants?: string[];      // userIds
  status: JobStatus;
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  message?: string;
  status: AppStatus;
  createdAt: string;
}

export interface Activity {
  id: string;
  jobId: string;
  userId: string;
  title: string;
  date: string;
  rating?: number;
  comment?: string;
  duration: string;
  payment: number;
  status: ActStatus;
  createdAt: string;
}

export interface Review {
  id: string;
  activityId: string;
  reviewerId: string;
  revieweeId: string;
  createdAt: string;
  questionRatings: { questionId: string; rating: number }[];
  finalComment?: string;
}



export type GeoArea = {
    type: "Polygon" | "Circle";
    /** Coordenadas en formato GeoJSON (mismo structure que uses con Leaflet) */
    coordinates: number[][][] | number[][];
    /** Solo para círculos: radio en metros */
    radius?: number;
  };
  
  /** Borrador de tarea antes de publicarla */

  
  export interface TaskDraft {
    
    title?: string;
    category?: string;         // "Eventos", "Logística", etc.
    rate?: number;             // € / hora
    duration?: string;         // "4h", "1día", etc.
  
    location?: string;         // Ciudad o provincia
    area?: GeoArea;            // Zona dibujada en el mapa
  
    date?: string;             // ISO (si es fija)
    isFlexible?: boolean;      // true → sin fecha concreta
  
    description?: string;
    images?: string[];         // URLs subidas (opcional)
  
    // Metadatos internos
    createdAt?: string;        // se rellena al final
  }