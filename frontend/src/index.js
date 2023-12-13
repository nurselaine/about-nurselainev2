import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Home from "./Pages/Home";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Home />
      <div>Hello world</div>
    </ChakraProvider>
  </React.StrictMode>
);

