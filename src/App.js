import "./App.css";
import "./index.css";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possiblity,
  WhatGPT3,
} from "./containers/index";

import { Brand, CTA, Navbar } from "./components/index";

function App() {
  return (
    <div className="App">
      <div className="gradientBg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
