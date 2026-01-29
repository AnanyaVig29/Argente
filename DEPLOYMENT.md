# Deployment Guide

This guide covers deploying Argenté to various hosting platforms.

## 📋 Pre-Deployment Checklist

- [ ] All tests passing
- [ ] No console errors or warnings
- [ ] Environment variables configured
- [ ] Build works locally (`npm run build`)
- [ ] Preview build tested (`npm run preview`)
- [ ] Images optimized
- [ ] SEO meta tags in place
- [ ] Performance tested

---

## 🚀 Deployment Options

### 1. Vercel (Recommended)

**Fastest and easiest deployment for Vite + React apps**

#### Via CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

#### Via GitHub:

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

**Environment Variables:**
Add in Vercel Dashboard → Settings → Environment Variables

---

### 2. Netlify

#### Via Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

#### Via GitHub:

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

**netlify.toml** (Optional - for advanced config):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

#### Setup:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/argente",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/argente/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. AWS S3 + CloudFront

#### Steps:

1. **Build the project:**
```bash
npm run build
```

2. **Create S3 bucket:**
   - Enable static website hosting
   - Set bucket policy for public read access

3. **Upload build files:**
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

4. **Configure CloudFront:**
   - Create distribution pointing to S3 bucket
   - Set default root object to `index.html`
   - Configure error pages (404 → /index.html)

5. **Invalidate cache after updates:**
```bash
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

### 5. Firebase Hosting

#### Setup:

1. **Install Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Login and init:**
```bash
firebase login
firebase init hosting
```

3. **Configure `firebase.json`:**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. **Build and deploy:**
```bash
npm run build
firebase deploy
```

---

### 6. Docker

#### Dockerfile:

```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Build and run:

```bash
# Build image
docker build -t argente .

# Run container
docker run -p 80:80 argente
```

---

## 🔧 Environment Variables

For production, set these environment variables on your hosting platform:

```bash
VITE_APP_NAME=Argenté
VITE_APP_URL=https://yourdomain.com
# Add other production variables as needed
```

---

## ⚡ Performance Optimization

### Before Deployment:

1. **Optimize images:**
   - Use WebP format where possible
   - Compress images (TinyPNG, ImageOptim)
   - Use appropriate sizes

2. **Code splitting:**
   - Already configured in `vite.config.js`
   - Verify chunks are created properly

3. **Minification:**
   - Enabled by default in Vite production build
   - CSS and JS automatically minified

4. **Enable compression:**
   - Configure gzip/brotli on your hosting platform

---

## 🔒 Security Best Practices

1. **HTTPS:** Always use HTTPS in production
2. **Environment Variables:** Never commit `.env` files
3. **Dependencies:** Keep packages updated
4. **Headers:** Configure security headers (CSP, HSTS, etc.)
5. **API Keys:** Store securely, never in frontend code

---

## 📊 Monitoring

Consider adding:

- **Google Analytics** for user tracking
- **Sentry** for error tracking
- **LogRocket** for session replay
- **Lighthouse CI** for performance monitoring

---

## 🔄 CI/CD Pipeline

### Example GitHub Actions (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🆘 Troubleshooting

### Issue: Blank page after deployment
- Check browser console for errors
- Verify `base` in `vite.config.js` matches deployment path
- Ensure all assets are loading correctly

### Issue: 404 on page refresh
- Configure server to redirect all routes to `index.html`
- Add rewrite rules for SPA routing

### Issue: Environment variables not working
- Prefix with `VITE_` in Vite projects
- Rebuild after changing environment variables

---

## 📞 Support

For deployment issues:
- Check platform-specific documentation
- Review build logs for errors
- Test locally with `npm run preview`

---

**Happy Deploying! 🚀**
