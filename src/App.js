import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainers";
import ItemDetailContainer from "./containers/ItemDetailContainers";
import NotFound from "./components/NotFound";

function App() {
  return (
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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
