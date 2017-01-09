import React, {Component} from 'react';
import './components/base'
// import {Circles} from './components/circles'
import * as Force from './components/conceptCloud'
import './App.css';
import * as t from './transformations/index'
class App extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {}

    render() {
        let inner = function(e, i, cx, cy) {
            return {
                style: {
                    fill: "rgb(74, 105, 173)"
                },
                r: 40,
                cx: cx || 90 * (i + 1),
                cy: cy || 105 * (i + 1)
            }
        }
        return (
            <div className="App">
                <Force.ForceLayout/>
            </div>
        );
    }
}

export default App;
// <Circles inner={inner} morph={t.Morph} count={5}/>
