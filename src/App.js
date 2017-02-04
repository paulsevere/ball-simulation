import React, {Component} from 'react';
import Theme from './components/controls/theme'
import * as Force from './components/conceptCloud'
import './App.css';
import * as t from './transformations/index'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
      <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
        <div className="App">
          <Force.ForceLayout/>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
// <Circles inner={inner} morph={t.Morph} count={5}/>
