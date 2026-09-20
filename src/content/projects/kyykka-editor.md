---
title: Kyykkä Editor
summary: A desktop application hyperfocused on kyykkä video editing
image: /assets/projects/kyykka-editor/editor.png
technologies:
  - Python
  - FFmpeg
  - GitHub Actions
  - PySide
github: https://github.com/jburn/kyykka-editor
order: 1
---

## Overview

Kyykkä Editor is a desktop application with the explicit purpose of editing kyykkä videos. The whole application is built around the workflow of quickly skimming through the source video and marking moments of impact of throws with configurable hotkeys, after which the application renders fully edited and publishable videos. This saves time and effort for the editor, since they don't have to manually mark start and end of each clip, or add title/result cards. A GitHub Actions workflow builds a shareable and runnable .exe file for windows users to easily use the software, with the option of manually building it for security-concerned users. 

## How it works

Users import their video and insert match details, including scores, team names, player names, match title and subtitles.

![Match details](/assets/projects/kyykka-editor/match-details.png)

With the video and match details loaded, users can then proceed to mark the impact moment of each throw, with Kyykkä editor automatically clipping each throw with pre-determined overridable timers before and after impact that fit 99% of kyykkä players throwing style.

![Main editor screen](/assets/projects/kyykka-editor/editor.png)

Kyykkä editor exports a fully edited, publishable kyykkä video with a title screen, round end screen and a game result screen at the end.

![Export](/assets/projects/kyykka-editor/export.png)

The software allows users to configure the clip trimming times and forward/backward skipping intervals to their liking.

![Settings](/assets/projects/kyykka-editor/preferences.png)

The language, title/round-end/game-end screen styles and hotkeys are also fully configurable by users.

![Screen settings](/assets/projects/kyykka-editor/screen_settings.png)

## Design decisions

Decided to use PySide for UI since I was already familiar with it from university courses. FFmpeg was a no-brainer of a choice for the media editing part, due to its wide community support and maintentance, and wide featureset.

I built the first prototype as a barebones script allowing a workflow to edit kyykkä videos with just 4 buttons, with no need to manually check for individual start/end times for clips. After that, each feature added was built to support the fast and effortless 4-button workflow. Added just enough configuration options to allow for distinct editing styles, without even trying to compete with the featureset of a commercial video editing software. The end result is a focused, fast and light video editing software explicitly for kyykkä videos.

## What I learned

The learning part in this project was definitely using FFmpeg inside a program, since I had earlier used it only as a command-line tool. I was amazed by its versatility.