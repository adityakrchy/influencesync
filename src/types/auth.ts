// src/types/auth.ts
export type UserRole = 'influencer' | 'company' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface LoginFormData {
  email: string;
  password: string;
  role: UserRole;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}

export interface Influencer {
  id: string;
  name: string;
  image: string;
  category: string;
  followers: string;
  engagement: string;
  location: string;
  verified: boolean;
  tags: string[];
}