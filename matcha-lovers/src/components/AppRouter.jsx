import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import Menu from './menu';
import LoginSignup from './login-components/login-signup';

const AppRouter = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<Home />} />

      {/* Menu Route */}
      <Route path="/menu" element={<Menu />} />

      {/* Dedicated standalone route */}
      <Route path="/login" element={<LoginSignup isPage={true} />} />

      {/* Fallback Catch-all: Redirects unknown URLs back to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export { AppRouter };