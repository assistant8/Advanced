import React from "react"

import { Link } from 'react-router-dom';

function ProductList() {
  const products = [
    { id: 1, name: '제품1' },
    { id: 2, name: '제품2' },
    { id: 3, name: '제품3' },
  ];

  return (
    <div>
      <h1>제품 목록</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link
              to={{
                pathname: `/product/${product.id}`,
                state: {
                  product: product,
                },
              }}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Hello() {
    return (
        <ProductList />
    );
}

export default Hello