import React from 'react';

const img = {
  'main page': 'assets/img/starship.svg',
  people: 'assets/img/user.svg',
  planets: 'assets/img/planet.svg',
  species: 'assets/img/alien.svg',
};

const renderInfo = (template, obj, tabName) => {
  if (!obj) {
    return {
      infoList: (
        <div className="no-information">
          <p>No infortmation</p>
        </div>
      ),
      img: 'assets/img/page-not-found.svg',
    };
  }
  const elements = template.map((el) => {
    const { propName, fieldName } = el;
    return (
      <li
        className="preview__field"
        key={propName}
      >
        {fieldName}
        {' '}
        <span>{obj[propName]}</span>
      </li>
    );
  });
  return {
    infoList: (
      <ul className="preview__list">
        {elements}
      </ul>
    ),
    img: img[tabName],
  };
};

export default renderInfo;

