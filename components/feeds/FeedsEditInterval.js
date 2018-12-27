import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import FeedsEditIconModalContent from './FeedsEditIconModalContent';
import FeedsEditIconForm from './FeedsEditIconForm';

const styles = theme => ({
	iconFontSize: {
		fontSize: '4rem',
	},
});

class FeedsEditInterval extends React.Component {
	state = {
		interval: null,
		error: null,
		errorMessage: null,
	};

	handleSubmit = () => {
		const { interval } = this.state;

		// TODO: Handle submit here, then close on callback

		this.props.closeModal();
	}

	handleCancel = () => {
		this.handleRemoveError();
		this.setState({interval: null});
		this.props.closeModal();
	}

	handleRemoveError = () => this.setState({error: null, errorMessage: null})

	render() {
		const { theme, classes, closeModal, confirm } = this.props;
		const { interval, error, errorMessage } = this.state;

		return (
			<FeedsEditIconModalContent 
				icon={<AccessAlarmIcon classes={{fontSizeLarge: classes.iconFontSize}} fontSize="large" color="primary" />} 
				content={
					<FeedsEditIconForm 
						id="feed-interval-form"
						label="Enter interval"
						value={interval}
						error={error}
						errorMessage={errorMessage}
						onChange={(e,v) => this.setState({interval: v})}
						onSubmit={this.handleSubmit}
						removeError={this.handleRemoveError}
						cancel={this.handleCancel}
					/>
				} 
			/>
		);
	}
}

export default withStyles(styles, {withTheme: true})(FeedsEditInterval);