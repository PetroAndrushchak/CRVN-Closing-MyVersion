
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUserSession} from './store/user/user.action';

import Navigation from "./components/routes/navigation/navigation.component.jsx";
import Home from "./components/routes/home/home.component";
import Authentication from "./components/routes/authentication/authentication.component.jsx";

import Shop from "./components/routes/shop/shop.component.jsx";
import Checkout from "./components/routes/checkout/checkout.component.jsx";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(checkUserSession());

    // async function fetchData() {
    //   getCurrentUser().then((user) => {
    //     console.log('user', user);
    //   });
    // }

    // fetchData();

  }, [dispatch]);


  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>

  );
}

export default App;
