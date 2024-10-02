# MD Hack24

## Tech Stack

- **Frontend**: React.js, JavaScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Vercel (Frontend), Render (Backend)

## Setup Instructions

### Prerequisites

- Node.js (v14 or above)
- MongoDB Atlas account (or a locally running MongoDB instance)
- Vercel account for frontend deployment
- Render account for backend deployment

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/SUMITSAXENA123/MD-Hack24.git
   cd MD-Hack24

2. ## Backend Setup:

**Navigate to the server folder:**

```bash
cd server
```
 Install backend dependencies:
```base
npm install
```
 Create a .env file in the server directory and include your MongoDB connection string
```base
MONGO_URI=mongodb+srv://<username>:<password>@backenddb.hz8aj.mongodb.net/<dbname>
JWT_SECRET=<your-secret-key>
```
 Start the backend server:
```bash
npm start
```
##Frontend Setup:

 **Navigate to the client folder:**
 ```base
 cd ../client
```
Install frontend dependencies:
 ```base
 npm install
 ```

Start the frontend development server:
```bash

npm start
```

## Deployment
Frontend (Vercel):

Connect your GitHub repo to Vercel and deploy the client folder as a separate project.
Set up environment variables on Vercel (as per the .env file).
Backend (Render):

## Deploy the backend to Render by connecting your GitHub repo.
Make sure to set up the MongoDB connection string and other environment variables in the Render dashboard.
