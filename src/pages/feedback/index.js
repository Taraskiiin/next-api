import { buildFeedbackPath, extractFeedback } from '@/pages/api/feedback';

function FeedbackPage(props) {
	return (
		<ul>
			{props.feedbacks.map((feedback) => (
				<li key={feedback.id}>
					<div>{feedback.email}</div>
					<div>{feedback.text}</div>
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
