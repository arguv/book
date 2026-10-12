(function () {
    // 1. collect all qa-cards with non-empty question text
    const allCards = document.querySelectorAll('.qa-card');
    const menuList = document.getElementById('menuList');
    const menuItems = [];

    allCards.forEach((card, index) => {
        const questionSpan = card.querySelector('.question-text .highlight-q');
        if (!questionSpan) return;

        let qText = questionSpan.innerText.trim();
        if (qText === '') return;

        // Truncate for display
        let displayText = qText;
        if (displayText.length > 22) {
            displayText = displayText.slice(0, 22) + '…';
        }

        if (!card.id) {
            card.id = 'card-' + index;
        }

        menuItems.push({
            id: card.id,
            text: displayText,
            fullText: qText,
            element: card
        });
    });

    // 2. Build the floating menu
    if (menuItems.length === 0) {
        menuList.innerHTML = '<div style="padding:0.8rem;color:#6b8da8;">No questions found</div>';
        return;
    }

    menuList.innerHTML = '';

    menuItems.forEach((item, idx) => {
        const a = document.createElement('a');
        a.href = '#' + item.id;
        a.className = 'menu-item';
        a.dataset.targetId = item.id;
        a.innerText = item.text;   // no icon
        a.title = item.fullText;

        a.addEventListener('click', function (e) {
            document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        });

        menuList.appendChild(a);
    });

    // 3. scrollspy: highlight active menu item
    const sections = menuItems.map(item => document.getElementById(item.id));
    const menuLinks = document.querySelectorAll('.menu-item');

    function updateActiveMenu() {
        if (!sections.length) return;

        const scrollPos = window.scrollY + 100;
        let activeIndex = 0;

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    activeIndex = i;
                    break;
                }
            }
        }

        // if at page bottom, select last
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80) {
            activeIndex = sections.length - 1;
        }

        menuLinks.forEach((link, idx) => {
            if (idx === activeIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveMenu);
    window.addEventListener('resize', updateActiveMenu);
    window.addEventListener('load', updateActiveMenu);
    updateActiveMenu();

    // 4. handle initial hash
    if (window.location.hash) {
        const hash = window.location.hash;
        const targetLink = document.querySelector(`.menu-item[href="${hash}"]`);
        if (targetLink) {
            menuLinks.forEach(el => el.classList.remove('active'));
            targetLink.classList.add('active');
        }
    }
})();