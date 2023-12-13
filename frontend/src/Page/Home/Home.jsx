import React from "react";
import Layout from "../../Component/Layout/Layout";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <Layout>
      <div>Home page!</div>
      <h6>Hi my name is <span className="animated-gradient">Elaine</span></h6>
      <TypeAnimation 
        sequence={["I'm a Developer", 1000, 
                  "I'm a Nurse", 1000, 
                  "I'm a Graduate Student at Seattle U", 1000, 
                  "I'm a Dog mom", 1000, 
                  "I'm a Lifelong learner", 1000,
                  "I'm a software engineer", 1000]}
        speed={50}
        repeat={Infinity}
        style={{fontsize : '2em'}}
      />
    </Layout>
  )
}

export default Home;