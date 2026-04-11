# SmartPlanner v2.0

**Adaptive Learning Decision System with Full-Stack Backend**

An intelligent learning platform that personalizes your education with adaptive difficulty, real-time analysis, and AI-driven scheduling.

---

## 🚀 Quick Start

### Automatic Setup (Recommended)

```bash
node start.js
```

This single command will:
1. ✅ Install all dependencies
2. ✅ Initialize the SQLite database
3. ✅ Start the backend server on port 3000
4. ✅ Serve the frontend at http://localhost:3000

### Manual Setup

```bash
# Install dependencies
npm install

# Initialize database
npm run setup

# Start server
npm start
```

---

## 🌐 Access Your Application

Once running, open your browser:

- **Landing Page:** http://localhost:3000
- **Register:** http://localhost:3000/register.html
- **Login:** http://localhost:3000/login.html
- **Dashboard:** http://localhost:3000/index.html (after login)

### Test Account (Pre-seeded)
- **Email:** demo@example.com
- **Password:** password123

---

## 📁 Project Structure

```
smartplanner/
├── app.js                          # Main Express server
├── start.js                        # Startup script (one-command setup)
├── package.json                    # Dependencies & scripts
├── .env                            # Environment configuration
│
├── server/                         # Backend code
│   ├── routes/
│   │   ├── auth.js                # Registration & Login endpoints
│   │   └── progress.js            # User progress tracking
│   ├── models/
│   │   ├── User.js                # User data model
│   │   └── StudentProgress.js     # Learning progress model
│   ├── middleware/
│   │   └── auth.js                # JWT authentication
│   └── config/
│       └── database.js            # SQLite connection
│
├── database/
│   └── init.js                    # Database initialization script
│
└── public/                         # Frontend (served by Express)
    ├── index.html                  # Main dashboard
    ├── login.html                  # Login page
    ├── register.html               # Registration page
    ├── landing.html                # Landing/home page
    ├── css/
    │   └── styles.css              # ALDS v2 styling
    └── js/
        ├── api.js                  # API service utility
        └── script.js               # Dashboard logic
```

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me         (requires token)
```

### User Progress
```
GET    /api/progress        (requires token)
PUT    /api/progress        (requires token)
```

### Health Check
```
GET    /api/health
```

---

## 🗄️ Database Schema

### Users Table
```sql
id              INTEGER PRIMARY KEY
firstName       TEXT
lastName        TEXT
email           TEXT UNIQUE
password        TEXT (hashed)
createdAt       DATETIME
updatedAt       DATETIME
```

### Student Progress Table
```sql
id              INTEGER PRIMARY KEY
userId          INTEGER (Foreign Key)
subject         TEXT
level           TEXT
masteryScore    INTEGER
streak          INTEGER
totalTests      INTEGER
passedTests     INTEGER
createdAt       DATETIME
updatedAt       DATETIME
```

### Learning Sessions Table
```sql
id              INTEGER PRIMARY KEY
userId          INTEGER (Foreign Key)
topic           TEXT
duration        INTEGER
score           INTEGER
completed       BOOLEAN
createdAt       DATETIME
```

---

## 🔐 Authentication System

SmartPlanner uses **JWT (JSON Web Tokens)** for authentication:

1. **Registration:** User provides personal info → password hashed with bcryptjs → stored in database
2. **Login:** Email & password verified → JWT token generated → token stored in localStorage
3. **Protected Routes:** Token sent in `Authorization: Bearer <token>` header
4. **Auto-Logout:** Missing/invalid token → user redirected to login

### Token Details
- **Algorithm:** HS256
- **Secret:** Configured in `.env` (JWT_SECRET)
- **Expiration:** 30 days
- **Stored In:** Browser localStorage as `token`

---

## 📊 Features

### Core Learning
- **Adaptive Difficulty:** Questions adjust based on performance
- **Smart Analysis:** Detailed performance insights and weak spot detection
- **Concept Mapping:** Visual knowledge structure representation
- **Revision Schedule:** AI-generated spaced repetition schedules

### Intelligence
- **Decision Engine:** Real-time rule-based recommendations
- **Performance Tracking:** Complete activity history and metrics
- **Pattern Detection:** Identify learning patterns and anomalies

---

## ⚙️ Configuration

Edit `.env` to customize:

```env
PORT=3000                                    # Server port
JWT_SECRET=your-super-secret-jwt-key       # JWT signing key
NODE_ENV=development                        # development or production
```

---

## 📦 Dependencies

### Backend
- **express:** Web framework
- **sqlite3 / sqlite:** Database
- **bcryptjs:** Password hashing
- **jsonwebtoken:** JWT authentication
- **cors:** Cross-origin resource sharing
- **body-parser:** Request parsing

### Development
- **nodemon:** Auto-reload on file changes

---

## 🚀 Development

### Hot Reload (Recommended for Development)
```bash
npm run dev
```

This uses `nodemon` to automatically restart the server when files change.

### Production
```bash
npm start
```

---

## 🛠️ Troubleshooting

### Port Already in Use
```bash
# Change port in .env
PORT=3001
```

### Database Issues
```bash
# Reset database (WARNING: deletes all data)
rm database/smartplanner.db
npm run setup
```

### Dependencies Install Fails
```bash
rm -r node_modules package-lock.json
npm install
```

### Authentication Not Working
- Ensure token is being stored: Check browser DevTools → Application → localStorage
- Verify JWT_SECRET in `.env` matches
- Check API response in Network tab for error details

---

## 📝 API Usage Examples

### Register
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123",
    "confirmPassword": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

Response includes `token` - use in subsequent requests:

### Get User Info (Protected)
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 🔄 Frontend-Backend Integration

The frontend (`public/js/api.js`) automatically handles:
- ✅ Token management
- ✅ API calls with auth headers
- ✅ Error handling and user feedback
- ✅ Automatic redirects for auth failures

**No manual API calls needed** — use the `APIService` class:

```javascript
// Register
await APIService.register({ firstName, lastName, email, password, confirmPassword });

// Login
await APIService.login(email, password);

// Get user info
const user = await APIService.getCurrentUser();

// Get progress
const progress = await APIService.getProgress();

// Update progress
await APIService.updateProgress({ subject: 'Physics', masteryScore: 85 });

// Logout
APIService.logout();
```

---

## 🎯 Next Steps

1. **Register** at http://localhost:3000/register.html
2. **Login** with your credentials
3. **Complete onboarding** in the dashboard
4. **Take a test** to see the system in action
5. **View your progress** and recommendations

---

## 📞 Support & Contribution

Need help? Check:
- Console logs in browser DevTools (`F12`)
- Server logs in terminal
- Network tab for API errors

---

## 📄 License

SmartPlanner v2.0 - Adaptive Learning System
**All rights reserved © 2026**

