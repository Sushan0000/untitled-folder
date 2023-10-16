import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductsView.module.css";
import { getAllProducts } from "../products";
import Product from "./Product";

const ProductsView = () => {
	const products = getAllProducts();

	return (
		<div>
			<h1>Shop Products</h1>
			<div className={styles.products}>
				{products.map((product) => (
					<Link to={`/products/${product.id}`} key={product.id}>
						<Product
							key={product.id}
							name={product.name}
							id={product.id}
							price={product.price}
							imagePath="http://via.placeholder.com/200x200"
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProductsView;
