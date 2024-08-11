import React from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default App;
