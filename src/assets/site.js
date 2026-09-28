(function () {
  var data = JSON.parse(document.getElementById('site-data').textContent);
  var s = data.strings;

  // Monday = 0 ... Sunday = 6, to match the hours table.
  function dayIndex(date) { return (date.getDay() + 6) % 7; }
  function toMinutes(hhmm) { var p = hhmm.split(':'); return +p[0] * 60 + +p[1]; }
  function ranges(day) {
    return (data.hours[day] || []).map(function (r) {
      var p = r.split('-'); return [toMinutes(p[0]), toMinutes(p[1])];
    });
  }

  // "Open now" badge and today's row in the hours table
  var now = new Date();
  var today = dayIndex(now);
  var mins = now.getHours() * 60 + now.getMinutes();
  var isOpen = ranges(today).some(function (r) { return mins >= r[0] && mins < r[1]; });
  document.querySelectorAll('[data-status]').forEach(function (el) {
    el.classList.toggle('open', isOpen);
    el.querySelector('span:last-child').textContent = isOpen ? s.open_now : s.closed_now;
    el.hidden = false;
  });
  var row = document.querySelector('.hours tr[data-day="' + today + '"]');
  if (row) row.classList.add('today');

  // Booking request form: opens WhatsApp (or email) with a ready-made message
  var form = document.getElementById('booking-form');
  if (!form) return;
  var dateInput = form.elements.date;
  var timeSelect = form.elements.time;

  function iso(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  dateInput.min = iso(now);

  function slotsFor(value) {
    var parts = value.split('-');
    var chosen = new Date(+parts[0], +parts[1] - 1, +parts[2]);
    var isToday = value === iso(now);
    var slots = [];
    ranges(dayIndex(chosen)).forEach(function (r) {
      for (var m = r[0]; m + 30 <= r[1]; m += 30) {
        if (isToday && m <= mins) continue;
        slots.push(String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'));
      }
    });
    return slots;
  }

  function fillTimes() {
    var slots = dateInput.value ? slotsFor(dateInput.value) : [];
    timeSelect.innerHTML = '';
    if (!slots.length) {
      timeSelect.add(new Option(s.closed, ''));
      timeSelect.disabled = true;
      return;
    }
    timeSelect.disabled = false;
    slots.forEach(function (t) { timeSelect.add(new Option(t, t)); });
  }

  // Start on the first day that still has free slots
  for (var i = 0; i < 14; i++) {
    var day = iso(new Date(now.getFullYear(), now.getMonth(), now.getDate() + i));
    if (slotsFor(day).length) { dateInput.value = day; break; }
  }

  dateInput.addEventListener('change', fillTimes);
  fillTimes();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!timeSelect.value) { dateInput.focus(); return; }
    var parts = dateInput.value.split('-');
    var niceDate = new Date(+parts[0], +parts[1] - 1, +parts[2])
      .toLocaleDateString(data.locale, { weekday: 'long', day: 'numeric', month: 'long' });
    var lines = [
      s.msg_intro,
      '',
      s.msg_service + ': ' + form.elements.service.value,
      s.msg_date + ': ' + niceDate,
      s.msg_time + ': ' + timeSelect.value,
      s.msg_name + ': ' + form.elements.name.value.trim()
    ];
    var note = form.elements.note.value.trim();
    if (note) lines.push(s.msg_note + ': ' + note);
    var text = lines.join('\n');

    if (data.whatsapp) {
      window.open('https://wa.me/' + data.whatsapp + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    } else {
      location.href = 'mailto:' + data.email + '?subject=' + encodeURIComponent(s.booking_title) + '&body=' + encodeURIComponent(text);
    }
  });
})();
