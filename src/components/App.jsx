import React from 'react';

// const App = (props) => {
//     return <h1>{props.text}</h1>
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "I'm having fun with React!"
        }
    }
    render() {
        return <h1>{this.props.message} {this.state.text}</h1>
    }

}

export default App;