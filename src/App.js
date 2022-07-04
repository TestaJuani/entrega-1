import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainers";
import ItemDetailContainers from "./containers/ItemDetailContainers";

function App() {
  return (
    <div>
      <NavBar />
      {/*<ItemListContainer greeting={"Hola Coder!"} />*/}
      <ItemDetailContainers />
    </div>
  );
}

export default App;
