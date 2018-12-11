import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

import teal from '@material-ui/core/colors/teal';

import Layout from '../components/layout';

import { contentStyles } from '../utils/view';

const styles = theme => ({
	paper: {
		padding: '2rem 1rem',
		[theme.breakpoints.up('sm')]: {
			padding: '4rem 2rem',
		},
	},
	logo: {
		display: 'block',
		maxWidth: '6rem',
		margin: '0 auto',
	},
	description: {
		margin: '2rem 0',
		[theme.breakpoints.up('sm')]: {
			margin: '3rem',
		},
	},
	loginInput: {
		height: 'initial',
	},
	loginLabel: {
		'&$loginFocused': {
			color: teal[500],
		},
	},
	loginFocused: {},
	loginUnderline: {
		'&:after': {
			borderBottomColor: teal[500],
		},
	},
	loginButtonFormControl: {
		margin: '2rem 0',
		[theme.breakpoints.up('sm')]: {
			margin: '4rem 0 0',
		},
	},
	loginButton: {
		margin: '0 auto',
	},
	loginButtonText: {
		color: theme.palette.common.white,
	},
	loginHelperText: {
		height: 0,
		minHeight: 0,
		marginTop: 0,
		lineHeight: '1.5rem',
		overflow: 'visible',
	},
	...contentStyles(theme)
});

class Login extends React.Component {
	state = {
		password: null,
		error: false,
		errorMessage: null,
	};

	handleLoginSubmit = () => {
		const { password } = this.state;

		if (!password) {
			this.setState({
				error: true,
				errorMessage: 'Password is required',
			});

			return;
		}
	}

	removeError = () => this.setState({error: false, errorMessage: null});

	render() {
		const { classes } = this.props;

		return (
			<Layout title="Umbrella | Login" description="Umbrella web application">
				<div className={classes.content}>
					<Paper className={classes.paper} elevation={1}>
						<img className={classes.logo} src="/static/assets/images/umbrella_logo.png" alt="Umbrella logo"/>
						
						<Typography className={classes.description} variant="h6" align="center">Log in with your password</Typography>

						<form>
							<FormControl fullWidth>
								<InputLabel
									htmlFor="login-password"
									error={this.state.error}
									classes={{
										root: classes.loginLabel,
										focused: classes.loginFocused,
									}}
								>
									Password*
								</InputLabel>
								<Input
									required 
									autoFocus
									fullWidth
									error={this.state.error}
									id="login-password"
									value={this.state.password} 
									type="password" 
									classes={{
										underline: classes.loginUnderline,
									}}
									inputProps={{
										className: classes.loginInput,
										required: true,
									}}
									onChange={(e,v) => this.setState({password: v})}
								/>
								{!!this.state.error && <FormHelperText className={classes.loginHelperText}>{this.state.errorMessage}</FormHelperText>}
							</FormControl>
							<FormControl className={classes.loginButtonFormControl} fullWidth>
								<ClickAwayListener onClickAway={this.removeError}>
									<Button 
										className={classes.loginButton}
										classes={{containedSecondary: classes.loginButtonText}}
										component="button" 
										variant="contained" 
										color="secondary"
										onClick={this.handleLoginSubmit}
									>
										Login
									</Button>
								</ClickAwayListener>
							</FormControl>
						</form>
					</Paper>
				</div>
			</Layout>
		);
	}
}

const mapStateToProps = state => ({...state.account});

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Login));