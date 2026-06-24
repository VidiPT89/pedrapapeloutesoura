# ✊ Pedra Papel ou Tesoura — Rock Paper Scissors in JavaScript

> The timeless hand game brought to the browser — choose your weapon and challenge the computer.

A clean, interactive implementation of Rock Paper Scissors built with vanilla JavaScript. The game features a Portuguese-language interface where players pick between Pedra (Rock), Papel (Paper), or Tesoura (Scissors) against a computer opponent that selects randomly. Each round delivers instant visual feedback showing both choices and the outcome, with a running scoreboard tracking wins, losses, and draws across the session.

## 📦 What's Inside

- ✊ Three clickable buttons for Pedra (Rock), Papel (Paper), and Tesoura (Scissors)
- 🤖 Computer opponent with truly random choice generation via `Math.random()`
- ⚡ Instant result calculation and display after each round
- 🏆 Persistent score tracking — wins, losses, and draws tallied across rounds
- 📊 Live display of both player and computer choices each round
- 🎯 Complete game logic covering all 9 possible outcome combinations
- 🇵🇹 Portuguese-language user interface (Pedra, Papel, Tesoura)
- 🔄 Unlimited rounds — play as many times as you want in a single session
- 💬 Dynamic result messages: "Ganhaste!" / "Perdeste!" / "Empate!"
- 🎨 Styled interface with CSS3 for a polished visual experience
- 🖱️ Click-only interaction — no keyboard input required

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🏗️ Project Structure

```
pedrapapeloutesoura/
├── index.html      # Game layout, buttons, score display areas
├── styles.css      # Button styling, result display, visual theming
├── app.js          # Game logic — choice comparison, scoring, DOM updates
└── README.md
```

## ⚙️ Game Mechanics

### Game Logic Flow

```
Player clicks a button (Pedra / Papel / Tesoura)
        ↓
Computer generates random choice (Math.random → mapped to one of three options)
        ↓
Compare player choice vs computer choice
        ↓
Determine outcome → Update display → Increment score
```

### Result Matrix

The game evaluates all 9 possible combinations:

| Player ↓ / Computer → | Pedra (Rock) | Papel (Paper) | Tesoura (Scissors) |
|------------------------|:------------:|:--------------:|:-------------------:|
| **Pedra (Rock)** | Empate (Draw) | Perdeste (Lose) | Ganhaste (Win) |
| **Papel (Paper)** | Ganhaste (Win) | Empate (Draw) | Perdeste (Lose) |
| **Tesoura (Scissors)** | Perdeste (Lose) | Ganhaste (Win) | Empate (Draw) |

### Computer Choice Generation

The computer's selection uses `Math.random()` to generate a number between 0 and 1, which is then mapped to one of the three choices with equal probability (33.3% each). This ensures fair, unbiased gameplay with no pattern the player can exploit.

### Score Tracking

Three counters persist throughout the browser session:

- **Wins** — incremented when the player beats the computer
- **Losses** — incremented when the computer beats the player
- **Draws** — incremented when both choose the same option

All counters are displayed in real-time and update immediately after each round. The scores reset only when the page is refreshed.

### Result Display

After each round, the interface updates three pieces of information simultaneously:
1. The player's choice (shown visually)
2. The computer's choice (revealed after the player commits)
3. The outcome message in Portuguese — "Ganhaste!" (You win!), "Perdeste!" (You lose!), or "Empate!" (Draw!)

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/VidiPT89/pedrapapeloutesoura.git

# Navigate into the project
cd pedrapapeloutesoura

# Open in your default browser
open index.html
```

No build tools, no dependencies — just open and play.

## 📝 Notes

- The game interface is entirely in Portuguese, reflecting its original "Pedra Papel ou Tesoura" title
- Computer randomness is uniform — each of the three choices has an equal one-third probability
- Score persists across rounds within the same session but resets on page reload
- The comparison logic uses simple conditional checks covering all win/lose/draw cases
- All game state is managed in vanilla JavaScript with no external libraries or frameworks
- Click-based interaction makes the game accessible on both desktop and touch devices

---

Developed by **David Arsénio Martins** — *"Vidi"*
