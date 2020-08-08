import React from 'react';

const renderInfo = (tag, obj) => {
  if (!obj) {
    return {
      infoList: (
        <div className="no-information">
          <p>No infortmation</p>
        </div>
      ),
      img: '../../../assets/img/page-not-found.svg',
    }
  }
  if (tag === 'planets') {
    const {
      diameter, rotationPeriod, population, name, orbitalPeriod, terrain,
    } = obj;
    return {
      infoList: (
        <ul className="preview__list">

          <li className="preview__field">
            Name:
            {' '}
            <span>{name}</span>
          </li>
          <li className="preview__field">
            Rotation period
            {' '}
            <span>{rotationPeriod}</span>
          </li>
          <li className="preview__field">
            Population:
            {' '}
            <span>{population}</span>
          </li>
          <li className="preview__field">
            Diameter:
            {' '}
            <span>{diameter}</span>
          </li>
          <li className="preview__field">
            Planet surface:
            {' '}
            <span>{terrain}</span>
          </li>
          <li className="preview__field">
            Diameter:
            {' '}
            <span>{orbitalPeriod}</span>
          </li>
        </ul>
      ),
      img: '../../../assets/img/planet.svg',
    };
  } if (tag === 'people') {
    const {
      years, gender, height, name, mass, hairColor, eyeColor,
    } = obj;
    return {
      infoList: (
        <ul className="preview__list">

          <li className="preview__field">
            Name:
            {' '}
            <span>{name}</span>
          </li>
          <li className="preview__field">
            Y.O. :
            {' '}
            <span>{years ? parseInt(years) : 'No information'}</span>
          </li>
          <li className="preview__field">
            Gender:
            {' '}
            <span>{gender}</span>
          </li>
          <li className="preview__field">
            Height:
            {' '}
            <span>{height}</span>
          </li>
          <li className="preview__field">
            Mass:
            {' '}
            <span>{mass}</span>
          </li>
          <li className="preview__field">
            Hair color:
            {' '}
            <span>{hairColor}</span>
          </li>
          <li className="preview__field">
            Eye color:
            {' '}
            <span>{eyeColor}</span>
          </li>
        </ul>
      ),
      img: '../../../assets/img/user.svg',
    };
  } if (tag === 'starships') {
    const {
      cost, hyperdrive, length, name, manufacturer, model, passengers,
    } = obj;
    return {
      infoList: (
        <ul className="preview__list">

          <li className="preview__field">
            Name:
            {' '}
            <span>{name}</span>
          </li>
          <li className="preview__field">
            Cost :
            {' '}
            <span>{cost}</span>
          </li>
          <li className="preview__field">
            Hyperdrive:
            {' '}
            <span>{hyperdrive}</span>
          </li>
          <li className="preview__field">
            Length:
            {' '}
            <span>{length}</span>
          </li>
          <li className="preview__field">
            Manufacturer:
            {' '}
            <span>{manufacturer}</span>
          </li>
          <li className="preview__field">
            Model:
            {' '}
            <span>{model}</span>
          </li>
          <li className="preview__field">
            Passengers:
            {' '}
            <span>{passengers}</span>
          </li>
        </ul>
      ),
      img: '../../../assets/img/motor.svg',
    };
  } if (tag === 'vehicles') {
    const {
      cost, hyperdrive, length, name, manufacturer, model, passengers,
    } = obj;
    return {
      infoList: (
        <ul className="preview__list">

          <li className="preview__field">
            Name:
            {' '}
            <span>{name}</span>
          </li>
          <li className="preview__field">
            Cost :
            {' '}
            <span>{cost}</span>
          </li>
          <li className="preview__field">
            Hyperdrive:
            {' '}
            <span>{hyperdrive}</span>
          </li>
          <li className="preview__field">
            Length:
            {' '}
            <span>{length}</span>
          </li>
          <li className="preview__field">
            Manufacturer:
            {' '}
            <span>{manufacturer}</span>
          </li>
          <li className="preview__field">
            Model:
            {' '}
            <span>{model}</span>
          </li>
          <li className="preview__field">
            Passengers:
            {' '}
            <span>{passengers}</span>
          </li>
        </ul>
      ),
      img: '../../../assets/img/motor.svg',
    };
  }
  if (tag === 'species') {
    const {
      skinColors, language, classification, name, averageLifespan, averageHeight, hairColors,
    } = obj;
    return {
      infoList: (

        <ul className="preview__list">

          <li className="preview__field">
            Name:
            {' '}
            <span>{name}</span>
          </li>
          <li className="preview__field">
            Classification :
            {' '}
            <span>{classification}</span>
          </li>
          <li className="preview__field">
            Language:
            {' '}
            <span>{language}</span>
          </li>
          <li className="preview__field">
            Average lifespan:
            {' '}
            <span>{averageLifespan}</span>
          </li>
          <li className="preview__field">
            Average height:
            {' '}
            <span>{averageHeight}</span>
          </li>
          <li className="preview__field">
            Hair colors:
            {' '}
            <span>{hairColors}</span>
          </li>
          <li className="preview__field">
            Skin color:
            {' '}
            <span>{skinColors}</span>
          </li>
        </ul>

      ),
      img: '../../../assets/img/alien.svg',
    };
  }
};

export default renderInfo;
