import React from 'react';
import 'whatwg-fetch';

export default class HelloMessage extends React.Component {
    componentDidMount() {
        $(".k-primary").kendoButton();
        var url = '../data/doc.xml';
        fetch(url)
            .then((response) => {
                return response.text();
            }).then((parsed) => {
                console.log(parsed);
                var parser = new DOMParser();
                var xml = parser.parseFromString(parsed, "text/xml");
                var frames = xml.getElementsByTagName('Frame');
                console.log(frames);
            })
            .catch((ex) => {
                console.error('parsing failed', ex);
            });
    }

    render() {
        return (
            <div>
                <div>
                    <input ref="in"
                           onChange={this.updateModel.bind(this)}
                           value={this.state.greeting}/>
                    <p>{this.state.greeting}, World</p>
                    <button className="k-primary"
                            onClick={this.reset.bind(this)}>
                        Clear
                    </button>
                </div>
                <div>
                    <greeter-element greeting="Hello"/>
                </div>
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
