import { useSate } from 'react';
import { buildFeedbackPath, extractFeedback } from '@/pages/api/feedback';

function FeedbackPage(props) {
	const [feedbackData, setFeedbackData] = useSate(null);
	function loadFeedbackHandler(id) {
		fetch('/api/' + id).then((res) =>
			res.json().then((data) => {
				setFeedbackData(data.feedbackById);
			})
		);
	}
	return (
		<ul>
			{props.feedbacks.map((feedback) => (
				<li key={feedback.id}>
					<div>{feedback.email}</div>
					<div>{feedback.text}</div>
					<button onClick={loadFeedbackHandler.bind(null, item.id)}>
						Show Details
					</button>
				</li>
			))}
		</ul>
	);
}

export async function getStaticProps() {
	const path = buildFeedbackPath();
	const feedbacks = extractFeedback(path);

	return {
		props: { feedbacks },
	};
}
export default FeedbackPage;
