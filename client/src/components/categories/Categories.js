import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { getRoute } from '../../helpers/getRoute';
import './Categories.scss';

const Categories = ({ title, imgUrl, size, linkUrl }) => {
  return (
    <Link to={getRoute(linkUrl)} className={`categories-item ${size}`}>
      <div
        className="background-image"
        style={{ background: `url(${imgUrl}) no-repeat center center` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">выбрать</span>
      </div>
    </Link>
  );
};

Categories.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
};

export default Categories;
