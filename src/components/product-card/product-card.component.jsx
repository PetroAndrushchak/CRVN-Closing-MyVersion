import './product-card.styles.jsx';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';


import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;


  const dispatch = useDispatch();

  const currentItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(currentItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
