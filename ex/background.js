chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.executeScript(tab.id, {
      code: `
        document.querySelectorAll('img').forEach(img => {
          img.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = img.src;
            link.download = 'downloaded_image';
            link.click();
          });
        });
      `
    });
  });
  