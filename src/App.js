import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SidebarComponent from "./components/SidebarComponent";
import MainComponent from "./components/MainComponent";
import PlayerComponent from "./components/PlayerComponent";
import LibraryComponent from "./components/LibraryComponent";

function App() {
  return (
    <BrowserRouter>
      <SidebarComponent />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/library" element={<LibraryComponent />} />
      </Routes>
      <PlayerComponent />
    </BrowserRouter>
  );
}

export default App;
