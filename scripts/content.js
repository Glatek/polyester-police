const reported = new Set();

async function plasticsCheck () {
  const detected = []

  const testFor = [
    'polyester',
    'polyamid',
    'elastan'
  ].filter(t => !reported.has(t));

  for (const test of testFor) {
    if (document.body.textContent.toLocaleLowerCase().includes(test)) {
      reported.add(test);
      detected.push(test);
    }
  }

  if (detected.length > 0) {
    await chrome.runtime.sendMessage({ detected });
  }
}

window.addEventListener('DOMContentLoaded', plasticsCheck, false);

const observer = new MutationObserver(plasticsCheck);

observer.observe(document.body, {
  childList: true,
  subtree: true
});
