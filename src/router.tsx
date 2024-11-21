import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loader from './components/Loader';
import LoginPage from './pages/LoginPage';

function Routers() {
    return (
      <Suspense fallback={<Loader />}>
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
            </Routes>
          </Router>
        </Suspense>
    )
}

export default Routers