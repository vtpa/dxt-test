import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import AppContent from './components/Content';

function App() {
  return (
    <Layout style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', backgroundColor: '#EEE' }}>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Layout>
  );
}

export default App;
