@echo off
set /p commit=  ������commit(�ո���-����)  :
git add .
git commit -m %commit%
git push