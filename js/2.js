(() => {
  const toc = document.querySelector('.uagb-toc__list-wrap');
  const headings = [...document.querySelectorAll('.article-content h3')];
  if (toc) {
    const links = [...toc.querySelectorAll('a.uagb-toc-link__trigger')];
    const list = document.createElement('ol');
    list.className = 'uagb-toc__list';
    links.forEach((link, index) => {
      const item = document.createElement('li');
      item.append(link);
      list.append(item);
      if (headings[index]) headings[index].id = link.hash.slice(1);
    });
    toc.replaceChildren(list);
  }

  const faq = document.querySelector('.uagb-faq__outer-wrap');
  if (faq) {
    faq.removeAttribute('role');
    [...faq.querySelectorAll('.uagb-faq-item')].forEach((item, index) => {
      item.removeAttribute('role');
      item.removeAttribute('tabindex');
      const question = item.querySelector('.uagb-faq-questions');
      const answer = item.querySelector('.uagb-faq-content');
      if (!question || !answer) return;
      const answerId = `faq-answer-${index + 1}`;
      answer.id = answerId;
      question.setAttribute('role', 'button');
      question.setAttribute('tabindex', '0');
      question.setAttribute('aria-controls', answerId);
      const setOpen = (open) => {
        item.classList.toggle('is-open', open);
        question.setAttribute('aria-expanded', String(open));
      };
      setOpen(index === 0);
      question.addEventListener('click', () => setOpen(!item.classList.contains('is-open')));
      question.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          question.click();
        }
      });
    });
    faq.classList.add('faq-ready');
  }
})();
