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
    if (id) {
      if (tag === 'planets') {
        return this.getPlanet(id);
      }
      if (tag === 'species') {
        return this.getSpecies(id);
      }
      if (tag === 'people') {
        return this.getPerson(id);
      }
    }
    if (tag === 'planets') {
      return this.getAllPlanets();
    }
    if (tag === 'main page') {
      return null;
    }
    if (tag === 'species') {
      return this.getAllSpecies();
    }
    if (tag === 'people') {
      return this.getAllPeople();
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

  async getSpecies(id) {
    const ship = await this.getData('species', id);
    return this._transformSpecies(ship);
  }

  async getAllPlanets() {
    const res = await this.getData('planets');
    return res;
  }

  async getAllPeople() {
    const res = await this.getData('people');
    return res;
  }

  async getAllSpecies() {
    const res = await this.getData('species');
    return res;
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
