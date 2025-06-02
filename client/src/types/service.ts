// src/types/service.ts
export interface IService {
  _id: string;
  name: string;
  description: string;
  iconUrl: string;
 
}

export type ServiceCreateData = Omit<IService, '_id' | 'createdAt' | 'updatedAt'>;