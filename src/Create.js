import React, { useState } from "react";

const Create = () => {
	const [firstName, setFirstName] = useState("");
	const [familyName, setFamilyName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [email, setEmail] = useState("");
	const [bio, setBio] = useState("");

	const handleSubmit = () => {
		
		alert("You have Successfully Submitted your Detail.");	
    	
		const body = {
			firstName: firstName,
			lastName: familyName,
			email,
			dateOfBirth: birthDate,
			bio,
		};
	
		setFirstName("");
		setFamilyName("");
		setBirthDate("");
		setEmail("");
		setBio("");

		window.location.reload()
		
        console.log(body);
		fetch("http://localhost:3200/user", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
			body: JSON.stringify(body),
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
				<div id="formfield">
					<label>
						First Name <br />
						<input
							type="text" required
							name="firstname"
                        placeholder="Enter Your First Name"
                        value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</label>
					<br />

					<label>
						Last Name <br />
						<input
							type="text"
							name="familyname"
                        placeholder="Enter Your Last name"
						
                        value={familyName}
							onChange={(e) => setFamilyName(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Birth Date
						<br />
						<input
							type="text"
                        name="birthdate"
                        value={birthDate}
							onChange={(e) => setBirthDate(e.target.value)}
							placeholder="YYYY/MM/DD"
						/>
					</label>
					<br />

					<label>
						Email
						<br />
						<input
							type="text"
							name="email"
                        placeholder="Enter Your Email"
                        value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Bio
						<br />
                    	<textarea
                        value={bio}
							placeholder="Write Something Here.."
							onChange={(e) => setBio(e.target.value)}
						/>
					</label>
					<br />

					<button id="submit_button" onClick={handleSubmit}>Submit</button>
				</div>
		</div>
	);
};

export default Create;
