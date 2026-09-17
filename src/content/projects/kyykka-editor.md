---
title: Kyykkä Editor
summary: A desktop application with hyperfocus on kyykkä video editing
image: /assets/projects/kyykka-editor/thumbnail.png
technologies:
  - Python
  - FFmpeg
  - GitHub Actions
  - PySide
github: https://github.com/jburn/kyykka-editor
---

## Overview

Kyykkä Editor is a desktop application with the explicit purpose of editing kyykkä videos. The whole application is built around the workflow of quickly skimming through the source video and marking moments of impact of throws with configurable hotkeys, after which the application renders fully edited and publishable videos. This saves time and effort for the editor, since they don't have to manually mark start and end of each clip, or add title/result cards. A GitHub Actions workflow builds a shareable and runnable .exe file for windows users to easily use the software, with the option of manually building it for security-concerned users. 

## How it works



## Design decisions

Decided to use PySide for UI since I was already familiar with it from university courses. FFmpeg was a no-brainer of a choice for the media editing part, due to its wide community support and maintentance, and wide featureset. 

## What I learned

The learning part in this project was definitely using FFmpeg inside a program, since I had earlier used it only as a command-line tool. I am amazed by its versatility. 