import React from 'react';

// const App = (props) => {
//     return <h1>{props.text}</h1>
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "I'm having fun with React!",
            newInput: "",
            hasLoaded: false
        }
    }

    handleInput(event) {
        this.setState({ newInput: event.target.value });
    }

    toggleLoad(event) {
        this.setState(prevState => ({
            hasLoaded: !prevState.hasLoaded
        }));
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.props.message} {this.state.text}</h1>
                <input
                    type="text"
                    placeholder={this.state.text}
                    onChange={(event) => { this.handleInput(event) }}
                />
                <div>
                    <button
                        onClick={(event) => { this.toggleLoad(event) }}
                    >Click me mang!</button>
                </div>
            </React.Fragment>
        )
    }

}

export default App;