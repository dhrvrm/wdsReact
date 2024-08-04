export default function User({ name, username, email, address }) {
	const { street, suite, city, zipcode } = address;
	return (
		<li>
			<p>
				{name} - @{username} - {email}
			</p>
			<p>
				{street}, {suite}, {city} - {zipcode}
			</p>
		</li>
	);
}
