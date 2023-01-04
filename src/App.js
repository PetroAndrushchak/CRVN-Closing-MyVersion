
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/routes/navigation/navigation.component.jsx";
import Home from "./components/routes/home/home.component";
import Authentication from "./components/routes/authentication/authentication.component.jsx";

import Shop from "./components/routes/shop/shop.component.jsx";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>

  );
}

export default App;
