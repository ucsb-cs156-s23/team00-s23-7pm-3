import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import BonsallPage from "main/pages/BonsallPage";
import StocktonPage from "main/pages/StocktonPage";
import SeattlePage from "main/pages/SeattlePage";
import GoletaPage from "main/pages/GoletaPage";
import IrvinePage from "main/pages/IrvinePage";

import "bootstrap/dist/css/bootstrap.css";


function App() {

  return (
    <BrowserRouter basename="/team00-s23-7pm-3">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
        <Route exact path="/towns/Bonsall" element={<BonsallPage />} />

        <Route exact path="/towns/Stockton" element={<StocktonPage />} />
        <Route exact path="/towns/Seattle" element={<SeattlePage />} />
        <Route exact path="/towns/Goleta" element={<GoletaPage />} />
        <Route exact path="/towns/Irvine" element={<IrvinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
