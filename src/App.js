import "./App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/NavBar";
import { useAppContext } from "./context/AppContextProvider";

function App() {
  const { state } = useAppContext();
  return (
    <div className="App">
      {state.isUserLoggedIn && <Navbar />}
      <AppRoutes />
    </div>
  );
}

export default App;
