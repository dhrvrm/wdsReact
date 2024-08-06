import { useRef, useState } from 'react';
import { checkEmail, checkPassword } from './validators';

const RefForm = () => {
	const email = useRef();
	const password = useRef();

	const [emailErrors, setEmailErrors] = useState([]);
	const [passwordErrors, setPasswordErrors] = useState([]);
	const [isAfterFirstAttempt, setIsAfterFirstAttempt] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsAfterFirstAttempt(true);
		const errorForEmail = checkEmail(email.current.value);
		setEmailErrors(errorForEmail);
		const errorForPassword = checkPassword(password.current.value);
		setPasswordErrors(errorForPassword);

		if (errorForEmail.length === 0 && errorForPassword.length === 0) {
			alert('Success');
		}
	};
	return (
		<>
			<h1>RefForm</h1>
			<form onSubmit={handleSubmit} className='form'>
				<div className={`form-group ${emailErrors.length > 0 ? 'error' : ''}`}>
					<label className='label' htmlFor='email'>
						Email
					</label>
					<input
						className='input'
						id='email'
						ref={email}
						type='email'
						onChange={
							isAfterFirstAttempt
								? (e) => setEmailErrors(checkEmail(e.target.value))
								: undefined
						}
					/>
					{emailErrors.length > 0 && (
						<div className='message'>{emailErrors.join(', ')}</div>
					)}
				</div>

				<div
					className={`form-group ${passwordErrors.length > 0 ? 'error' : ''}`}
				>
					<label className='label' htmlFor='password'>
						Password
					</label>
					<input
						className='input'
						id='password'
						ref={password}
						type='password'
						onChange={
							isAfterFirstAttempt
								? (e) => setPasswordErrors(checkPassword(e.target.value))
								: undefined
						}
					/>
					{passwordErrors.length > 0 && (
						<div className='message'>{passwordErrors.join(', ')}</div>
					)}
				</div>

				<button>Submit</button>
			</form>
		</>
	);
};

export default RefForm;
