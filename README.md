# Pathfolio — Frontend

This is the frontend for Pathfolio, a job application tracker I built to stop losing track of where I'd applied. It's a React app with a Kanban-style board, live updates via Socket.io, and JWT auth.

Backend repo (Express + MongoDB): https://github.com/Kanishka211/Pathfolio-backend

**Live app:** https://pathfolio-frontend.vercel.app

## What's in here

- Login / Register pages
- A dashboard with a Kanban board (Applied → OA → Interview → Offer / Rejected)
- Add / edit / delete applications from the UI
- Applications update in real time — if you have two tabs open and change something in one, the other updates without a refresh
- Applications that haven't been touched in 7+ days get flagged so you remember to follow up

## Stack

React (Vite) · React Router · Axios · Socket.io-client

## Running it locally

Clone the repo, then:

```bash
npm install
```

You'll need the backend running too (see the backend repo for that). Once it's up, create a `.env` file here with:

```
VITE_API_URL=http://localhost:5000
```

Then:

```bash
npm run dev
```

Should be running on `localhost:5173`.

## Notes

The backend's on Render's free tier so it spins down when it's not used — if you're checking out the live demo and it feels slow to load the first time, that's why. Give it 30-ish seconds and it'll wake up.

Still on my list: better styling (functionality came first), pagination if the list ever gets long, and cleaning up a couple of deprecated Mongoose warnings on the backend.