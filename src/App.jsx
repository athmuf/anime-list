import { Routes, Route } from "react-router-dom";
import Home from "./";
import NotFound from "./pages/NotFound";
import DetailAnime from "./pages/DetailAnime";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<DetailAnime/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
