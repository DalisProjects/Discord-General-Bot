Discord Fun & Economy Bot
Short description

A full-featured Discord bot built with discord.js offering games, economy (virtual currency), moderation tools, and utility commands. Uses JSON files for simple data persistence and is designed to be easy to extend or migrate to a database.

Features

Economy system: user wallets, balances, transfers, leaderboards.

Games: text-based minigames (e.g., trivia, dice, gambling-style commands).

Moderation: kick/ban/mute, message cleanup, and basic auto-moderation hooks.

User profiles: view stats, activity, and in-bot achievements.

Admin and partner commands with permission checks.

Lightweight JSON storage for quick setup; export/migrate helpers included.

Extensible command structure (command handler + events).

Architecture overview

discord.js for Discord API interactions.

Command-handler pattern: separate files for each command.

Event-driven: listeners for messageCreate, guildMemberAdd, etc.

JSON files stored in /data/ (one file per feature) for persistence.

config.json / .env for secrets and runtime configuration.

Tech stack

Node.js (LTS)

discord.js

Common dev dependencies (nodemon, eslint, etc.)

Optional: SQLite / MongoDB / PostgreSQL for production (migration instructions below)

Installation (local dev)

Clone the repo
git clone <repository-url>

Install dependencies
npm install

Copy and configure environment variables

Create a .env or config.json from .env.example / config.example.json

Start the bot
npm run start
or for development with auto-reload:
npm run dev
