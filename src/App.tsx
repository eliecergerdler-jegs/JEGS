import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

// Lazy loaded page components
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const Services = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })));
const DetailPage = lazy(() => import("./pages/DetailPage").then(m => ({ default: m.DetailPage })));
const PortfolioPage = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.PortfolioPage })));
const AboutPage = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.ContactPage })));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#050816] text-[#F4F8FF]">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#B8F12B] border-t-transparent"></div>
        </div>
      }>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
