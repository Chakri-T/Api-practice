import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setContent(response.data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <p>hiii</p>
      <ul>
        {content.map((item) => (
          <li key={item.id}>
            User Name : {item.name} <br /> Email : {item.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
