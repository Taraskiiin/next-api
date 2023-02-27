import { useRef, useState } from 'react';

export default function Home() {
	const [data, setData] = useState([]);
	const emailRef = useRef();
	const feedbackRef = useRef();

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredEmail = emailRef?.current?.value;
		const enteredFeedback = feedbackRef?.current?.value;

		const reqBody = {
			email: enteredEmail,
			text: enteredFeedback,
		};

		fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify(reqBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	}

	function handlerLoadData() {
		fetch('/api/feedback')
			.then((response) => response.json())
			.then((data) => setData(data.data));
	}

	return (
		<>
			<h1>The Home Page</h1>
			<form onSubmit={submitFormHandler}>
				<div>
					<label htmlFor='email'>Your email</label>
					<input type='email' id='email' ref={emailRef} />
				</div>
				<div>
					<label htmlFor='feedback'>Your feedback</label>
					<textarea id='feedback' rows='5' ref={feedbackRef} />
				</div>
				<button>Send feedback</button>
			</form>
			<hr />
			<button onClick={handlerLoadData}>Load Feeadback</button>
			<ul>
				{data &&
					data.map((feedback) => (
						<li key={feedback.id}>
							<div>{feedback.email}</div>
							<div>{feedback.text}</div>
						</li>
					))}
			</ul>
		</>
	);
}
