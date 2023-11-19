import { Routes, Route } from "react-router-dom";
import Home from "./";
import NotFound from "./pages/NotFound";
import DetailAnime from "./pages/DetailAnime";
import MyCollections from "./pages/MyCollections";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<DetailAnime />} />
      <Route path="/my-collections" element={<MyCollections />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
