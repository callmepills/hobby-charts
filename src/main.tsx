import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import BrandDetails from './brand/BrandDetails.tsx';
import BrandList from './brand/BrandList.tsx';
import Home from './home/Home.tsx';
import './index.css';
import SportDetails from './sport/SportDetails.tsx';
import SportList from './sport/SportList.tsx';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/hobby-charts" element={<App />}>
        <Route index element={<Home />} />
        <Route path="brands" element={<BrandList />} />
        <Route path="brands/:brandId" element={<BrandDetails />} />
        <Route path="sports" element={<SportList />} />
        <Route path="sports/:sportId" element={<SportDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
