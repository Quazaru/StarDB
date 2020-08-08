/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class SwapiService {
  async getResourse(url) {
    const _apiBase = 'https://swapi.dev/api';
    const response = await fetch(_apiBase + url);
    if (!response.ok) {
      throw new Error(`Error with server, CODE:${response.status}, URL: ${_apiBase + url}`);
    }
    const result = await response.json();
    return result;
  }

  async getData(name, id = '') {
    const response = await this.getResourse(`/${name}/${id}`);
    if (id) {
      return response;
    }
    return response.results;
  }

  async getElement(tag, id) {
    if (tag === 'planets') {
      return this.getPlanet(id);
    }
    if (tag === 'starships') {
      return this.getStarship(id);
    }
    if (tag === 'vehicles') {
      return this.getVehicle(id);
    }
    if (tag === 'species') {
      return this.getSpecies(id);
    }
    if (tag === 'people') {
      return this.getPerson(id);
    }
  }

  async getPlanet(id) {
    const planet = await this.getData('planets', id);
    return this._transformPlanet(planet);
  }

  async getPerson(id) {
    const person = await this.getData('people', id);
    return this._transformPerson(person);
  }

  async getStarship(id) {
    const ship = await this.getData('starships', id);
    return this._transformStarships(ship);
  }

  async getVehicle(id) {
    const ship = await this.getData('vehicles', id);
    return this._transformVehicle(ship);
  }

  async getSpecies(id) {
    const ship = await this.getData('species', id);
    return this._transformSpecies(ship);
  }

  async getAllPlanets() {
    const res = await this.getData('planets');
    return res.results;
  }

  async getAllPeople() {
    const res = await this.getData('people');
    return res.results;
  }

  async getAllStarships() {
    const res = await this.getData('starships');
    return res.results;
  }

  _transformStarships(ship) {
    return {
      name: ship.name,
      cost: ship.cost_in_credits,
      hyperdrive: ship.hyperdrive_rating,
      length: ship.length,
      manufacturer: ship.manufacturer,
      model: ship.model,
      passengers: ship.passengers,
    };
  }

  _transformPerson(person) {
    return {
      name: person.name,
      years: person.birth_year,
      gender: person.gender,
      height: person.height,
      mass: person.mass,
      hairColor: person.hair_color,
      eyeColor: person.eye_color,
    };
  }

  _transformPlanet(planet) {
    return {
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      climate: planet.climate,
      terrain: planet.terrain,
      orbitalPeriod: planet.orbital_period,
    };
  }

  _transformVehicle(vehicle) {
    return {
      name: vehicle.name,
      cost: vehicle.cost_in_credits,
      cargoCapacity: vehicle.cargo_capacity,
      length: vehicle.length,
      manufacturer: vehicle.manufacturer,
      model: vehicle.model,
      passengers: vehicle.passengers,
    };
  }

  _transformSpecies(species) {
    return {
      name: species.name,
      averageHeight: species.average_height,
      averageLifespan: species.average_lifespan,
      classification: species.classification,
      hairColors: species.hair_colors,
      language: species.language,
      skinColors: species.skin_colors,
    };
  }
}
