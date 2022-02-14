import React, {useState} from 'react';
import '../styles/account.css';

function Account(){

	let [email, changeEmail] = useState("");
	let [username, changeUsername] = useState("");
	let [password, changePassword] = useState("");
	let [confirmPassword, changeCnfPassword] = useState("");
	
	let [Lusername, changeLUsername] = useState("");
	let [Lpassword, changeLPassword] = useState("");
	let [color, changeColor] = useState({'orange': '#fb7c21', 'red': '#d92f32', 'blue': '#0088ce', 'green': '#2f8e43'})

	function login(){

		if (Lusername.trim() == "" || Lpassword.trim() == ""){
			displayMessage('WARNING', `Don't leave fields empty`);
			return;
		}

		// Starting spinner
		let button  = document.querySelectorAll('.submit-button-section')[1].children[0];
		let spinner = button.children[0];
		button.style.padding = '0px 25px';
		spinner.style.display = 'block';


		fetch('https://u-turn-server.onrender.com/login', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				Lusername, Lpassword
			})
		})
		.then(res => {
			// Removing spinner
			button.style.padding = '10px 25px';
			spinner.style.display = 'none';

			if (res.status == 400){
				displayMessage('ERROR', res.statusText);
			} else if (res.status == 200){
				displayMessage('SUCCESS', res.statusText);
				document.cookie = `username=${username}`;
				setTimeout(()=> window.location.replace("http://localhost:3000"), 2000)
			} else {
				displayMessage('INFO', res.statusText);
			}
		})
		.catch(err => {
			// Removing spinner
			button.style.padding = '10px 25px';
			spinner.style.display = 'none';
			displayMessage('ERROR', err);
		})
	}

	function register(){

		if (email.trim() == "" || username.trim() == "" || password.trim() == "" || confirmPassword.trim() == ""){
			displayMessage('WARNING', `Don't leave fields empty`);
			return;
			
		} else if (password !== confirmPassword){
			displayMessage('ERROR', 'Password does not match with Confirm Password');
			return;
		}

		// Starting loader
		let button  = document.querySelectorAll('.submit-button-section')[0].children[0];
		let spinner = button.children[0];
		button.style.padding = '0px 25px';
		spinner.style.display = 'block';

		fetch('https://u-turn-server.onrender.com/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email, username, password, confirmPassword
            })
        })
		.then(res => {
			// Disabling spinner as request fetching is completed
			button.style.padding = '10px 25px';
			spinner.style.display = 'none';

			if (res.status == 400){
				displayMessage('ERROR', res.statusText);
			} else if (res.status == 200){
				displayMessage('SUCCESS', res.statusText);
				document.cookie = `username=${username}`;
				setTimeout(()=> window.location.replace("http://localhost:3000"), 2000)
			} else {
				displayMessage('INFO', res.statusText);
			}
		})
		.catch(err => {
			// Disabling spinner as request fetching is completed
			button.style.padding = '10px 25px';
			spinner.style.display = 'none';
			displayMessage('ERROR', err)
		});
	}

	function displayMessage(type, message){
		let messageBox = document.getElementById('message-section');
		let messageBoxIcon = document.getElementById('message-section-icon');
		let messageBoxText = document.getElementById('message-section-text').children[0];
		
		let iconElement = document.createElement("i");
		messageBoxText.innerText = message;
		if (type == 'ERROR'){	
			messageBox.style.backgroundColor = `${color.red}`;
			iconElement.className = 'fa-solid fa-circle-exclamation';
			messageBoxIcon.replaceChild(iconElement, messageBoxIcon.children[0]);
		} else if (type == 'WARNING'){
			messageBox.style.backgroundColor = `${color.orange}`;
			iconElement.className = 'fa-solid fa-triangle-exclamation';
			messageBoxIcon.replaceChild(iconElement, messageBoxIcon.children[0]);
		} else if (type == 'INFO'){
			messageBox.style.backgroundColor = `${color.blue}`;
			iconElement.className = 'fa-solid fa-circle-info';
			messageBoxIcon.replaceChild(iconElement, messageBoxIcon.children[0]);
		} else {
			messageBox.style.backgroundColor = `${color.green}`;
			iconElement.className = 'fa-solid fa-circle-check';
			messageBoxIcon.replaceChild(iconElement, messageBoxIcon.children[0]);
		}

		messageBox.style.transform = 'translateY(0%)';
		setTimeout(()=>{
			messageBox.style.transform = 'translateY(-130%)';
		}, 5000)

	}

	function animateOwl(){
		let root = document.querySelector(':root');
		root.style.setProperty('--bottom', '30%');
		root.style.setProperty('--left', '30%');
		root.style.setProperty('--right', '30%');
		// root.style.setProperty('--content', "url('../../../public/images/account/owl-login-arm.png')");
		root.style.setProperty('--background', `url('../../../public/images/account/owl-login-arm.png')`);
		console.log(getComputedStyle(root).getPropertyValue('--background'));

	}

	function toggleAccountSection(){
		let leftSection = document.getElementById('LR-left-section');
		let rightSection = document.getElementById('LR-right-section');
		let position = leftSection.getAttribute('data-position');

		if(position == 'bottom'){
			rightSection.style.transform = 'translateY(0%)';
			leftSection.style.transform = 'translateY(-100%)';
			leftSection.setAttribute('data-position', 'top');
		} else {
			rightSection.style.transform = 'translateY(-100%)';
			leftSection.style.transform = 'translateY(0%)';
			leftSection.setAttribute('data-position', 'bottom');
		}


	}

	return(
		<React.Fragment>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

			<section id="message-section">
				<div id="message-section-icon">
					<i class="fa-solid fa-circle-exclamation"></i>
				</div>
				<div id="message-section-text">
					<p></p>
				</div>
			</section>

			<section id='login-page-outer-wrapper'>
				<section id="login-page-inner-wrapper">
					
					<div id="log-reg-container">

						<div id="LR-left-section" data-position='bottom'>
							<div id="registration-container" className='acc-container'>
								<div className="LR-left-section-avatar">
									<img src="./images/account/owl-login.png" />
								</div>
								<div className="LR-left-section-inputs">
									<input type='email' className="user-reg-input" value={email} onChange={(e)=>changeEmail(e.target.value)} placeholder="Email" />
									<input type='text' className="user-reg-input" value={username} onChange={(e)=>changeUsername(e.target.value)} placeholder="Username" />
									<input type='password' onClick={animateOwl} className="user-reg-input" value={password} onChange={(e)=>changePassword(e.target.value)} placeholder="Password" />
									<input type='password' className="user-reg-input" value={confirmPassword} onChange={(e)=>changeCnfPassword(e.target.value)} placeholder="Confirm Password" />
								</div>
								<div className="submit-button-section">
									<button onClick={register}>
										<img src="./images/account/preLoader.gif" />
										Register
									</button>
									<p onClick={toggleAccountSection}> Already registered ?</p>
								</div>
							</div>
							<div id="login-container"  className='acc-container'>
								<div className="LR-left-section-avatar">
									<img src="./images/account/owl-login.png" />
								</div>
								<div className="LR-left-section-inputs">
									<input type='text' className="user-reg-input" value={Lusername} onChange={(e)=>changeLUsername(e.target.value)} placeholder="Username or Email" />
									<input type='password' onClick={animateOwl} className="user-reg-input" value={Lpassword} onChange={(e)=>changeLPassword(e.target.value)} placeholder="Password" />
								</div>
								<div className="submit-button-section">
									<button onClick={login}>
										<img src="./images/account/preloader.gif" />
										Login
									</button>
									<p onClick={toggleAccountSection}> Don't have account ?</p>
								</div>
							</div>

						</div>
						<div id="LR-right-section">

							<div id="login-illusn-container" className='illusn-container'>
								<div id="LR-right-section-heading">
									<h1> Login </h1>
								</div>
								<div id="LR-right-section-image">
									<img src="./images/account/login.jpg" />
								</div>
							</div>						

							<div id="registration-illusn-container" className='illusn-container'>
								<div id="LR-right-section-heading">
									<h1> Registration </h1>
								</div>
								<div id="LR-right-section-image">
									<img src="./images/account/register.jpg" />
								</div>
							</div>
						</div>
					</div>

				</section>
			</section>

		</React.Fragment>
	)
}

export default Account;