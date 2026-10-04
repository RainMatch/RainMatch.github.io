/*
 * Shared behaviour for every page: the header and footer, the store
 * redirect, scroll reveals and a few small widgets. Plain JS, no build step;
 * load with <script src="…/scripts/site.js" defer>.
 *
 * <site-header base="../"> and <site-footer base="../"> render the chrome.
 * `base` is the path back to the site root ("" at the top level, "../" in
 * blog/, "../../" in a blog post).
 */

document.documentElement.classList.add('js');

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.rainmatch.app';
const APP_STORE = 'https://apps.apple.com/gb/app/rainmatch-partner-earn/id6754579970';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Android goes to Google Play; iOS, desktop and everything else to the App Store.
function redirectToStore() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    window.open(/android/i.test(userAgent) ? PLAY_STORE : APP_STORE);
}
window.redirectToStore = redirectToStore;

const NAV = [
    { label: 'About', href: 'index.html' },
    { label: 'FAQ', href: 'faq.html' },
    { label: 'Blog', href: 'blog/index.html' },
    { label: 'Claude', href: 'claude.html' },
    { label: 'Contact', href: 'contact.html' },
];

const SOCIAL = [
    {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@rainmatch',
        viewBox: '0 0 24 24',
        path: 'M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48',
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/rainmatch/',
        viewBox: '0 0 24 24',
        path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3',
    },
    {
        label: 'X',
        href: 'https://x.com/RainMatch2025',
        viewBox: '0 0 14 14',
        path: 'M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z',
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/@rainmatch',
        viewBox: '0 0 24 24',
        path: 'm10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73',
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/rainmatch',
        viewBox: '0 0 24 24',
        path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z',
    },
];

const ICON_MENU = '<svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
const ICON_CLOSE = '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
const ICON_DOWNLOAD = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14"/></svg>';

// Which NAV entry this page belongs to, by path relative to the site root.
function currentSection(base) {
    const depth = (base.match(/\.\.\//g) || []).length;
    const parts = location.pathname.split('/').filter(Boolean);
    const rel = parts.slice(Math.max(parts.length - depth - 1, 0)).join('/') || 'index.html';
    if (rel.startsWith('blog/')) return 'blog/index.html';
    return rel.endsWith('.html') ? rel : 'index.html';
}

class SiteHeader extends HTMLElement {
    connectedCallback() {
        const base = this.getAttribute('base') || '';
        const here = currentSection(base);
        const link = (item, cls) =>
            `<a class="btn ${cls}" href="${base}${item.href}"${item.href === here ? ' aria-current="page"' : ''}>${item.label}</a>`;

        this.innerHTML = `
            <nav class="site-header" aria-label="Main">
                <a class="site-brand" href="${base}index.html">
                    <img src="${base}assets/Logo_store_transparent.png" alt="" width="32" height="32" />
                    <span>RainMatch</span>
                </a>
                <div class="site-nav">${NAV.map((i) => link(i, 'btn-ghost btn-neutral btn-sm')).join('')}</div>
                <div class="site-actions">
                    <button class="btn btn-accent btn-sm" type="button" data-store>${ICON_DOWNLOAD}Download</button>
                    <span class="site-sep" aria-hidden="true"></span>
                    <a class="btn btn-ghost btn-neutral btn-sm" href="https://app.rainmatch.ai/sign-in">Sign In</a>
                    <a class="btn btn-primary btn-sm btn-signup" href="https://app.rainmatch.ai/sign-up">Sign Up</a>
                    <button class="icon-btn menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Menu">${ICON_MENU}${ICON_CLOSE}</button>
                </div>
            </nav>
            <div class="site-menu" id="site-menu">
                ${NAV.map((i) => link(i, 'btn-ghost btn-neutral')).join('')}
                <div class="site-menu-actions">
                    <a class="btn btn-secondary" href="https://app.rainmatch.ai/sign-in">Sign In</a>
                    <a class="btn btn-primary" href="https://app.rainmatch.ai/sign-up">Sign Up</a>
                </div>
            </div>`;

        const toggle = this.querySelector('.menu-toggle');
        const setOpen = (open) => {
            this.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
        };
        toggle.addEventListener('click', () => setOpen(!this.classList.contains('is-open')));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.classList.contains('is-open')) {
                setOpen(false);
                toggle.focus();
            }
        });
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) setOpen(false);
        });

        const onScroll = () => this.classList.toggle('is-scrolled', window.scrollY > 8);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        const base = this.getAttribute('base') || '';
        const social = SOCIAL.map((s) => `
            <a href="${s.href}" target="_blank" rel="noopener" aria-label="RainMatch on ${s.label}">
                <svg viewBox="${s.viewBox}" aria-hidden="true"><path d="${s.path}"/></svg>
            </a>`).join('');

        this.innerHTML = `
            <footer class="container site-footer">
                <div class="footer-brand">
                    <a class="site-brand" href="${base}index.html">
                        <img src="${base}assets/Logo_store_transparent.png" alt="" width="32" height="32" />
                        <span>RainMatch</span>
                    </a>
                    <p>Turn your network into revenue</p>
                    <div class="footer-social">${social}</div>
                </div>
                <nav class="footer-col" aria-label="Product">
                    <span class="section-label">Product</span>
                    <a href="${base}index.html">Home</a>
                    <a href="${base}faq.html">FAQ</a>
                    <a href="${base}blog/index.html">Blog</a>
                    <a href="${base}claude.html">Claude</a>
                </nav>
                <nav class="footer-col" aria-label="Company">
                    <span class="section-label">Company</span>
                    <a href="${base}contact.html">Contact Us</a>
                    <a href="${base}privacy.html">Privacy Policy</a>
                </nav>
                <p class="footer-legal">&copy; 2025 Rainmakers LLC. All rights reserved.</p>
            </footer>`;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);

