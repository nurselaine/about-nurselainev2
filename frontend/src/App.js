import * as React from 'react';
import './App.css';
import Home from './Page/Home/Home';
import Layout from './Component/Layout/Layout';


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Home /> 
      </Layout>
    </ChakraProvider>
  );
}

export default App;
