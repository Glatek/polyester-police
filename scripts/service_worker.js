chrome.runtime.onMessage.addListener(
  async (request) => {
    if (request.detected.length > 0)
      await chrome.notifications.create(crypto.randomUUID(), {
        type: "basic",
        title: "Polyester Policy",
        message: `This page contains the string${request.detected.length > 1 ? 's' : ''} ${request.detected.join(', ')}`,
        iconUrl: "../img/logo.png"
      });
  }
);
