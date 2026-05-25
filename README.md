# SSP School Website

SSP School Website is a MERN stack project built for a school website with a React/Vite frontend and an Express/MongoDB backend.

## Overview

This project includes:

- a responsive public-facing website for school information
- admission and contact forms connected to the backend API
- locally stored school images for reliable rendering
- clean client-side navigation for pages such as Home, About, Admission, and Contact

## Tech Stack

- Frontend: React, Vite, React Router
- Backend: Node.js, Express
- Database: MongoDB
- Styling: CSS

## Project Structure

- `backend/` - Express API, MongoDB connection, admission/contact routes
- `frontend/` - React app built with Vite and React Router
- `frontend/public/images/` - Local school images used by the UI

## Requirements

- Node.js 18 or newer
- npm
- MongoDB connection string

## Environment Variables

Create a `.env` file inside `backend/` with:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Create a `.env` file inside `frontend/` if you want to override the API URL:

```env
VITE_API_URL=http://localhost:5000/api
```

## Install Dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

## Run Locally

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend:

```bash
cd frontend
npm run dev
```

## Build

```bash
cd frontend
npm run build
```

The production frontend bundle is generated in `frontend/dist/`.

## API Routes

- `POST /api/admission` - submit an admission inquiry
- `POST /api/contact` - submit a contact form inquiry

## Production Checklist

- Update `MONGODB_URI` for the target database
- Set `VITE_API_URL` to the correct backend URL if needed
- Use `npm run build` in the frontend before deploying
- Ensure the final environment serves the SPA correctly so routes like `/about` and `/contact` work on refresh

## Notes

- The app uses browser-based routing for a smoother user experience.
- School images are stored locally in `frontend/public/images/` to avoid hotlinking issues.
- The backend and frontend can be run independently during development.
