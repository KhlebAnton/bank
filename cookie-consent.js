class CookieConsent {
    constructor() {
        this.overlayElement = document.getElementById('cookie-overlay');
        this.mainContent = document.getElementById('main-content');
        this.initEventListeners();
        this.checkCookieConsent();
    }

    initEventListeners() {
        document.getElementById('accept-cookies').addEventListener('click', () => this.acceptCookies());
        document.getElementById('no-accept-cookies').addEventListener('click', () => this.noAcceptCookies());
    }

    checkCookieConsent() {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            this.blockInteraction();
        } else {
            this.allowInteraction();
        }
    }

    blockInteraction() {
        document.body.classList.add('no-scroll');
        this.overlayElement.classList.remove('hidden');
        this.mainContent.inert = true; // Prevent interactions with main content
    }

    allowInteraction() {
        document.body.classList.remove('no-scroll');
        this.overlayElement.classList.add('hidden');
        this.mainContent.inert = false; // Allow interactions with main content
    }

    acceptCookies() {
        localStorage.setItem('cookie-consent', 'accepted');
        this.allowInteraction();
    }
    noAcceptCookies() {
        this.allowInteraction();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CookieConsent();
});