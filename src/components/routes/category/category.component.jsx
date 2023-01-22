import { useParams } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";

import ProductCard from "../../product-card/product-card.component";

import { CategoryContainer, Title } from './category.styles';
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/categories.selector";


const Category = () => {

    const { category } = useParams();

    console.log("render/re-render category component");

    const categoriesMap = useSelector(selectCategoriesMap)

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log("effect fired calling setProducts");
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
