// Zeni Vault Dashboard Script
document.addEventListener("DOMContentLoaded", () => {
  const dashboard = document.getElementById("user-dashboard");
  dashboard.innerHTML = "<p>Loading user data from Google Sheets...</p>";

  // Example: Fetch user data (replace SHEET_URL with actual sheet API endpoint)
  fetch("https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/Users!A1:E10?key=YOUR_API_KEY")
    .then(response => response.json())
    .then(data => {
      dashboard.innerHTML = "<h3>User Investments</h3>";
      data.values.slice(1).forEach(row => {
        dashboard.innerHTML += `<p>${row[0]} - ${row[1]} - ${row[2]}</p>`;
      });
    })
    .catch(() => {
      dashboard.innerHTML = "<p>Error loading data.</p>";
    });
});
