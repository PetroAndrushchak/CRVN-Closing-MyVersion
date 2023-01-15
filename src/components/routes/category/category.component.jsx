import { useParams } from "react-router-dom";
import { useContext, useEffect, useState, Fragment } from "react";

import { CategoriesContext } from "../../../contexts/categories.context";

import ProductCard from "../../product-card/product-card.component";

import { CategoryContainer, Title } from './category.styles';


const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        const products = categoriesMap[category];
        setProducts(products);

    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </CategoryContainer>
        </Fragment>
    );
}

export default Category;
