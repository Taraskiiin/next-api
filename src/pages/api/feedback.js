function handler(req, res) {
	if (req.method === 'ROST') {
		const email = req.body.email;
		const feedbackText = req.body.text;

		const newFeedback = {
			id: new Date().toString(),
			email: email,
			text: feedbackText,
		};
	}
	res.status(200).json({
		message: 'Hello world',
	});
}

export default handler;
