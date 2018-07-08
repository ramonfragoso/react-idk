import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'semantic-ui-react';
import InlineError from './InlineError';

class LoginForm extends React.Component {
	state = {
		data: {
			user_name: '',
			password: ''
		},
		loading: false,
		errors: {}
	}

	onChange = e => {
		e.preventDefault();
		this.setState(
			{ data: {...this.state.data, [e.target.name]: e.target.value}
		});
	}

	onSubmit = () => {
		const errors = this.validate(this.state.data);
		this.setState({errors});
		if(Object.keys(errors).length === 0) {
			this.props.submit(this.state.data);
		}
		this.setState({state:{user_name:"", password:""}});
	}

	validate = (data) => {
		const errors = {};
		if(!data.user_name) errors.user_name = "Usuario em branco";
		if(!data.password) errors.password = "Senha em Branco";
		return errors;
	}

	render () {
		const {data, errors} = this.state;
		return (
			<div className="container">
				<div style={{textAlign:"center"}}>
					<img style={{width:"70%", marginTop:"15%"}}src={require('../../../images/iarl.png')}/>
				</div>
				<div className="ui segment" >
					<h1>Login</h1>
					<Form onSubmit={this.onSubmit}>
						<Form.Field errors={errors.user_name}>
							<label htmlFor="user_name">Usuario</label>
							<input
								type="text"
								name="user_name"
								id="user_name"
								value={data.user_name}
								onChange={this.onChange}
								placeholder="Digite seu nome de usuario dos LCCs"></input>
						</Form.Field>
						{errors.user_name && <InlineError text={errors.user_name}/>}
						<Form.Field errors={errors.password}>
							<label htmlFor="password">Senha</label>
							<input
								type="password"
								name="password"
								id="password"
								value={data.password}
								onChange={this.onChange}
								placeholder="Sua senha dos LCCs"></input>
						</Form.Field>
						{errors.password && <InlineError text={errors.password}/>}
						<Button color="blue">Login</Button>
					</Form>
				</div>
			</div>
		)
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
}


export default LoginForm;
