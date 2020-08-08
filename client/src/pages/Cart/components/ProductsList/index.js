import React from 'react';
import PropTypes from 'prop-types';
import './productList.scss';
import ProductItem from '../ProductItem';

const ProductsList = ({ products, delItemFunc, changeCountFunc }) => {
  let productsForShow = [];

  if (products) {
    productsForShow = products.map((product) => {
      const {
        id, img, title, description, count, price,
      } = product;
      return (
        <ProductItem
          key={id}
          id={id}
          img={img}
          title={title}
          description={description}
          count={count}
          price={price}
          delItemFunc={delItemFunc}
          changeCountFunc={changeCountFunc}
        />
      );
    });
  }

  return (
    <div className="products-list">
      {productsForShow}
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  delItemFunc: PropTypes.func.isRequired,
  changeCountFunc: PropTypes.func.isRequired,
};

export default ProductsList;
