import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainers";
import ItemDetailContainer from "./containers/ItemDetailContainers";
import Cart from "./containers/Cart";
import NotFound from "./components/NotFound";
import ShopProvider from "./context/ShopContext";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          ></Route>
          <Route
            path="/detail/:productId"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
