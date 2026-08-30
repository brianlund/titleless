const showState = (enabled) => {
  chrome.action.setBadgeText({ text: enabled ? "ON" : "OFF" });
  chrome.action.setBadgeBackgroundColor({ color: enabled ? "#46a758" : "#6f7782" });
  chrome.action.setTitle({ title: `Titleless: ${enabled ? "on" : "off"}` });
};

const restoreState = async () => {
  const { enabled = false } = await chrome.storage.local.get("enabled");
  showState(enabled);
};

chrome.action.onClicked.addListener(async () => {
  const { enabled = false } = await chrome.storage.local.get("enabled");
  await chrome.storage.local.set({ enabled: !enabled });
  showState(!enabled);
});

chrome.runtime.onInstalled.addListener(restoreState);
chrome.runtime.onStartup.addListener(restoreState);
restoreState();
