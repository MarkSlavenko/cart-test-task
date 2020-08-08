import React, { useState, useEffect } from 'react';
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
  const [countForm, setCount] = useState(count);

  useEffect(() => {
    if (countForm === '') {
      changeCountFunc(id, 0);
    } else {
      changeCountFunc(id, countForm);
    }
  }, [countForm]);

  let smallDescription = '';
  if (description) {
    smallDescription = description.length >= 125 ? `${description.slice(0, 125)}  ...` : description;
  }

  const addDefaultSrc = (event) => {
    event.target.src = defaultImg;
  };

  const handleChangeCount = (event) => {
    const currentCount = event.target.value;

    if (currentCount === '') {
      setCount(currentCount);
    } else if (currentCount >= 0 && currentCount <= 50) {
      setCount(parseInt(currentCount));
    }
  };

  const handleControlsChangeCount = (controlsCount) => {
    let tempCount = countForm;
    if (tempCount === '') {
      tempCount = 0;
    }

    if (controlsCount && ((tempCount + 1) <= 50)) {
      setCount(tempCount + 1);
    } else if (!controlsCount && ((tempCount - 1) >= 0)) {
      setCount(tempCount - 1);
    }
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
            { price ?
              <>
                <div className="count">
                  <span onClick={() => handleControlsChangeCount(false)}>
                    —
                  </span>
                  <input type="number" min="1" max="50" onChange={handleChangeCount} value={countForm} />
                  <span onClick={() => handleControlsChangeCount(true)}>
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
