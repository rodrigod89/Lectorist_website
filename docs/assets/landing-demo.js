const tabs = [...document.querySelectorAll('[role="tab"]')];

function selectTab(selected) {
  for (const tab of tabs) {
    const active = tab === selected;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  }
}

for (const tab of tabs) {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    const index = tabs.indexOf(tab);
    const targets = { ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: tabs.length - 1 };
    if (!Object.hasOwn(targets, event.key)) return;
    event.preventDefault();
    const selected = tabs[(targets[event.key] + tabs.length) % tabs.length];
    selectTab(selected);
    selected.focus();
  });
}

for (const word of document.querySelectorAll('[data-demo-word]')) {
  word.addEventListener('click', () => {
    const isOpen = word.getAttribute('aria-expanded') === 'false';
    for (const id of word.getAttribute('aria-controls').split(' ')) {
      document.getElementById(id).hidden = !isOpen;
    }
    word.setAttribute('aria-expanded', String(isOpen));
  });
}
