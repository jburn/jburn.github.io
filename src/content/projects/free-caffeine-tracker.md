---
title: Free Caffeine Tracker
summary: Garmin watch application to track caffeine consumption and bedtime level. 
image: /assets/projects/free-caffeine-tracker/thumbnail.png
technologies:
  - Monkey C
  - Garmin Connect IQ
links:
    - label: Connect IQ Store Page
      url: https://apps.garmin.com/apps/d8a7d894-e668-41bd-951d-f737822b18a8
order: 2
---

## Overview

**Free Caffeine Tracker** is a free Garmin watch app that helps users understand their caffeine intake and plan around bedtime. It combines quick drink logging, estimated caffeine levels, an interactive timeline and long-term consumption history.

<img class="watch-photo" src="/assets/projects/free-caffeine-tracker/dashboard_on_watch.png" alt="Dashboard" width="754" height="839" loading="lazy" />

Built with **Monkey C and Garmin Connect IQ SDK**, the app supports 86 round-watch models and 24 interface languages. All features work offline, with no accounts, advertising, subscriptions or data collection.

## How it works

Users log a favorite drink, enter a custom caffeine amount or record an earlier drink by choosing its date and time. The app estimates caffeine remaining using gradual absorption and an adjustable elimination half-life.

The dashboard shows current estimated caffeine, the projected amount at bedtime and total daily intake. A pannable graph visualizes past consumption and the estimated decline ahead, with personal thresholds and bedtime markers for context.

<img class="watch-screenshot" src="/assets/projects/free-caffeine-tracker/graph.png" alt="Caffeine graph" width="454" height="454" loading="lazy" />

Configurable glances provide quick access without opening the full app. Compatible watches can also share readings with supported watch faces. Recent drinks remain editable, while older intake is summarized into daily, monthly and yearly totals to keep storage bounded.

<img class="watch-screenshot" src="/assets/projects/free-caffeine-tracker/glance_daily.png" alt="Daily glance" width="260" height="260" loading="lazy" />

<img class="watch-screenshot" src="/assets/projects/free-caffeine-tracker/glance_bedtime.png" alt="Bedtime glance" width="260" height="260" loading="lazy" />

The user can view their 7-day, weekly, monthly and yearly history. Old drink entries are condensed first into weekly, then into monthly and then into yearly averages to save memory.

<img class="watch-screenshot" src="/assets/projects/free-caffeine-tracker/7_days.png" alt="7-day bar graph" width="454" height="454" loading="lazy" />

## Design decisions

Keep everyday actions fast. Favorite drinks can be logged immediately, and holding SELECT/START repeats the last drink. Brief confirmations provide feedback without interrupting the workflow; mistakes can be corrected through Undo or history.

Design for different watches. Layouts account for round screens, varying resolutions, physical buttons and touch input. Measured text fitting, scalable menu icons and native themes help maintain readability across devices.

Work within strict resource limits. Glances read a compact model snapshot rather than loading the full history. Graph preparation runs in short stages, while cached geometry keeps panning responsive on older hardware.

Make estimates transparent. Caffeine content, metabolism and sensitivity vary. Editable drink amounts, personal thresholds and a dedicated disclaimer communicate those limits without crowding the main screens.

Keep ownership local. Drink history and settings stay on the watch. The app’s core functionality requires neither a phone connection nor a developer-operated backend.

## What I learned

Learned a lot about working around device constraints like a small screen and memory constraints. Working with a dedicated development environment with a previously unfamiliar programming language was also new to me (Monkey C / Connect IQ SDK). 

One of the biggest things I learned from this project was how much time pre-release polish on features, usability, localization etc. takes. The core functionality of the app was done in a very short amount of time but supporting features and polish took almost 3x longer.
