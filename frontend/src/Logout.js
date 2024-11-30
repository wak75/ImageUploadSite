import React from 'react';

function Logout() {

	localStorage.removeItem('token');
	return (
		<div>

			<h1>Thank you For Visitng</h1>
			<h1><a href="/">Back to Gallery</a></h1>
			
		</div>
	);
}

export default Logout;