import React from 'react';
import {updateGreeting} from './actions';
import { connect } from 'react-redux';

class HelloMessage extends React.Component {
    render() {
        const {greeting, updateGreeting} = this.props;
        return (
            <div>
                <input ref="in"
                       onChange={event => updateGreeting(event.target.value)}
                       value={greeting} />
                <p>{greeting}, World</p>
                <button
                    onClick={() => {
                        updateGreeting('');
                        this.refs.in.focus();
                    }}>
                    Clear
                </button>
            </div>);
    }
}

export default connect(
    state => ({
        greeting: state.greeting
    }),
    dispatch => ({
        updateGreeting: (...args) => dispatch(updateGreeting(...args))
    })
)(HelloMessage);
