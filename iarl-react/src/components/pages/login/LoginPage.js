import React from 'react';
import {Link} from 'react-router-dom';
import 'semantic-ui-react';
import LoginForm from './LoginForm';
import NavBar from './NavBar';

class LoginPage extends React.Component {

	submit = (data) => {
		console.log("Nome de usuario: " + data.user_name);
		console.log("Senha: " + data.password);
	}

	render () {
		return (<div style={{marginRight:"20%", marginLeft:"20%"}}>
				<NavBar/>
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}
export default LoginPage;
