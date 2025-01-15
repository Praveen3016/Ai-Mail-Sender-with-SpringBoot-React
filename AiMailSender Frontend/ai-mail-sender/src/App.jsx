import { useState } from 'react';
import './App.css';
import EmailGenerator from './Pages/EmailGenerator';
import GmailUI from './Pages/GmailUI';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SendEmail from './Pages/SendEmail';
import Layout from './Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Define Layout as the parent route */}
          <Route path="/" element={<Layout />}>
            {/* Nested Routes */}
            <Route path="mail-generator" element={<EmailGenerator />} />
            <Route path="gmail" element={<GmailUI />} />
            <Route path="SendEmail" element={<SendEmail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
