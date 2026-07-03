/*
  LP-001 prototype tracking stub.
  Replace console logging with Plausible, GA4, Matomo or another analytics layer before launch.
*/

(function () {
  const events = [];

  function track(name, payload = {}) {
    const event = {
      name,
      payload,
      ts: new Date().toISOString(),
      path: window.location.pathname
    };
    events.push(event);
    window.__kompassEvents = events;
    console.log("kompass_event", event);
  }

  window.kompassTrack = track;

  track("page_view");

  document.querySelectorAll("[data-track]").forEach((el) => {
    el.addEventListener("click", () => {
      track(el.getAttribute("data-track"), {
        text: (el.innerText || el.textContent || "").trim(),
        href: el.getAttribute("href") || null
      });
    });
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formType = form.getAttribute("data-form") || "unknown";
      const input = form.querySelector("input[type='email']");
      track("email_optin", {
        form: formType,
        has_email: Boolean(input && input.value)
      });
      form.reset();
      alert("Danke. Prototype: Noch keine echte Speicherung aktiv.");
    });
  });

  let scroll50 = false;
  let scroll80 = false;

  window.addEventListener("scroll", () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    if (max <= 0) return;
    const depth = Math.round((doc.scrollTop / max) * 100);

    if (!scroll50 && depth >= 50) {
      scroll50 = true;
      track("scroll_50", { depth });
    }

    if (!scroll80 && depth >= 80) {
      scroll80 = true;
      track("scroll_80", { depth });
    }
  }, { passive: true });
})();
