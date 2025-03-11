'use strict';

const feedbackForm = document.querySelector('#feedback-form');

feedbackForm.addEventListener('submit', async e => {
  e.preventDefault();

  const feedback = document.querySelector('#feedback-input');

  await submitFeedback(feedback.value);

  feedback.value = '';
});

const submitFeedback = async feedback => {
  const response = await fetch(`${API_URL}/feedbacks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ feedback }),
    credentials: 'include',
  });

  if (response.ok) {
    alert('Feedback submitted successfully!');
  } else {
    alert('Error submitting feedback');
  }
};
