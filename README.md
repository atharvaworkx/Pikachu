# Android Studio UI Replica

A pixel-perfect replica of Android Studio's interface built with React and Vite.

## Features

- Exact Android Studio dark theme with black background
- Responsive layout matching Android Studio's interface
- Interactive mipmap component that downloads PDF on click
- Works on any device, any OS, any system

## Special Feature: PDF Download

When you click on the **mipmap** folder in the project explorer, it will automatically download the "TY BCA Android Slips-wise Solutions.pdf" file to your local machine. This works on:
- Windows, Mac, Linux
- Desktop and Mobile devices
- Any browser
- Both local development and deployed production site

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Deploy to Vercel

1. Push this code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

The PDF download will work automatically on the deployed site!

## How It Works

The PDF file is stored in the `public` folder, which means:
- It's bundled with the application
- It's accessible from any deployed URL
- No server-side code needed
- Works on all platforms and devices
- The download is triggered via JavaScript when clicking mipmap

## File Structure

```
├── public/
│   └── android-slips.pdf          # PDF file for download
├── src/
│   ├── App.jsx                    # Main component with download logic
│   ├── App.css                    # Styling
│   └── index.jsx                  # Entry point
└── index.html                     # HTML template
```
