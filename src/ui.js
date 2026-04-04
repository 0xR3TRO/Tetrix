"use strict";

/**
 * RetroTetris UI System
 * Handles menus, overlays, and UI components
 * @module ui
 */

// ============================================================================
// UI MANAGER
// ============================================================================

/**
 * Manages all UI screens and components
 * @class UIManager
 */
class UIManager {
    #game;
    #currentScreen = "menu";
    #selectedMenuItem = 0;
    #selectedModeItem = 0;
    #nameInput = ["A", "A", "A"];
    #namePosition = 0;
    #pendingScore = null;

    /**
     * @param {Object} game - Main game instance
     */
    constructor(game) {
        this.#game = game;
        this.#setupEventListeners();
    }

    /**
     * Get current screen
     * @returns {string} Current screen name
     */
    get currentScreen() {
        return this.#currentScreen;
    }

    /**
     * Setup UI event listeners
     */
    #setupEventListeners() {
        document.addEventListener("keydown", (e) => this.#handleKeyPress(e));

        // Button click handlers
        document.querySelectorAll("[data-action]").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const action = e.target.dataset.action;
                this.#handleAction(action);
            });
        });
    }

    /**
     * Handle keyboard input for menus
     * @param {KeyboardEvent} event - Keyboard event
     */
    #handleKeyPress(event) {
        if (this.#currentScreen === "game") return;

        switch (this.#currentScreen) {
            case "menu":
                this.#handleMenuInput(event);
                break;
            case "modeSelect":
                this.#handleModeSelectInput(event);
                break;
            case "gameOver":
                this.#handleGameOverInput(event);
                break;
            case "nameEntry":
                this.#handleNameEntryInput(event);
                break;
            case "settings":
                this.#handleSettingsInput(event);
                break;
            case "leaderboard":
            case "controls":
            case "stats":
                if (event.code === "Escape" || event.code === "Enter") {
                    this.showScreen("menu");
                }
                break;
        }
    }

    /**
     * Handle main menu input
     * @param {KeyboardEvent} event - Keyboard event
     */
    #handleMenuInput(event) {
        const menuItems = [
            "play",
            "settings",
            "controls",
            "leaderboard",
            "stats",
        ];

        switch (event.code) {
            case "ArrowUp":
                this.#selectedMenuItem =
                    (this.#selectedMenuItem - 1 + menuItems.length) %
                    menuItems.length;
                this.#updateMenuSelection();
                this.#game.audio?.playMenuMove();
                break;
            case "ArrowDown":
                this.#selectedMenuItem =
                    (this.#selectedMenuItem + 1) % menuItems.length;
                this.#updateMenuSelection();
                this.#game.audio?.playMenuMove();
                break;
            case "Enter":
            case "Space":
                this.#handleAction(menuItems[this.#selectedMenuItem]);
                this.#game.audio?.playMenuSelect();
                break;
        }
    }

    /**
     * Handle mode selection input
     * @param {KeyboardEvent} event - Keyboard event
     */
    #handleModeSelectInput(event) {
        const modes = ["marathon", "sprint", "ultra"];

        switch (event.code) {
            case "ArrowUp":
                this.#selectedModeItem =
                    (this.#selectedModeItem - 1 + modes.length) % modes.length;
                this.#updateModeSelection();
                this.#game.audio?.playMenuMove();
                break;
            case "ArrowDown":
                this.#selectedModeItem =
                    (this.#selectedModeItem + 1) % modes.length;
                this.#updateModeSelection();
                this.#game.audio?.playMenuMove();
                break;
            case "Enter":
            case "Space":
                this.#startGame(modes[this.#selectedModeItem]);
                this.#game.audio?.playMenuSelect();
                break;
            case "Escape":
                this.showScreen("menu");
                break;
        }
    }

    /**
     * Handle game over screen input
     * @param {KeyboardEvent} event - Keyboard event
     */
    #handleGameOverInput(event) {
        switch (event.code) {
            case "KeyR":
            case "Enter":
                this.#restartGame();
                break;
            case "Escape":
                this.showScreen("menu");
                break;
        }
    }

    /**
     * Handle name entry input
     * @param {KeyboardEvent} event - Keyboard event
     */
    #handleNameEntryInput(event) {
        switch (event.code) {
            case "ArrowUp":
                this.#nameInput[this.#namePosition] = this.#nextChar(
                    this.#nameInput[this.#namePosition],
                    1,
                );
                this.#updateNameDisplay();
                break;
            case "ArrowDown":
                this.#nameInput[this.#namePosition] = this.#nextChar(
                    this.#nameInput[this.#namePosition],
                    -1,
                );
                this.#updateNameDisplay();
                break;
            case "ArrowLeft":
                this.#namePosition = Math.max(0, this.#namePosition - 1);
                this.#updateNameDisplay();
                break;
            case "ArrowRight":
                this.#namePosition = Math.min(2, this.#namePosition + 1);
                this.#updateNameDisplay();
                break;
            case "Enter":
                this.#submitName();
                break;
        }
    }

    /**
     * Handle settings input
     * @param {KeyboardEvent} event - Keyboard event
     */
    #handleSettingsInput(event) {
        if (event.code === "Escape") {
            this.showScreen("menu");
        }
    }

    /**
     * Get next character for name entry
     * @param {string} char - Current character
     * @param {number} direction - 1 for next, -1 for previous
     * @returns {string} Next character
     */
    #nextChar(char, direction) {
        const code = char.charCodeAt(0) + direction;
        if (code > 90) return "A";
        if (code < 65) return "Z";
        return String.fromCharCode(code);
    }

    /**
     * Handle UI action
     * @param {string} action - Action name
     */
    #handleAction(action) {
        switch (action) {
            case "play":
                this.showScreen("modeSelect");
                break;
            case "settings":
                this.showScreen("settings");
                break;
            case "controls":
                this.showScreen("controls");
                break;
            case "leaderboard":
                this.showScreen("leaderboard");
                this.#updateLeaderboard();
                break;
            case "stats":
                this.showScreen("stats");
                this.#updateStats();
                break;
            case "marathon":
            case "sprint":
            case "ultra":
                this.#startGame(action);
                break;
            case "resume":
                this.#game.engine?.setPaused(false);
                this.showScreen("game");
                break;
            case "restart":
                this.#restartGame();
                break;
            case "quit":
                this.showScreen("menu");
                break;
            case "back":
                this.showScreen("menu");
                break;
        }
    }

    /**
     * Show a specific screen
     * @param {string} screenName - Screen to show
     */
    showScreen(screenName) {
        this.#currentScreen = screenName;

        // Hide all screens
        document.querySelectorAll(".screen").forEach((screen) => {
            screen.classList.remove("active");
        });

        // Show target screen
        const screen = document.getElementById(`${screenName}-screen`);
        if (screen) {
            screen.classList.add("active");
        }

        // Special handling for game screen
        if (screenName === "game") {
            document.getElementById("game-container")?.classList.add("active");
        } else {
            document
                .getElementById("game-container")
                ?.classList.remove("active");
        }
    }

    /**
     * Start a new game
     * @param {string} mode - Game mode
     */
    #startGame(mode) {
        this.#game.start(mode);
        this.showScreen("game");
    }

    /**
     * Restart the current game
     */
    #restartGame() {
        const mode = this.#game.engine?.mode || "marathon";
        this.#game.start(mode);
        this.showScreen("game");
    }

    /**
     * Show game over screen
     * @param {Object} stats - Game stats
     */
    showGameOver(stats) {
        this.showScreen("gameOver");

        // Update game over display
        document.getElementById("final-score").textContent =
            StorageManager.formatScore(stats.score);
        document.getElementById("final-level").textContent = stats.level;
        document.getElementById("final-lines").textContent = stats.lines;
        document.getElementById("final-time").textContent =
            StorageManager.formatTime(stats.time);

        // Check for high score
        if (this.#game.storage?.isHighScore(stats.mode, stats.score)) {
            this.#pendingScore = stats;
            document
                .getElementById("high-score-notice")
                ?.classList.add("active");

            // Show name entry after brief delay
            setTimeout(() => {
                this.showScreen("nameEntry");
                this.#namePosition = 0;
                this.#nameInput = ["A", "A", "A"];
                this.#updateNameDisplay();
            }, 1500);
        } else {
            document
                .getElementById("high-score-notice")
                ?.classList.remove("active");
        }
    }

    /**
     * Update name entry display
     */
    #updateNameDisplay() {
        const chars = document.querySelectorAll(".name-char");
        chars.forEach((char, i) => {
            char.textContent = this.#nameInput[i];
            char.classList.toggle("active", i === this.#namePosition);
        });
    }

    /**
     * Submit entered name
     */
    #submitName() {
        if (!this.#pendingScore) return;

        const name = this.#nameInput.join("");
        this.#game.storage?.addHighScore(this.#pendingScore.mode, {
            ...this.#pendingScore,
            name,
        });

        this.#pendingScore = null;
        this.showScreen("leaderboard");
        this.#updateLeaderboard();
    }

    /**
     * Show pause overlay
     */
    showPause() {
        document.getElementById("pause-overlay")?.classList.add("active");
    }

    /**
     * Hide pause overlay
     */
    hidePause() {
        document.getElementById("pause-overlay")?.classList.remove("active");
    }

    /**
     * Update menu selection display
     */
    #updateMenuSelection() {
        document.querySelectorAll(".menu-item").forEach((item, i) => {
            item.classList.toggle("selected", i === this.#selectedMenuItem);
        });
    }

    /**
     * Update mode selection display
     */
    #updateModeSelection() {
        document.querySelectorAll(".mode-item").forEach((item, i) => {
            item.classList.toggle("selected", i === this.#selectedModeItem);
        });
    }

    /**
     * Update leaderboard display
     */
    #updateLeaderboard() {
        const modes = ["marathon", "sprint", "ultra"];

        modes.forEach((mode) => {
            const container = document.getElementById(`${mode}-scores`);
            if (!container) return;

            const scores = this.#game.storage?.getHighScores(mode) || [];
            container.innerHTML = "";

            if (scores.length === 0) {
                container.innerHTML =
                    '<div class="no-scores">No scores yet</div>';
                return;
            }

            scores.forEach((entry, i) => {
                const row = document.createElement("div");
                row.className = "score-row";
                row.innerHTML = `
          <span class="rank">${i + 1}.</span>
          <span class="name">${entry.name}</span>
          <span class="score">${
              mode === "sprint"
                  ? StorageManager.formatTime(entry.time)
                  : StorageManager.formatScore(entry.score)
          }</span>
        `;
                container.appendChild(row);
            });
        });
    }

    /**
     * Update stats display
     */
    #updateStats() {
        const stats = this.#game.storage?.getStats() || {};

        document.getElementById("stat-games").textContent =
            stats.totalGamesPlayed || 0;
        document.getElementById("stat-lines").textContent =
            stats.totalLinesCleared || 0;
        document.getElementById("stat-time").textContent =
            StorageManager.formatTime(stats.totalTimePlayed || 0);
        document.getElementById("stat-pieces").textContent =
            stats.totalPiecesPlaced || 0;
        document.getElementById("stat-max-score").textContent =
            StorageManager.formatScore(stats.maxScore || 0);
        document.getElementById("stat-max-level").textContent =
            stats.maxLevel || 0;
        document.getElementById("stat-tspins").textContent =
            stats.tSpinsTotal || 0;
        document.getElementById("stat-tetrises").textContent =
            stats.tetrisesTotal || 0;
    }

    /**
     * Update HUD elements
     * @param {Object} state - Game state
     */
    updateHUD(state) {
        document.getElementById("score-value").textContent =
            StorageManager.formatScore(state.score);
        document.getElementById("level-value").textContent = state.level;
        document.getElementById("lines-value").textContent = state.lines;
        document.getElementById("time-value").textContent =
            StorageManager.formatTime(state.time);

        // Update combo display
        const comboEl = document.getElementById("combo-value");
        if (comboEl) {
            if (state.combo > 0) {
                comboEl.textContent = `x${state.combo + 1}`;
                comboEl.parentElement?.classList.add("active");
            } else {
                comboEl.parentElement?.classList.remove("active");
            }
        }

        // Update hold display
        this.#updateHoldPreview(state.holdPiece, state.canHold);

        // Update next queue
        this.#updateNextPreview(state.nextPieces);
    }

    /**
     * Update hold piece preview
     * @param {string|null} pieceType - Held piece type
     * @param {boolean} canHold - Whether hold is available
     */
    #updateHoldPreview(pieceType, canHold) {
        const canvas = document.getElementById("hold-canvas");
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (pieceType && this.#game.renderer) {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            ctx.globalAlpha = canHold ? 1 : 0.4;
            this.#game.renderer.drawPiecePreview(
                ctx,
                pieceType,
                centerX,
                centerY,
                0.7,
            );
            ctx.globalAlpha = 1;
        }
    }

    /**
     * Update next pieces preview
     * @param {string[]} pieces - Array of piece types
     */
    #updateNextPreview(pieces) {
        const canvas = document.getElementById("next-canvas");
        if (!canvas || !this.#game.renderer) return;

        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const spacing = canvas.height / 5;
        const centerX = canvas.width / 2;

        pieces.forEach((type, i) => {
            const centerY = spacing * (i + 0.5);
            const scale = i === 0 ? 0.65 : 0.5;
            this.#game.renderer.drawPiecePreview(
                ctx,
                type,
                centerX,
                centerY,
                scale,
            );
        });
    }

    /**
     * Show action text
     * @param {string} text - Text to display
     * @param {string} type - Action type for styling
     */
    showActionText(text, type = "default") {
        const container = document.getElementById("action-text");
        if (!container) return;

        const element = document.createElement("div");
        element.className = `action-text-item ${type}`;
        element.textContent = text;
        container.appendChild(element);

        // Animate and remove
        setTimeout(() => {
            element.classList.add("fade-out");
            setTimeout(() => element.remove(), 500);
        }, 1500);
    }
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
    module.exports = { UIManager };
}
