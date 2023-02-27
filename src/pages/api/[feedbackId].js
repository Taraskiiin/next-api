import { buildFeedbackPath, extractFeedback } from './feedback';

function handler(req, res) {
	const feedbackId = req.query.feedbackId;
	const filePath = buildFeedbackPath();
	const data = extractFeedback(filePath);

	const feedbackById = data.find((el) => el.id === feedbackId);

	res.status(200).json({ feedbackById });
}

export default handler;
