import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_SHEETDB_URL);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Error loading data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "#fff",
        padding: "2rem",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        💼 Zeni Vault Dashboard
      </h1>

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <>
          {data.length === 0 ? (
            <p>No investment data available.</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
              }}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#1a1a1a",
                    padding: "1rem",
                    borderRadius: "12px",
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <h3 style={{ color: "#00d084" }}>{item.Name}</h3>
                  <p>📦 Package: {item.Package}</p>
                  <p>💰 Investment: R{item.Amount}</p>
                  <p>📈 Daily Return: {item.DailyReturn}%</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
