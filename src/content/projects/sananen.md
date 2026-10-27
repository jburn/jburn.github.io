---
title: Sananen
summary: An offline Finnish word puzzle game for Android, with daily challenges, endless play, and locally saved progress.
image: /assets/projects/sananen/thumbnail.png
technologies:
  - Flutter
  - Android
  - Dart
  - SQLite
order: 1
---

## Overview

Sananen is a Finnish Wordle-style Android game built with Flutter and Dart. Players have six attempts to find a five- or six-letter word, using feedback about which letters are correct, misplaced, or absent. Daily challenges offer the same puzzle to everyone, while endless mode lets players continue with randomly selected words.

The game works offline without an account or backend. Word lists are bundled with the app, and daily progress, results, and statistics are stored locally in SQLite. The app is currently in private testing; public distribution is postponed for now.

![Sananen main menu with daily and endless game modes](/assets/projects/sananen/main-menu.png)

## How it works

Players choose a word length and enter guesses using the on-screen keyboard. Each guess is checked against the accepted vocabulary before the tiles reveal the result. Repeated letters are evaluated against the number of occurrences in the answer, so an extra copy of a letter does not receive misleading feedback.

![A five-letter game in progress](/assets/projects/sananen/5-letter.png)

Daily games can be resumed after closing the app. Completed results contribute to separate statistics for each word length, including win rate, guess distribution, and daily participation streaks. Players can share their results and open the answer's definition in Wikisanakirja.

Settings include alternative colour palettes, optional haptic feedback, local reminders, and game-data export and import.

![The result screen after completing a puzzle](/assets/projects/sananen/5-win.png)

## Design decisions

Daily puzzles use a deterministic schedule based on the UTC date and bundled answer lists. This gives players with the same word lists and schedule the same daily word without a server request. It also makes the puzzle boundary explicit across time zones. The trade-off is that changing the answer pool can change the schedule, so vocabulary updates need to preserve existing assignments.

Statistics are calculated from saved game history rather than maintained as separate counters. This keeps results and statistics consistent when restoring data and avoids storing the same information in multiple forms.

Importing a backup is treated as a validation and merge operation. The app checks the file's format, puzzle dates, answers, and guesses before showing a preview of new records and conflicts. Existing local games take precedence, and accepted additions are written in a single SQLite transaction. Backup processing runs in background isolates to keep the interface responsive.

## What I learned

This was my first time developing an entire Android application on my own. I chose flutter due to its flexibility for cross-platform development and wide range of available plugins. I got hands-on experience on how native development process differs an app framework development process.
