import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import Home from "./pages/home/index";
import Palette from "./pages/palette/index";
import Playlist from "./pages/playlist/index";
import Result from "./pages/result/index";
import Loading from "./pages/loading/index";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/palette" element={<Palette />} />
      </Route>
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
