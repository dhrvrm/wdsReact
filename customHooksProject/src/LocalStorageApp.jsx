import useLocalStorage from './hooks/useLocalStorage';

const LocalStorageApp = () => {
	const [firstName, setFirstName] = useLocalStorage('FIRST_NAME', '');
	const [lastName, setLastName] = useLocalStorage('LAST_NAME', () => {
		return 'default';
	});
	const [hobbies, setHobbies] = useLocalStorage('HOBBIES', [
		'Programming',
		'Writing',
		'Music',
	]);

	return (
		<div>
			<h1>LocalStorageApp</h1>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					gap: '0.5rem',
					marginBottom: '1rem',
				}}
			>
				<label>First Name</label>
				<input
					type='text'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					gap: '0.5rem',
					marginBottom: '1rem',
				}}
			>
				<label>Last Name</label>
				<input
					type='text'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					gap: '0.5rem',
					marginBottom: '1rem',
				}}
			>
				<p>{hobbies?.join(',')}</p>
				<button
					onClick={() => {
						setHobbies((currentHobbies) => [...currentHobbies, 'New Hobbie']);
					}}
				>
					Add Hobbie
				</button>
			</div>
		</div>
	);
};

export default LocalStorageApp;
