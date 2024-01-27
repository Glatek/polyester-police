const reported = new Set();

async function plasticsCheck () {
  // Probably not a store
  if (!document.body.textContent.toLocaleLowerCase().includes('material')) {
    return;
  }

  const detected = [];

  const testFor = [
    'polyester',
    'climatic',
    'coolmax',
    'polyamide',
    'polyamid',
    'elastan',
    'akryl',
    'cordura',
    'nylon',
    'cotpolmex',
    'fleece',
    'lycra'
  ].filter(t => !reported.has(t));

  for (const test of testFor) {
    if (document.body.textContent.toLocaleLowerCase().includes(test)) {
      reported.add(test);
      detected.push(test);
    }
  }

  console.log(detected);

  if (detected.length > 0) {
    console.log('send');
    await chrome.runtime.sendMessage({ detected });
  }
}

window.addEventListener('DOMContentLoaded', plasticsCheck, false);

const observer = new MutationObserver(plasticsCheck);

observer.observe(document.body, {
  childList: true,
  subtree: true
});
