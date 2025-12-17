# Fullstack Docker App

A fullstack application with:
- **Frontend**: React
- **Backend**: Node.js + Express
- **Database**: PostgreSQL

## Project Structure
```
fullstack-docker-app/
├── backend/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── package.json
│   ├── Dockerfile
│   └── src/
│       └── App.js
├── db-data/          # Database volume
├── docker-compose.yml
├── .env
└── README.md
```

## Setup Instructions

1. Clone the repository
2. Configure environment variables in `.env`
3. Run with Docker Compose (coming soon)

## Technologies Used

- React 18
- Node.js + Express
- PostgreSQL
- Docker & Docker Compose
```

---

## STEP 6: Verify Your Folder Structure

Your folder structure should now look like this:
```
fullstack-docker-app/
├── backend/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile (empty)
├── frontend/
│   ├── package.json
│   ├── Dockerfile (empty)
│   └── src/
│       └── App.js
├── db-data/ (empty folder)
├── docker-compose.yml (empty)
├── .env (empty)
└── README.md