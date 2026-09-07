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
});
