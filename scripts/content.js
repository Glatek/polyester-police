async function plasticsCheck () {
  const polyester = document.body.textContent.includes('polyester');

  if (polyester) {
    await chrome.runtime.sendMessage({ detected: ['polyester'] });
  }
}

window.addEventListener('DOMContentLoaded', plasticsCheck, false);

const observer = new MutationObserver(plasticsCheck);

observer.observe(document.body, {
  childList: true,
  subtree: true
});
