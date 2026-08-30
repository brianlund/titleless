import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

let enabled = false;
let click;
let badge;

const chrome = {
  action: {
    onClicked: { addListener: (listener) => (click = listener) },
    setBadgeText: ({ text }) => (badge = text),
    setBadgeBackgroundColor() {},
    setTitle() {},
  },
  runtime: {
    onInstalled: { addListener() {} },
    onStartup: { addListener() {} },
  },
  storage: {
    local: {
      get: async () => ({ enabled }),
      set: async (value) => (enabled = value.enabled),
    },
  },
};

vm.runInNewContext(fs.readFileSync("background.js", "utf8"), { chrome });
await click();
assert.equal(enabled, true);
assert.equal(badge, "ON");
await click();
assert.equal(enabled, false);
assert.equal(badge, "OFF");