// Any element with data-store opens the right app store.
document.addEventListener('click', (e) => {
    if (e.target.closest('[data-store]')) {
        e.preventDefault();
        redirectToStore();
    }
});

/* ---------- Scroll reveal ---------- */

// [data-reveal] fades and rises in when it scrolls into view. Children of a
// [data-reveal-stagger] parent enter one after another.
function initReveal(root = document) {
    root.querySelectorAll('[data-reveal-stagger]').forEach((group) => {
        [...group.children].forEach((child, i) => {
            child.setAttribute('data-reveal', '');
            child.style.setProperty('--reveal-delay', `${Math.min(i, 6) * 80}ms`);
        });
    });

    const items = root.querySelectorAll('[data-reveal]:not(.is-visible)');
    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
        items.forEach((el) => el.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    items.forEach((el) => observer.observe(el));
}
window.initReveal = initReveal;

/* ---------- Step progress ---------- */

// A .step-segments bar fills one segment per [data-step] in its group as
// those steps scroll into view, so "How it works" reads as a sequence.
function initStepProgress() {
    document.querySelectorAll('[data-step-group]').forEach((group) => {
        const segments = group.querySelectorAll('.step-segments > span');
        const steps = group.querySelectorAll('[data-step]');
        // Only ever fills, so a panel shown fully (e.g. by a tab switch) stays full.
        const fill = (count) => segments.forEach((s, i) => { if (i < count) s.classList.add('is-done'); });
        if (reduceMotion.matches || !('IntersectionObserver' in window)) {
            fill(segments.length);
            return;
        }
        let seen = 0;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                seen = Math.max(seen, Number(entry.target.dataset.step));
                fill(seen);
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.4 });
        steps.forEach((s) => observer.observe(s));
    });
}

/* ---------- Accordion ---------- */

// <details class="accordion-item"> inside [data-accordion="single"] keeps only
// one item open at a time.
function initAccordions() {
    document.querySelectorAll('.accordion-item').forEach((item) => {
        item.addEventListener('toggle', () => {
            if (!item.open) return;
            item.classList.add('is-opening');
            setTimeout(() => item.classList.remove('is-opening'), 250);
            const group = item.closest('[data-accordion="single"]');
            if (!group) return;
            group.querySelectorAll('.accordion-item[open]').forEach((other) => {
                if (other !== item) other.open = false;
            });
        });
    });
}

/* ---------- Copy buttons ---------- */

// <button data-copy-target="id"> copies the text of #id.
function initCopyButtons() {
    document.querySelectorAll('[data-copy-target]').forEach((button) => {
        const label = button.textContent;
        button.addEventListener('click', async () => {
            const target = document.getElementById(button.dataset.copyTarget);
            if (!target) return;
            try {
                await navigator.clipboard.writeText(target.textContent.trim());
                button.textContent = 'Copied';
                button.classList.add('is-copied');
                setTimeout(() => {
                    button.textContent = label;
                    button.classList.remove('is-copied');
                }, 1500);
            } catch {
                // Clipboard blocked (e.g. no HTTPS): select it so Ctrl+C works.
                const range = document.createRange();
                range.selectNodeContents(target);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            }
        });
    });
}

/* ---------- Reading progress ---------- */

// A thin bar along the top of an article, filled as you read.
function initReadingProgress() {
    const article = document.querySelector('[data-reading-progress]');
    if (!article) return;
    const bar = document.createElement('div');
    bar.className = 'reading-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    const update = () => {
        const rect = article.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 1;
        bar.style.setProperty('--progress', progress.toFixed(4));
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
}

document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initStepProgress();
    initAccordions();
    initCopyButtons();
    initReadingProgress();
});
