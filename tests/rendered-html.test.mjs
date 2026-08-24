import assert from "node:assert/strict";
import test from "node:test";

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

const env = {
  ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
};
const ctx = { waitUntil() {}, passThroughOnException() {} };

test("renders the working AI intake experience", async () => {
  const worker = await loadWorker();

  const response = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    env,
    ctx,
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Working AI MVP/);
  assert.match(html, /Add completed RFP response/);
  assert.match(html, /Run integrity preflight/);
});

test("requires a server-side AI connection", async () => {
  const worker = await loadWorker();
  const response = await worker.fetch(
    new Request("http://localhost/api/analyze", { method: "POST", headers: { "content-type": "application/json" }, body: "{}" }),
    env,
    ctx,
  );
  assert.equal(response.status, 503);
  assert.match(await response.text(), /site owner/);
});
