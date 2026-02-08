// Configuration
const CONFIG = {
    PASSWORD_LENGTH: 15,
    ALL_CHARACTERS: [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[",
        "]", "|", "\\", ":", ";", "\"", "'", "<", ">", "?", "/"
    ]
}

// DOM Elements
const DOM = {
    generateBtn: document.getElementById("generate-btn"),
    firstPass: document.getElementById("firstPass"),
    secondPass: document.getElementById("secondPass"),
    symbolRadio: document.querySelector('input[type="radio"]')
}

// Password Generator Object
const PasswordGenerator = {
    // Cache for character sets to avoid recalculation
    charsets: {
        all: CONFIG.ALL_CHARACTERS.slice(),
        alphanumeric: []
    },

    // Initialize the generator
    init() {
        this.buildAlphanumericSet()
        this.attachEventListeners()
    },

    // Build alphanumeric-only character set once
    buildAlphanumericSet() {
        this.charsets.alphanumeric = CONFIG.ALL_CHARACTERS.filter((char) => {
            return /^[a-z0-9]$/.test(char)
        })
    },

    // Attach event listeners
    attachEventListeners() {
        DOM.generateBtn.addEventListener('click', () => this.generate())
        DOM.symbolRadio.addEventListener('change', () => this.generate())
    },

    // Get active character set based on radio state
    getActiveCharset() {
        return DOM.symbolRadio.checked ? this.charsets.alphanumeric : this.charsets.all
    },

    // Get random character from active charset
    getRandomChar() {
        const charset = this.getActiveCharset()
        const randomIndex = Math.floor(Math.random() * charset.length)
        return charset[randomIndex]
    },

    // Generate two passwords
    generate() {
        this.clearPasswords()
        for (let i = 0; i < CONFIG.PASSWORD_LENGTH; i++) {
            DOM.firstPass.textContent += this.getRandomChar()
            DOM.secondPass.textContent += this.getRandomChar()
        }
    },

    // Clear displayed passwords
    clearPasswords() {
        DOM.firstPass.textContent = ''
        DOM.secondPass.textContent = ''
    }
}

// Initialize on page load
PasswordGenerator.init()   

