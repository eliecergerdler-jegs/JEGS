import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

// Lazy loaded page components
const VideoEditingPage = lazy(() => import("./pages/VideoEditingPage").then(m => ({ default: m.VideoEditingPage })));
const PortfolioPage = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.PortfolioPage })));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage").then(m => ({ default: m.ProjectDetailPage })));
const ContactPage = lazy(() => import("./pages/OtherPages").then(m => ({ default: m.ContactPage })));
const WebDesignPage = lazy(() => import("./pages/WebDesignPage").then(m => ({ default: m.WebDesignPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="web-design" element={<WebDesignPage />} />
          <Route path="video-editing" element={<VideoEditingPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/:id" element={<ProjectDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="portafolio" element={<Navigate to="/portfolio" replace />} />
          <Route path="portafolio/:id" element={<LegacyProjectRedirect />} />
          <Route path="contacto" element={<Navigate to="/contact" replace />} />
          <Route path="servicios" element={<Navigate to="/web-design" replace />} />
          <Route path="web" element={<Navigate to="/web-design" replace />} />
          <Route path="video" element={<Navigate to="/video-editing" replace />} />
          <Route path="redes" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function LegacyProjectRedirect() {
  const id = window.location.pathname.split("/").pop();
  return <Navigate to={`/portfolio/${id ?? ""}`} replace />;
}


export default App;
