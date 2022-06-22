import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainers";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Hola Coder!"} />
    </div>
  );
}

export default App;
