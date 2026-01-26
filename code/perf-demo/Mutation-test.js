const next = window.requestAnimationFrame ? requestAnimationFrame : setTimeout;
const ignoreDOMList = ["style", "script", "link"];

observer = new MutationObserver((mutationList) => {
  const entry = {
    children: [],
  };

  for (const mutation of mutationList) {
    if (mutation.addedNodes.length && isInScreen(mutation.target)) {
      // ...
    }
  }
  if (entry.children.length) {
    entries.push(entry);
    next(() => {
      entry.startTime = performance.now();
    });
  }
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
