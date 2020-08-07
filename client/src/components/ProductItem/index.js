import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core';
import './productItem.scss';
import defaultImg from './images/img-error.JPG';

const ProductItem = ({
  id, img = defaultImg, title, description, count, price, delItemFunc, changeCountFunc,
}) => {
  let smallDescription = '';
  if (description) {
    smallDescription = description.length >= 125 ? `${description.slice(0, 125)}  ...` : description;
  }

  const addDefaultSrc = (e) => {
    e.target.src = defaultImg;
  };

  return (
    <div className="product-item">
      <div className="inner-div">
        <div className="image-div">
          <img src={img} onError={addDefaultSrc} alt={title} />
        </div>
        <div className="title-description-div">
          <p className="title"><b>{title || <Skeleton />}</b></p>
          <p className="description">{smallDescription || <Skeleton count={3} />}</p>
        </div>
        <div className="count-price-del-div text-right">
          <p><FontAwesomeIcon onClick={() => delItemFunc(id)} icon={faTrashAlt} /></p>
          <div className="count-price-div">
            { count ?
              <>
                <div className="count">
                  <span onClick={() => changeCountFunc('-')}>
                    —
                  </span>
                  <input type="number" min="1" max="50" defaultValue={count} />
                  <span onClick={() => changeCountFunc('+')}>
                    +
                  </span>
                </div>
                <div className="price">
                  {(count * price).toFixed(2)} €
                </div>
              </>
            : <Skeleton />}
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  delItemFunc: PropTypes.func.isRequired,
  changeCountFunc: PropTypes.func.isRequired,
};

export default ProductItem;
