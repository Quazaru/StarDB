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
    const res = await this.getResourse(`/${name}`);
    const { count } = res;
    let response = [...res.results];
    for (let i = 2; i <= (count / 10); i += 1) {
      const temp = await this.getResourse(`/${name}/?page=${i}`);
      const newArr = temp.results;
      response = [...response, ...newArr];
    }
    if (id) {
      return response[id - 1];
    }
    return response;
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
    return this.getData(tag);
  }

  async getTransformedElement(tag) {
    const data = await this.getData(tag);
    if (tag === 'planets') {
      return data.map((el) => this._transformPlanet(el));
    }
    if (tag === 'species') {
      return data.map((el) => this._transformSpecies(el));
    }
    if (tag === 'people') {
      return data.map((el) => this._transformPerson(el));
    }
    return null;
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
