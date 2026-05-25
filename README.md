# SSP School Website

MERN school website with a React + Vite frontend and an Express + MongoDB backend.

## Project Structure

- `frontend/` - React app built with Vite
- `backend/` - Express API with MongoDB connection

## Local Development

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend

```bash
MONGODB_URI=your_mongodb_connection_string
```

### Frontend

```bash
VITE_API_URL=https://your-backend-domain.onrender.com/api
```

## Deployment Notes

- Frontend: deploy `frontend/` on Vercel.
- Backend: deploy `backend/` on Render.
- Keep secrets out of GitHub and set them in the hosting dashboard.

## API Health Check

- `GET /api/test`

