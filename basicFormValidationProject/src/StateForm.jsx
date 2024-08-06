import { useMemo, useState } from 'react';
import { checkEmail, checkPassword } from './validators';

const StateForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAfterFirstAttempt, setIsAfterFirstAttempt] = useState(false);

	const emailErrors = useMemo(() => {
		return isAfterFirstAttempt ? checkEmail(email) : [];
	}, [isAfterFirstAttempt, email]);
	const passwordErrors = useMemo(() => {
		return isAfterFirstAttempt ? checkPassword(password) : [];
	}, [isAfterFirstAttempt, password]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsAfterFirstAttempt(true);
		const errorForEmail = checkEmail(email);
		const errorForPassword = checkPassword(password);

		if (errorForEmail.length === 0 && errorForPassword.length === 0) {
			alert('Success');
		}
	};
	return (
		<>
			<h1>StateForm</h1>
			<form onSubmit={handleSubmit} className='form'>
				<div className={`form-group ${emailErrors.length > 0 ? 'error' : ''}`}>
					<label className='label' htmlFor='email'>
						Email
					</label>
					<input
						className='input'
						id='email'
						value={email}
						type='email'
						onChange={(e) => setEmail(e.target.value)}
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
						value={password}
						type='password'
						onChange={(e) => setPassword(e.target.value)}
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

export default StateForm;
