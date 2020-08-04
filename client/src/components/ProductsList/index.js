import React from 'react';
import PropTypes from 'prop-types';
import './productList.scss';
import ProductItem from '../ProductItem';

const ProductsList = ({ products, delFunc, changeCountFunc }) => {
  let productsForShow = [];

  if (products) {
    productsForShow = products.map((product) => {
      const {
        id, img, title, description, count, price,
      } = product;
      return (
        <ProductItem
          key={`productItem ${id}`}
          img={img}
          title={title}
          description={description}
          count={count}
          price={price}
          delFunc={delFunc}
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
  delFunc: PropTypes.func.isRequired,
  changeCountFunc: PropTypes.func.isRequired,
};

export default ProductsList;
