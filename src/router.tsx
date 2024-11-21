import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loader from './components/Loader';
import LoginPage from './pages/LoginPage';
import DashBoardPage from './pages/DashBoardPage';
import InvoicePage from './pages/InvoicePage';
import ProductPage from './pages/ProductsPage';
import EngagementsPage from './pages/EngagementsPage';
import SystemUsersPage from './pages/SystemUsersPage';
import WebsitePage from './pages/WebsitePage';

function Routers() {
    return (
      <Suspense fallback={<Loader />}>
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashBoardPage />} />
              <Route path="/invoices" element={<InvoicePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/engagements" element={<EngagementsPage />} />
              <Route path="/system_users" element={<SystemUsersPage />} />
              <Route path="/website" element={<WebsitePage />} />
            </Routes>
          </Router>
        </Suspense>
    )
}

export default Routers