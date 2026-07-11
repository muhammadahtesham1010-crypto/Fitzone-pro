@echo off
title FitZone Pro Dev Server
cd /d "%~dp0"
echo Starting FitZone Pro...
echo Open http://localhost:3000 in your browser
echo Close this window to stop the server
echo.
npm run dev
pause
