import React, { Component } from 'react';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            total: 0
        }
    }

    render() {
        let { count } = this.state;
        return (
            <div id='container'>
                <h1>Calculator</h1>
                <br><br>
                


            </div>
        );
    }
        
}



export default App;
