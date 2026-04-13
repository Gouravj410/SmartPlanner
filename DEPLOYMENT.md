# SmartPlanner Deployment Guide

## 🚀 Deployment Options

Your SmartPlanner app is ready for deployment! Here are the best options:

### Option 1: Railway (Recommended - Free tier available)
Railway supports Node.js + SQLite perfectly.

1. **Sign up**: https://railway.app
2. **Connect GitHub**: Link your repository
3. **Deploy**: Railway will auto-detect Node.js and run `npm install` + `npm start`
4. **Database**: SQLite file persists automatically
5. **Environment**: Set `NODE_ENV=production` and `JWT_SECRET` in Railway dashboard

### Option 2: Render (Free tier available)
1. **Sign up**: https://render.com
2. **Create Web Service**: Connect your GitHub repo
3. **Settings**:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Environment**: Add `NODE_ENV=production` and `JWT_SECRET`

### Option 3: Heroku
1. **Install Heroku CLI**: `npm install -g heroku`
2. **Login**: `heroku login`
3. **Create app**: `heroku create your-app-name`
4. **Set environment**: `heroku config:set NODE_ENV=production JWT_SECRET=your-secret`
5. **Deploy**: `git push heroku main`

### Option 4: DigitalOcean App Platform
1. **Sign up**: https://digitalocean.com
2. **Create App**: Connect GitHub repo
3. **Configure**:
   - Source: GitHub
   - Environment: Node.js
   - Run command: `npm start`
4. **Environment variables**: Set `NODE_ENV=production` and `JWT_SECRET`

## 🔧 Pre-Deployment Checklist

- ✅ Environment variables set (NODE_ENV=production, JWT_SECRET)
- ✅ Database initializes automatically (postinstall script)
- ✅ CORS enabled for your domain
- ✅ Port uses `process.env.PORT || 3000`

## 🌐 Production URL Configuration

Update your frontend API calls if deploying to a custom domain:

```javascript
// In public/js/api.js
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-domain.com/api'
  : 'http://localhost:3000/api';
```

## 📊 Database Persistence

- SQLite database file persists between deployments
- User data and progress will be maintained
- Back up `database/smartplanner.db` regularly

## 🔒 Security Notes

- Change the JWT_SECRET in production
- Consider using environment variables for all secrets
- SQLite is fine for small applications, consider PostgreSQL for larger scale

## 🧪 Testing Deployment

After deployment, test:
1. Registration works
2. Login works
3. Dashboard loads
4. API endpoints respond

Your app will be live at: `https://your-deployment-url.com`