import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import MainScreen from "./screens/MainScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
import DermotologyScreen from "./screens/DermotologyScreen";
import DepressionScreen from "./screens/DepressionScreen";
import DentalScreen from "./screens/DentalScreen";
import HomeopathyScreen from "./screens/HomeopathyScreen";

import FractureScreen from "./screens/FractureScreen";
import WomensCareScreen from "./screens/WomensCareScreen";
import AdminScreen from "./screens/AdminScreen";
import AyurvedicScreen from "./screens/AyurvedicScreen";
import GymSupplementsScreen from "./screens/GymSupplementsScreen";
// import


function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/allProducts" component={AllProductsScreen} />
          <Route exact path="/product" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/products/dermatology" component={DermotologyScreen}/>
          <Route exact path="/products/depression" component={DepressionScreen}/>
          <Route exact path="/products/dental" component={DentalScreen} />
          <Route exact path="/products/fracture" component={FractureScreen} />
          <Route exact path="/products/womensCare"component={WomensCareScreen}/>
          <Route exact path="/products/Homeopathy"component={HomeopathyScreen}/>
          <Route exact path="/products/Ayurvedic"component={AyurvedicScreen}/>
          <Route exact path="/products/GymSupplements"component={GymSupplementsScreen}/>
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/contact" component={ContactScreen} />
          <Route exact path="/admin" component={AdminScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
