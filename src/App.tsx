import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./Layout/Layout";
import Home from "./pages/home/index";
import Palette from "./pages/palette/index";
import Playlist from "./pages/playlist/index";
import Result from "./pages/result/index";
import Loading from "./pages/loading/index";
import ChoicePreference from "./pages/choicePreference";
import ChoiceTempo from "./pages/choiceTempo";

const pageVariants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

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
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/palette" element={<Palette />} />
            <Route path="choicePreference" element={<ChoicePreference />} />
            <Route path="choiceTempo" element={<ChoiceTempo />} />
          </Route>
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
