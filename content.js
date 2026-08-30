const applyState = (enabled) =>
  document.documentElement.classList.toggle("no-clickbait", enabled);

chrome.storage.local.get({ enabled: false }).then(({ enabled }) => applyState(enabled));

chrome.storage.onChanged.addListener(({ enabled }) => {
  if (enabled) applyState(enabled.newValue);
});
