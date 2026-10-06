/* ==========================================================================
   RESUME INTERACTION SCRIPT — JALASUTRAM PURNA VENKATA SIDDHARDHA
   Lightweight, Vanilla JS, Zero External Dependencies
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const printBtn = document.getElementById('print-btn');
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyText = document.getElementById('copy-text');

    // Print Resume Button Handler
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Copy Email to Clipboard Handler
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = 'jalasutramsiddhardha@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                if (copyText) {
                    const originalText = copyText.textContent;
                    copyText.textContent = 'Copied!';
                    copyEmailBtn.classList.add('copied');
                    setTimeout(() => {
                        copyText.textContent = originalText;
                        copyEmailBtn.classList.remove('copied');
                    }, 2000);
                }
            }).catch(err => {
                console.log('Failed to copy email: ', err);
            });
        });
    }

    // View Mode Toggle Handler (Mobile Flow vs. Desktop 2-Column Sheet)
    const viewToggleBtn = document.getElementById('view-toggle-btn');
    const viewToggleText = document.getElementById('view-toggle-text');
    const resumeWrapper = document.querySelector('.resume-wrapper');
    const desktopBanner = document.getElementById('desktop-view-banner');

    if (viewToggleBtn && resumeWrapper) {
        viewToggleBtn.addEventListener('click', () => {
            const isDesktopMode = resumeWrapper.classList.toggle('mode-desktop-sheet');
            if (isDesktopMode) {
                if (viewToggleText) viewToggleText.textContent = 'Mobile View';
                viewToggleBtn.classList.add('active-view');
                if (desktopBanner) desktopBanner.style.display = 'flex';
            } else {
                if (viewToggleText) viewToggleText.textContent = 'Desktop View';
                viewToggleBtn.classList.remove('active-view');
                if (desktopBanner) desktopBanner.style.display = 'none';
            }
        });
    }
});
