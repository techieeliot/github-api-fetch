import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("techieeliot");
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const url = `https://api.github.com/users/${input}`;
        const res = await fetch(url);
        if (!res.ok) throw Error("Not Found");
        const data = await res.json();
        console.log(data);
        setPerson(data);
      } catch (err) {
        console.log(err.message);
        setPerson(null);
      }
    };
    fetchPerson();
  }, [input]);
  return (
    <div className="App">
      <input
        name="name"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {person ? <p>{person.name}</p> : <p>Not Found</p>}
    </div>
  );
}
