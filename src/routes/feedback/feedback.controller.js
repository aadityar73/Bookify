import Feedback from '../../models/feedback.model.js';

const postFeedback = async (req, res) => {
  const { name, email } = req.user;
  const feedbackMsg = req.body.feedback;

  const feedback = new Feedback({ name, email, feedback: feedbackMsg });

  try {
    await feedback.save();
    res.status(201).send(feedback);
  } catch (err) {
    res.status(400).send({ error: 'Unable to submit feedback' });
  }
};

export { postFeedback };
