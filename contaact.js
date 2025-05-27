const dateInput = document.getElementById('booking-date');
const timeSlotSelect = document.getElementById('time-slot');

const timeSlots = {
  weekday: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'],
  weekend: ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00']
};

dateInput.addEventListener('change', () => {
  const date = new Date(dateInput.value);
  const day = date.getDay(); 
  const slots = (day === 0 || day === 6) ? timeSlots.weekend : timeSlots.weekday;

  timeSlotSelect.innerHTML = '<option value="">Select a time</option>';

 
  slots.forEach(time => {
    const option = document.createElement('option');
    option.value = time;
    option.textContent = time;
    timeSlotSelect.appendChild(option);
  });
});


flatpickr("#booking-date", {
  minDate: "today",
  dateFormat: "Y-m-d"
});

  console.log("Selected date is", dateInput.value);
  console.log("Available slots", slots);