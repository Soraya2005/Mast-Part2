export type CourseType = 'starter' | 'main' | 'dessert';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: CourseType;
  price: string;
}