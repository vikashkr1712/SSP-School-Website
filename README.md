# SSP School Website

MERN school website for SSP School with a React/Vite frontend and an Express/MongoDB backend.

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

## Build for Production

```bash
cd frontend
npm run build
```

The frontend builds to `frontend/dist/`.

## Backend API

- `POST /api/admission` - submit an admission inquiry
- `POST /api/contact` - submit a contact form inquiry

## Deployment

### Backend

1. Deploy the `backend/` folder to a Node.js host such as Render, Railway, or Fly.io.
2. Set `MONGODB_URI` and `PORT` in the host environment settings.
3. Use `npm run start` as the production start command.

### Frontend

1. Build the frontend with `npm run build`.
2. Deploy the `frontend/dist/` output to a static host such as Netlify, Vercel, or GitHub Pages.
3. Keep the frontend API URL pointed to the deployed backend by setting `VITE_API_URL`.

### Notes

- The app uses hash-based routing, so static hosting works without extra rewrite rules.
- School images are stored locally in `frontend/public/images/` to avoid hotlinking issues.
- Add your production backend URL before deployment so the admission form can submit correctly.
