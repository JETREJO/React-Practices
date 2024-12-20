import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import GifsApp from "./pages/Gifs/Gifs";


const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/gifs" element={ <GifsApp /> } />
      {/* <Route path="*" element={ <NotFound /> } /> */}
    </Routes>
  );
}

export default App;
