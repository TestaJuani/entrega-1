import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Home from "../../components/Home";
import ItemListContainer from "../../containers/ItemListContainers";
import ItemDetailContainer from "../../containers/ItemDetailContainers";
import Cart from "../../containers/Cart";
import NotFound from "../../components/NotFound";

const MainNavigation = () =>{
    return (<BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalogo" element={<ItemListContainer />}></Route>
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
      </BrowserRouter>)
}

export default MainNavigation;