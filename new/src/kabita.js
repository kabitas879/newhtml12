import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then(res => res.json())
      .then(data => console.log(data))  // should log {"message":"Hello from backend!"}
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Check Console for Backend Data</h1>
    </div>
  );
}

export default App;