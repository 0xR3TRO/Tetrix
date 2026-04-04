/* ============================================================================
   RetroTetris - Internationalization System (i18n)
   Multi-language support: PL, EN, DE, JA
   ============================================================================ */

const TRANSLATIONS = {
    pl: {
        app: {
            title: "RetroTetris",
            tagline: "Przeglądarkowa klasyka — nowa era",
        },
        nav: {
            settings: "Ustawienia",
            controls: "Sterowanie",
            scores: "Wyniki",
        },
        menu: {
            play: "Graj",
            modes: "Tryby gry",
            scores: "Wysokie wyniki",
            settings: "Ustawienia",
            controls: "Sterowanie",
            stats: "Statystyki",
        },
        modes: {
            marathon: {
                name: "Maraton",
                desc: "Graj bez limitu czasu. Poziom rośnie co 10 linii.",
            },
            sprint: {
                name: "Sprint",
                desc: "Skasuj 40 linii w jak najkrótszym czasie.",
            },
            ultra: {
                name: "Ultra",
                desc: "2 minuty. Maksymalny wynik punktowy.",
            },
            back: "Powrót",
        },
        game: {
            hold: "Trzymaj",
            score: "Wynik",
            level: "Poziom",
            time: "Czas",
            next: "Następne",
            lines: "Linie",
            lines_count: ["{count} linia", "{count} linie", "{count} linii"],
            combo: "Combo",
            back2back: "Back-to-Back",
        },
        actions: {
            tetris: "TETRIS!",
            tspin: "T-SPIN!",
            tspin_mini: "MINI T-SPIN",
            tspin_single: "T-SPIN SINGLE",
            tspin_double: "T-SPIN DOUBLE",
            tspin_triple: "T-SPIN TRIPLE",
            perfect_clear: "PERFEKCYJNE POLE!",
            back2back: "BACK-TO-BACK",
            combo: "x{count} COMBO",
        },
        pause: {
            title: "PAUZA",
            resume: "Wznów",
            restart: "Restart",
            settings: "Ustawienia",
            menu: "Menu",
        },
        gameover: {
            title: "GAME OVER",
            new_record: "NOWY REKORD!",
            score: "Wynik",
            level: "Poziom",
            lines: "Linie",
            time: "Czas",
            initials: "Wpisz inicjały",
            play_again: "Jeszcze raz",
            menu: "Menu",
        },
        settings: {
            title: "Ustawienia",
            sections: {
                appearance: "Wygląd",
                gameplay: "Rozgrywka",
                input: "Sterowanie",
                audio: "Dźwięk",
            },
            theme: "Motyw",
            theme_dark: "Ciemny",
            theme_light: "Jasny",
            language: "Język",
            ghost: "Ghost piece",
            ghost_desc: "Podgląd miejsca lądowania",
            grid: "Siatka",
            grid_desc: "Linie planszy",
            animations: "Animacje",
            animations_desc: "Efekty kasowania linii",
            das: "DAS",
            das_desc: "Opóźnienie auto-powtarzania",
            arr: "ARR",
            arr_desc: "Częstotliwość auto-powtarzania",
            sdf: "SDF",
            sdf_desc: "Mnożnik soft drop",
            sfx: "Efekty dźwiękowe",
            music: "Muzyka",
            reset: "Przywróć domyślne",
            back: "Powrót",
        },
        controls: {
            title: "Sterowanie",
            keyboard: "Klawiatura",
            touch: "Dotyk (Mobile)",
            gamepad: "Gamepad",
            move_left: "Ruch w lewo",
            move_right: "Ruch w prawo",
            rotate_cw: "Rotacja CW",
            rotate_ccw: "Rotacja CCW",
            hard_drop: "Hard Drop",
            soft_drop: "Soft Drop",
            hold: "Trzymaj",
            pause: "Pauza",
            restart: "Restart",
            back: "Powrót",
        },
        scores: {
            title: "Wysokie wyniki",
            empty: "Brak wyników — zagraj swoją pierwszą partię!",
            rank: "Miejsce",
            name: "Gracz",
            score: "Wynik",
            level: "Poziom",
            lines: "Linie",
            date: "Data",
            back: "Powrót",
        },
        stats: {
            title: "Statystyki",
            games: "Rozegrane gry",
            lines: "Skasowane linie",
            time: "Czas gry",
            tetrises: "Tetrisy",
            tspins: "T-Spiny",
            pieces: "Położone klocki",
            back: "Powrót",
        },
        toast: {
            theme_dark: "Ciemny motyw włączony",
            theme_light: "Jasny motyw włączony",
            lang_changed: "Język zmieniony",
            settings_saved: "Ustawienia zapisane",
        },
    },

    en: {
        app: { title: "RetroTetris", tagline: "Browser classic — new era" },
        nav: { settings: "Settings", controls: "Controls", scores: "Scores" },
        menu: {
            play: "Play",
            modes: "Game Modes",
            scores: "High Scores",
            settings: "Settings",
            controls: "Controls",
            stats: "Statistics",
        },
        modes: {
            marathon: {
                name: "Marathon",
                desc: "Play without time limit. Level up every 10 lines.",
            },
            sprint: {
                name: "Sprint",
                desc: "Clear 40 lines as fast as possible.",
            },
            ultra: { name: "Ultra", desc: "2 minutes. Maximum point score." },
            back: "Back",
        },
        game: {
            hold: "Hold",
            score: "Score",
            level: "Level",
            time: "Time",
            next: "Next",
            lines: "Lines",
            lines_count: ["{count} line", "{count} lines"],
            combo: "Combo",
            back2back: "Back-to-Back",
        },
        actions: {
            tetris: "TETRIS!",
            tspin: "T-SPIN!",
            tspin_mini: "MINI T-SPIN",
            tspin_single: "T-SPIN SINGLE",
            tspin_double: "T-SPIN DOUBLE",
            tspin_triple: "T-SPIN TRIPLE",
            perfect_clear: "PERFECT CLEAR!",
            back2back: "BACK-TO-BACK",
            combo: "x{count} COMBO",
        },
        pause: {
            title: "PAUSED",
            resume: "Resume",
            restart: "Restart",
            settings: "Settings",
            menu: "Menu",
        },
        gameover: {
            title: "GAME OVER",
            new_record: "NEW RECORD!",
            score: "Score",
            level: "Level",
            lines: "Lines",
            time: "Time",
            initials: "Enter initials",
            play_again: "Play Again",
            menu: "Menu",
        },
        settings: {
            title: "Settings",
            sections: {
                appearance: "Appearance",
                gameplay: "Gameplay",
                input: "Input",
                audio: "Audio",
            },
            theme: "Theme",
            theme_dark: "Dark",
            theme_light: "Light",
            language: "Language",
            ghost: "Ghost piece",
            ghost_desc: "Preview landing position",
            grid: "Grid",
            grid_desc: "Board grid lines",
            animations: "Animations",
            animations_desc: "Line clear effects",
            das: "DAS",
            das_desc: "Delayed auto shift",
            arr: "ARR",
            arr_desc: "Auto repeat rate",
            sdf: "SDF",
            sdf_desc: "Soft drop factor",
            sfx: "Sound effects",
            music: "Music",
            reset: "Reset to defaults",
            back: "Back",
        },
        controls: {
            title: "Controls",
            keyboard: "Keyboard",
            touch: "Touch (Mobile)",
            gamepad: "Gamepad",
            move_left: "Move left",
            move_right: "Move right",
            rotate_cw: "Rotate CW",
            rotate_ccw: "Rotate CCW",
            hard_drop: "Hard Drop",
            soft_drop: "Soft Drop",
            hold: "Hold",
            pause: "Pause",
            restart: "Restart",
            back: "Back",
        },
        scores: {
            title: "High Scores",
            empty: "No scores yet — play your first game!",
            rank: "Rank",
            name: "Player",
            score: "Score",
            level: "Level",
            lines: "Lines",
            date: "Date",
            back: "Back",
        },
        stats: {
            title: "Statistics",
            games: "Games played",
            lines: "Lines cleared",
            time: "Time played",
            tetrises: "Tetrises",
            tspins: "T-Spins",
            pieces: "Pieces placed",
            back: "Back",
        },
        toast: {
            theme_dark: "Dark theme enabled",
            theme_light: "Light theme enabled",
            lang_changed: "Language changed",
            settings_saved: "Settings saved",
        },
    },

    de: {
        app: { title: "RetroTetris", tagline: "Browser-Klassiker — neue Ära" },
        nav: {
            settings: "Einstellungen",
            controls: "Steuerung",
            scores: "Punkte",
        },
        menu: {
            play: "Spielen",
            modes: "Spielmodi",
            scores: "Highscores",
            settings: "Einstellungen",
            controls: "Steuerung",
            stats: "Statistiken",
        },
        modes: {
            marathon: {
                name: "Marathon",
                desc: "Ohne Zeitlimit spielen. Level steigt alle 10 Linien.",
            },
            sprint: {
                name: "Sprint",
                desc: "40 Linien so schnell wie möglich räumen.",
            },
            ultra: { name: "Ultra", desc: "2 Minuten. Maximale Punktzahl." },
            back: "Zurück",
        },
        game: {
            hold: "Halten",
            score: "Punkte",
            level: "Level",
            time: "Zeit",
            next: "Nächste",
            lines: "Linien",
            lines_count: ["{count} Linie", "{count} Linien"],
            combo: "Combo",
            back2back: "Back-to-Back",
        },
        actions: {
            tetris: "TETRIS!",
            tspin: "T-SPIN!",
            tspin_mini: "MINI T-SPIN",
            tspin_single: "T-SPIN EINFACH",
            tspin_double: "T-SPIN DOPPEL",
            tspin_triple: "T-SPIN DREIFACH",
            perfect_clear: "PERFEKT!",
            back2back: "BACK-TO-BACK",
            combo: "x{count} COMBO",
        },
        pause: {
            title: "PAUSE",
            resume: "Fortsetzen",
            restart: "Neustart",
            settings: "Einstellungen",
            menu: "Menü",
        },
        gameover: {
            title: "SPIEL VORBEI",
            new_record: "NEUER REKORD!",
            score: "Punkte",
            level: "Level",
            lines: "Linien",
            time: "Zeit",
            initials: "Initialen eingeben",
            play_again: "Nochmal",
            menu: "Menü",
        },
        settings: {
            title: "Einstellungen",
            sections: {
                appearance: "Aussehen",
                gameplay: "Gameplay",
                input: "Eingabe",
                audio: "Ton",
            },
            theme: "Design",
            theme_dark: "Dunkel",
            theme_light: "Hell",
            language: "Sprache",
            ghost: "Geist-Stück",
            ghost_desc: "Landeposition anzeigen",
            grid: "Gitter",
            grid_desc: "Spielfeldlinien",
            animations: "Animationen",
            animations_desc: "Linien-Effekte",
            das: "DAS",
            das_desc: "Verzögertes Auto-Shift",
            arr: "ARR",
            arr_desc: "Auto-Wiederholrate",
            sdf: "SDF",
            sdf_desc: "Soft-Drop-Faktor",
            sfx: "Soundeffekte",
            music: "Musik",
            reset: "Auf Standard zurücksetzen",
            back: "Zurück",
        },
        controls: {
            title: "Steuerung",
            keyboard: "Tastatur",
            touch: "Touch (Mobil)",
            gamepad: "Gamepad",
            move_left: "Links bewegen",
            move_right: "Rechts bewegen",
            rotate_cw: "Drehen CW",
            rotate_ccw: "Drehen CCW",
            hard_drop: "Hard Drop",
            soft_drop: "Soft Drop",
            hold: "Halten",
            pause: "Pause",
            restart: "Neustart",
            back: "Zurück",
        },
        scores: {
            title: "Highscores",
            empty: "Noch keine Punkte — spiele dein erstes Spiel!",
            rank: "Rang",
            name: "Spieler",
            score: "Punkte",
            level: "Level",
            lines: "Linien",
            date: "Datum",
            back: "Zurück",
        },
        stats: {
            title: "Statistiken",
            games: "Gespielte Spiele",
            lines: "Gelöschte Linien",
            time: "Spielzeit",
            tetrises: "Tetrisse",
            tspins: "T-Spins",
            pieces: "Platzierte Teile",
            back: "Zurück",
        },
        toast: {
            theme_dark: "Dunkles Design aktiviert",
            theme_light: "Helles Design aktiviert",
            lang_changed: "Sprache geändert",
            settings_saved: "Einstellungen gespeichert",
        },
    },

    ja: {
        app: {
            title: "レトロテトリス",
            tagline: "ブラウザクラシック — 新時代",
        },
        nav: { settings: "設定", controls: "操作", scores: "スコア" },
        menu: {
            play: "プレイ",
            modes: "ゲームモード",
            scores: "ハイスコア",
            settings: "設定",
            controls: "操作説明",
            stats: "統計",
        },
        modes: {
            marathon: {
                name: "マラソン",
                desc: "時間制限なし。10ラインごとにレベルアップ。",
            },
            sprint: { name: "スプリント", desc: "40ラインを最速でクリア。" },
            ultra: { name: "ウルトラ", desc: "2分間。最大ポイントを獲得。" },
            back: "戻る",
        },
        game: {
            hold: "ホールド",
            score: "スコア",
            level: "レベル",
            time: "タイム",
            next: "ネクスト",
            lines: "ライン",
            lines_count: ["{count}ライン"],
            combo: "コンボ",
            back2back: "バックトゥバック",
        },
        actions: {
            tetris: "テトリス！",
            tspin: "Tスピン！",
            tspin_mini: "ミニTスピン",
            tspin_single: "Tスピン シングル",
            tspin_double: "Tスピン ダブル",
            tspin_triple: "Tスピン トリプル",
            perfect_clear: "パーフェクト！",
            back2back: "バックトゥバック",
            combo: "x{count}コンボ",
        },
        pause: {
            title: "一時停止",
            resume: "再開",
            restart: "リスタート",
            settings: "設定",
            menu: "メニュー",
        },
        gameover: {
            title: "ゲームオーバー",
            new_record: "新記録！",
            score: "スコア",
            level: "レベル",
            lines: "ライン",
            time: "タイム",
            initials: "イニシャルを入力",
            play_again: "もう一度",
            menu: "メニュー",
        },
        settings: {
            title: "設定",
            sections: {
                appearance: "外観",
                gameplay: "ゲームプレイ",
                input: "入力設定",
                audio: "サウンド",
            },
            theme: "テーマ",
            theme_dark: "ダーク",
            theme_light: "ライト",
            language: "言語",
            ghost: "ゴーストピース",
            ghost_desc: "着地位置プレビュー",
            grid: "グリッド",
            grid_desc: "フィールドのグリッド線",
            animations: "アニメーション",
            animations_desc: "ライン消去エフェクト",
            das: "DAS",
            das_desc: "遅延自動シフト",
            arr: "ARR",
            arr_desc: "自動繰り返し速度",
            sdf: "SDF",
            sdf_desc: "ソフトドロップ係数",
            sfx: "効果音",
            music: "BGM",
            reset: "デフォルトに戻す",
            back: "戻る",
        },
        controls: {
            title: "操作説明",
            keyboard: "キーボード",
            touch: "タッチ（モバイル）",
            gamepad: "ゲームパッド",
            move_left: "左移動",
            move_right: "右移動",
            rotate_cw: "右回転",
            rotate_ccw: "左回転",
            hard_drop: "ハードドロップ",
            soft_drop: "ソフトドロップ",
            hold: "ホールド",
            pause: "一時停止",
            restart: "リスタート",
            back: "戻る",
        },
        scores: {
            title: "ハイスコア",
            empty: "まだスコアがありません — 最初のゲームをプレイ！",
            rank: "順位",
            name: "プレイヤー",
            score: "スコア",
            level: "レベル",
            lines: "ライン",
            date: "日付",
            back: "戻る",
        },
        stats: {
            title: "統計",
            games: "プレイ回数",
            lines: "消去ライン",
            time: "プレイ時間",
            tetrises: "テトリス",
            tspins: "Tスピン",
            pieces: "配置ピース",
            back: "戻る",
        },
        toast: {
            theme_dark: "ダークテーマを有効化",
            theme_light: "ライトテーマを有効化",
            lang_changed: "言語が変更されました",
            settings_saved: "設定を保存しました",
        },
    },
};

