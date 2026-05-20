import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

// Lazy loaded page components
const Services = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })));
const DetailPage = lazy(() => import("./pages/DetailPage").then(m => ({ default: m.DetailPage })));
const PortfolioPage = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.PortfolioPage })));
const AboutPage = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.ContactPage })));

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
