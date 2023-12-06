// Make sure sw are supported
if ("serviceWorker" in navigator) {
  window.addEventListener(
    "load",
    () => {
      navigator.serviceWorker
        .register("./sw_cached_pages.js")
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((reg) => console.log("Service worker: Registered"))
        .catch((err) => console.log(`Service Worker: Error: ${err}`));
    },
    { passive: true }
  );
}
