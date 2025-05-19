import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/home/index';
import Palette from './pages/palette/index';
import Playlist from './pages/playlist/index';
import Result from './pages/result/index';
import ChoicePreference from './pages/choicePreference';
import ChoiceTempo from './pages/choiceTempo';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/palette' element={<Palette />} />
          <Route path='choicePreference' element={<ChoicePreference />} />
          <Route path='choiceTempo' element={<ChoiceTempo />} />
        </Route>
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/result' element={<Result />} />
      </Routes>
  )
}

export default App
