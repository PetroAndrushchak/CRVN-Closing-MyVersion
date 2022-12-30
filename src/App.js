
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/routes/navigation/navigation.component.jsx";
import Home from "./components/routes/home/home.component";
import SignIn from "./components/routes/sign-in/sign-in.component.jsx";

const Shop = () => {

  return (
    <div>IT is a Home page</div>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>

  );
}

export default App;
