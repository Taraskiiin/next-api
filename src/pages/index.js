import { useRef } from 'react';

export default function Home() {
	const emailRef = useRef();
	const feedbackRef = useRef();

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredFeedback = feedbackRef.current.value;
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
		</>
	);
}
