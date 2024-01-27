chrome.runtime.onMessage.addListener(
  async (request) => {
    if (request.detected)
      await chrome.notifications.create(crypto.randomUUID(), {
        type: "basic",
        title: "Polyester Policy",
        message: `This page contains the string ${request.detected.join('')}`,
        iconUrl: "../img/logo.png"
      });
  }
);