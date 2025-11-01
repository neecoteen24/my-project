
import { useState } from 'react';
import './App.css';
function App() {
  const players = [
    { id: 1, name: "Messi", role: "Forward" },
    { id: 2, name: "Ronaldo", role: "Forward" },
    { id: 3, name: "Ramos", role: "Defender" },
    { id: 4, name: "Ozil", role: "Playmaker" },
  ];
  const [search, setSearch] = useState("");
  const filtered = players.filter((p) =>
    p.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Player Search</h1>
      <input
        className="search"
        placeholder="Search by role.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid">
        {filtered.length ? (
          filtered.map((player) => (
            <div key={player.id} className="card">
              <h2>{player.name}</h2>
              <p><strong>ID:</strong> {player.id}</p>
              <p><strong>Role:</strong> {player.role}</p>
            </div>
          ))
        ) : (
          <p>No players found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
