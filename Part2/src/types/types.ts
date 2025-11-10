export type CourseType = 'starter' | 'main' | 'dessert';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: CourseType;
  price: number; 
}

export interface PriceStatistics {
  starter: number;
  main: number;
  dessert: number;
  overall: number;
}