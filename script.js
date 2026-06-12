document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach(block => hljs.highlightElement(block));

    const observer = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.08 }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav-scrolled', window.scrollY > 10);
    }, { passive: true });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-links-open');
        hamburger.classList.toggle('open');
    });
});

function copyInstall() {
    const text = document.getElementById('install-cmd').textContent;
    const btn = document.getElementById('copy-btn');
    navigator.clipboard.writeText(text).then(() => {
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy';
            btn.classList.remove('copied');
        }, 2000);
    });
}
