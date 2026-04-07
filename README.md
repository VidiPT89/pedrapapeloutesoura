# ✊ Rock Paper Scissors

> *"Three choices. One opponent. Zero mercy."*
> *"The computer doesn't blink. It doesn't hesitate. It doesn't lose on purpose."*

A browser-based Rock Paper Scissors game built with pure vanilla JavaScript — no frameworks, no libraries, no server.
Click a button. The machine decides instantly. The result is final.
Classic. Brutal. Replayable.

---

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Frameworks](https://img.shields.io/badge/frameworks-none-lightgrey?style=flat)
![Vanilla JS](https://img.shields.io/badge/vanilla-JS%20only-yellow?style=flat)
![DOM API](https://img.shields.io/badge/DOM-manipulation-blue?style=flat)

---

## How It Works

```
Player clicks a button
        │
        ▼
getUserChoice()  ──→  captures button text  ──→  updates player display
        │
        ▼
getComputerChoice()  ──→  Math.random() × 3  ──→  picks from ["Rock","Paper","Scissors"]
        │
        ▼
getResult(userChoice, computerChoice)
        │
        ├── same choice      ──→  "Draw!"
        ├── winning combo    ──→  "You win!"
        └── losing combo     ──→  "You lose!"
                │
                ▼
        Updates result display — no reload, no delay
```

---

## Game Logic

| ✊ Player | 🤖 Computer | 🏆 Result |
|:---:|:---:|:---:|
| Rock | Scissors | You win |
| Paper | Rock | You win |
| Scissors | Paper | You win |
| Scissors | Rock | You lose |
| Rock | Paper | You lose |
| Paper | Scissors | You lose |
| Any | Same | Draw |

---

## Features

| | Feature | Detail |
|---|---|---|
| ✊ | Player input | Three buttons — each fires `getUserChoice()` via `addEventListener` |
| 🎲 | Computer choice | Generated fresh on every click with `Math.floor(Math.random() * 3)` |
| ⚖️ | Result logic | Six win/lose conditions evaluated with a single `if / else if / else` chain |
| 📺 | Live display | Player choice, computer choice, and result all update inline — no page reload |
| ♻️ | Instant replay | No reset needed — every click is a clean, independent round |

---

## How to Play

1. Open `index.html` in any modern browser — no server, no setup
2. Pick your move: **✊ Rock**, **📄 Paper**, or **✂️ Scissors**
3. The computer responds instantly with its own random choice
4. The result appears immediately below
5. Click again to play another round — every game is independent

---

## Project Structure

```
pedrapapeloutesoura/
│
├── 📄 index.html      ← Page layout: title, player buttons, and result display
├── ⚙️  app.js         ← All game logic: input capture, random choice, result evaluation
└── 🎨 styles.css      ← Visual styling
```

---

## Under the Hood

**`app.js` — the entire game in three functions:**

```js
getUserChoice()       // triggered on button click — reads button text, calls the other two
getComputerChoice()   // returns a random element from ["Rock", "Paper", "Scissors"]
getResult(u, c)       // compares both choices — returns "You win!", "You lose!" or "Draw!"
```

All three functions fire sequentially on every button click.
No global state. No timers. No side effects between rounds.

---

## Honest Notes

- The computer has no memory. No pattern. No tells. It's `Math.random()`. Don't look for patterns — there are none.
- There is no score counter. There is no history. Each click is its own universe.
- The entire result logic fits in 8 lines. It didn't need more.
- Three choices. Three functions. One event listener loop. That's the whole game.
- The CSS exists. The buttons work. The priorities are correct.

---

*Next up: a score tracker, round counter, animated transitions — or leave it exactly like this. It already does what it says.*
