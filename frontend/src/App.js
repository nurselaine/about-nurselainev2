import React from 'react';
import Layout from './Component/Layout/Layout';

const Home = React.lazy(() => import("./Page/Home.jsx/Home"));
const Timeline = React.lazy(() => import("./Page/Timeline/Timeline"));
const ContactForm = React.lazy(() => import("./Page/ContactForm/ContactForm"));
const ErrorPage = React.lazy(() => import("./Page/ErrorPage"));

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <Timeline />
        <ContactForm />
      </Layout>

    </div>
  );
}

export default App;
