import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_SHEETDB_URL);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError("Error loading data.");
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem", color: "#fff", backgroundColor: "#111", fontFamily: "Arial" }}>
      <h1>Zeni Vault Dashboard</h1>

      {error ? (
        <p>{error}</p>
      ) : data.length === 0 ? (
        <p>No data yet.</p>
      ) : (
        data.map((item, index) => (
          <div key={index} style={{ marginBottom: "1rem", borderBottom: "1px solid #333", paddingBottom: "0.5rem" }}>
            <strong>{item.Name}</strong> — {item.Package} — R{item.Amount} — Daily Return: {item.DailyReturn}%
          </div>
        ))
      )}
    </div>
  );
}
