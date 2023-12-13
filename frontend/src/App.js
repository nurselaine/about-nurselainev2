import * as React from 'react';
import './App.css';
import Home from './Page/Home/Home';


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Home /> 
      </div>
    </ChakraProvider>
  );
}

export default App;
