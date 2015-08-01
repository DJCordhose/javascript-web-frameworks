import React from 'react';

export default class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                <input ref="in"
                       onChange={this.updateModel.bind(this)}
                       value={this.state.greeting} />
                <p>{this.state.greeting}, World</p>
                <button
                    onClick={this.reset.bind(this)}>
                    Clear
                </button>
            </div>);
    }
    constructor(props) {
        super(props);
        this.state = {greeting: this.props.greeting};
    }
    reset() {
        this.setState({greeting: ""});
        this.refs.in.focus();
    }
    updateModel(event) {
        // this breaks in 0.14.beta1, but should not
        //this.setState({greeting: event.target.value});
        this.setState({greeting: event.currentTarget.value});
    }
}
