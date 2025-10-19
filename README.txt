Zeni Vault - Google Sheet connected static dashboard (dark theme)
---------------------------------------------------------------
What this is:
- A simple static site (index.html) that reads your public Google Sheet (Investments and Withdrawals tabs)
  using the Google 'gviz' JSON endpoint (no API key required for public sheets).
How to use:
1) Upload these files to your GitHub repo (or Vercel directly as a static project).
2) Ensure your Google Sheet sharing is set to 'Anyone with the link - Viewer'.
3) Visit the live URL on Vercel. The dashboard will read the sheet and show the tables.
Notes:
- This version is the Google Sheet integration step only. It does not include login/proof upload or admin actions.
- If later you want the full Next.js app with admin + email proof handling, I can provide that as well.
