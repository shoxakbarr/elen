(function () {
  'use strict';
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('contact-form-status');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      if (status) status.textContent = 'Please complete all fields with a valid email address.';
      return;
    }
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var subject = form.elements.subject.value.trim();
    var message = form.elements.message.value.trim();
    if (!name || !email || !subject || !message) {
      if (status) status.textContent = 'Please complete all fields.';
      return;
    }
    /* Configure CONTACT_EMAIL in this file with the real site-owner email. */
    var CONTACT_EMAIL = 'YOUR_EMAIL_HERE';
    if (CONTACT_EMAIL === 'YOUR_EMAIL_HERE') {
      if (status) status.textContent = 'The form validates correctly, but sending is not configured yet. Set CONTACT_EMAIL in js/site-fixes.js to the site owner’s email address.';
      return;
    }
    var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
    window.location.href = 'mailto:' + encodeURIComponent(CONTACT_EMAIL) +
      '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    if (status) status.textContent = 'Your email app should open with the message ready to send.';
  });
})();
