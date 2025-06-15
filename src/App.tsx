import './App.scss';
import './assets/styles/_mixins.scss';
import './assets/styles/_resets.scss';
import './assets/styles/_variables.scss';
import './assets/styles/global.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header'; // Поки що створимо як заглушку
import Footer from './components/Footer'; // Поки що створимо як заглушку
import HomePage from './modules/HomePage';
// import NotFoundPage from './modules/NotFoundPage';
import React from 'react';

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}{' '}
          {/* NotFoundPage зробимо пізніше */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
