import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import "./App.css"
import Corporate from "./Pages/corporate";
import Search from "./Pages/search";
import Offer from "./Pages/offer";
import Help from "./Pages/help";
import SignIn from "./Pages/signIn";
import Navbar from "./Components/Navbar/navbar";
import Cart from "./Pages/cart";
import Resturant from "./Pages/resturant";
import PageNotFound from "./Pages/pageNotFound";


function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/resturants" replace />} />
          <Route path="/resturants" element={<Resturant />}/>
          <Route path="/corporate" element={<Corporate />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/offers" element={<Offer />}/>
          <Route path="/help" element={<Help />}/>
          <Route path="/signIn" element={<SignIn />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
