import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: 1,
      name: 'Orochimaru',
      age: 78,
      village: 'Konowa',
    },
    {
      id: 2,
      name: 'Sasuke',
      age: 34,
      village: 'Konowa',
    },
    {
      id: 3,
      name: 'Gaara',
      age: 40,
      village: 'Suna',
    },
    {
      id: 4,
      name: 'Killerbee',
      age: 60,
      village: 'Kumo',
    },
  ];
  getVillage(village?: 'Kumo' | 'Suna' | 'Konowa') {
    if (village) {
      return this.ninjas.filter((chinobi) => chinobi.village === village);
    }
    return this.ninjas;
  }
}
