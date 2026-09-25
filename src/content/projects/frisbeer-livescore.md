---
title: Frisbeer LiveScore
summary: A Telegram bot for broadcasting the live status of a Frisbeer game to a broadcast channel.
image: /assets/projects/frisbeer-livescore/thumbnail.png
technologies:
  - Python
  - SQLite
  - GitHub Actions
github: https://github.com/jburn/frisbeer_live_score
order: 2
---

## Overview

Frisbeer LiveScore is a Telegram bot-based system for broadcasting live Frisbeer game status to a broadcast channel. Implemented with Python/SQLite. The repository features an automated test suite run through a GitHub Actions CI pipeline.

Frisbeer is a traditional academic frisbee drinking game played mostly by engineering students at the University of Oulu during the summer break. In Frisbeer you throw an Ultimate frisbee at the opposing team's beers, trying to knock them down. Sometimes you end up just flipping them on their head, not counting as a knock. Knocked down beers must be drunk by the opposing team. The bot and channel are used during the summer season for broadcasting important matches to anyone interested in following live or checking out the result and individual player performance afterwards.

The bot has been in active use for 2 years as of fall 2026 and the channel is actively followed by just over 60 people and dozens of games have been broadcast.

## How it works

Users can create games using the new game button and entering player names and optionally team names/emoji logos. They can view, start and continue created and existing games from the game list.

![Start menu](/assets/projects/frisbeer-livescore/main.png)

Game states are saved to a backend database, so multiple games can be broadcast at the same time and optionally multiple users can provide live match stats through the in-game control screen. The game state is handled by a robust state machine and every action can be undone at any time all the way to the start of the first round of the match.

![Between round controls](/assets/projects/frisbeer-livescore/between_rounds.png)

The user can mark knocks and flips easily by tapping on the knocked beer(s) and then the player who knocked them down. 

![In-game controls](/assets/projects/frisbeer-livescore/ingame.png)

The submitted knocks are broadcast into a configurable broadcast channel where each message is tracked by message id and will be accurately deleted when the game controller undoes an action.

![Broadcast message](/assets/projects/frisbeer-livescore/round_end.png)

## Design decisions

Chose to use the python-telegram-bot wrapper for the telegram functionality due to its wide featureset and community maintenance instead of creating my own wrapper. Using an existing library reduces the amount of integration code I need to maintain. Ended up using a lightweight SQLite database for the backend due to the low amount of data needing to be stored.

The gamestate is stored in the backend database as events tagged with the game ID and broadcast message ID. This allows for a robust undo mechanic where the sent broadcast message can easily be deleted from the broadcast channel. This keeps the broadcast channel clear of retracted updates. The undo mechanic utilizes a basic stack data structure to function.


## What I learned

An early prototype of the project was created in just 7 hours, while procrasinating writing my Master's thesis. The 1000 lines of logic were haphazardly split in 3 unorganized files and a Python dictionary was used instead of a database in the backend.

The core logic was sound, but the project underwent a complete refactor in early 2026, taking about a week's worth of after-work programming. This is when the project was organized, persistent storage was added, undo behaviour made more robust and the test suite was created.
