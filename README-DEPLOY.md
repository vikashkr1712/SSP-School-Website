Deployment instructions
======================

This repository contains a MERN-style school website with separate `frontend/` (Vite + React) and `backend/` (Express + Mongoose) folders.

Quick steps to push and deploy:

1. Push repository to GitHub (if not already):

   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main

2. Deploy frontend to Vercel:
   - In Vercel, choose "Import Project" → select this repository.
   - Set the Project Root to `/frontend`.
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Add any env vars under Project Settings if needed (e.g., API base URL).

3. Deploy backend to Render:
   - Create a new Web Service on Render and connect to the same GitHub repo.
   - Set the Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
   - Add required environment variables (MONGODB_URI, PORT, etc.) in Render's dashboard.

Optional: There is a `render.yaml` file in the repo that can be used to configure automatic services on Render.

Notes:
- Do NOT commit `.env` or secrets to the repo. Use the provider's environment settings.
- If push fails due to authentication, configure SSH keys or use a Personal Access Token.
