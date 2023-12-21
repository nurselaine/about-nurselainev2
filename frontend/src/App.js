import * as React from 'react';
import './App.css';
import Layout from './Component/Layout/Layout';

import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Page/Home/Home';
import Projects from './Page/Projects/Projects';
import Timeline from './Page/Timeline/Timeline';

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const location = useLocation();
  return (
    <ChakraProvider>
      <Layout>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
