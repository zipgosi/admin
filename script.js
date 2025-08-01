document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };
  if (!data.name || !data.email || !data.message) {
    alert('Please fill all fields');
    return;
  }
  console.log('Submitted:', data);
  alert('Thank you! Your message has been sent.');
  form.reset();
});
