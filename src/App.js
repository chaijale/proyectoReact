import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a 'LA BOLUCOMPRA'"}/>
      </>
  );
}

export default App;
