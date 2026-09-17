import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../components/homepage';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Contact from '../components/contact';

const AppRouter = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<HomePage/>} />

      {/* Experience Route */}
      <Route path="/experience" element={<Experience />} />

      {/* Project route */}
      <Route path="/projects" element={<Projects />} />

      {/* Contact Me route */}
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
};

export { AppRouter };