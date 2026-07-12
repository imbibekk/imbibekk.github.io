// Company names live inside a <summary>, so a plain click would also toggle the
// <details> card. Stop the click from reaching the summary's toggle behavior;
// the browser still follows the link natively (target="_blank" → new tab).
// Progressive enhancement — without JS the link works, the card just also toggles.
document.querySelectorAll('.company-link').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});
