import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const Logout = props => {
    useEffect(() => {
        this.props.onLogout(this.props.history);
    }, []);

    return <Redirect to="/" />;
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);