/**
 * i18n System - Lightweight internationalization
 */
class I18n {
    static #locale = "en";
    static #translations = TRANSLATIONS.en;

    static get locale() {
        return this.#locale;
    }

    static load(locale) {
        if (!TRANSLATIONS[locale]) locale = "en";
        this.#locale = locale;
        this.#translations = TRANSLATIONS[locale];
        this.#updateDOM();
    }

    /** Get translated string with interpolation */
    static t(key, vars = {}) {
        const str = this.#get(key) || key;
        if (typeof str !== "string") return key;
        return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
    }

    /** Pluralization */
    static tn(key, count) {
        const forms = this.#get(key);
        if (!Array.isArray(forms)) return this.t(key, { count });
        const idx = this.#pluralIndex(count);
        return (forms[idx] || forms[0]).replace("{count}", count);
    }

    /** Format number according to locale */
    static n(number, opts = {}) {
        return new Intl.NumberFormat(this.#locale, opts).format(number);
    }

    /** Format time as mm:ss.ms */
    static time(ms) {
        const m = Math.floor(ms / 60000);
        const s = Math.floor((ms % 60000) / 1000);
        const cs = Math.floor((ms % 1000) / 10);
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(cs).padStart(2, "0")}`;
    }

    static #get(key) {
        return key.split(".").reduce((obj, k) => obj?.[k], this.#translations);
    }

    static #pluralIndex(n) {
        switch (this.#locale) {
            case "pl":
                if (n === 1) return 0;
                if (
                    n % 10 >= 2 &&
                    n % 10 <= 4 &&
                    (n % 100 < 10 || n % 100 >= 20)
                )
                    return 1;
                return 2;
            case "de":
                return n === 1 ? 0 : 1;
            case "ja":
                return 0; // Japanese has no plurals
            default:
                return n === 1 ? 0 : 1;
        }
    }

    static #updateDOM() {
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            const val = this.t(key);
            if (el.dataset.i18nAttr) {
                el.setAttribute(el.dataset.i18nAttr, val);
            } else {
                el.textContent = val;
            }
        });
        document.querySelectorAll("[data-i18n-html]").forEach((el) => {
            el.innerHTML = this.t(el.dataset.i18nHtml);
        });
        document.documentElement.setAttribute("lang", this.#locale);
    }
}

export { I18n, TRANSLATIONS };
