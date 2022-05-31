import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Review from "./components/Review";

function App() {
  const [loading, setLoading] = useState(false);
  
  

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="app-title">
          Our Reviews
        </h1>
        <hr className="title-underline" />
        <div className="app-container">
          <Review />
        </div>
      </div>
    </div>
  );
}

export default App;
