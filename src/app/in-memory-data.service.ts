import { InMemoryDbService } from 'angular-in-memory-web-api';

// Mock Data
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const destinations = [
      { id: 1, country: 'New Zealand', status: 'Lived', rating: 100 },
      { id: 2, country: 'Taiwan', status: 'Lived', rating: 86 },
      { id: 3, country: 'South Korea', status: 'Lived', rating: 74 },
      { id: 4, country: 'England', status: 'Visited', rating: 92 },
      { id: 5, country: 'USA', status: 'Visited', rating: 68 },
      { id: 6, country: 'Mexico', status: 'Want to go', rating: 75 },
      { id: 7, country: 'Iceland', status: 'Visited', rating: 92 },
      { id: 8, country: 'France', status: 'Visited', rating: 74 },
      { id: 9, country: 'Spain', status: 'Want to go', rating: 87 },
      { id: 10, country: 'Mauritius', status: 'Visited', rating: 97 }
    ];
    return { destinations };
  }
}