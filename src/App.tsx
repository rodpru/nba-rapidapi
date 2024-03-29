import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Teams from "./Pages/Teams";
import Layout from "./Pages/Layout";
import IndividualTeam from "./Pages/IndividualTeam";
import NoPage from "./Pages/NoPage";
import { Player } from "./Pages/Player";
import { Stats } from "./Pages/Stats";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<IndividualTeam />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="/game/stats/:id" element={<Stats />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
