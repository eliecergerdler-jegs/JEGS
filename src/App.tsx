import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { DetailPage } from "./pages/DetailPage";
import { AboutPage, ContactPage, PortfolioPage } from "./pages/OtherPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Services />} />
          <Route path="web" element={<DetailPage type="web" />} />
          <Route path="redes" element={<DetailPage type="social" />} />
          <Route path="video" element={<DetailPage type="video" />} />
          <Route path="portafolio" element={<PortfolioPage />} />
          <Route path="sobre-jegs" element={<AboutPage />} />
          <Route path="contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
