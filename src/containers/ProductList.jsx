import React, { useState, useEffect } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts';



const ProductList = () => {

	const API = 'https://api.escuelajs.co/api/v1/products';
	
	const products = useGetProducts(API)

	return (
		<section className="main-container">
			<div className="ProductList">
				{
					products.map(product => (
						<ProductItem product = {product} key ={product.id}/>
					))
				}
			</div>
		</section>
	);
}

export default ProductList;
