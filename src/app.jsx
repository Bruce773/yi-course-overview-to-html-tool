import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputText: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  addSection(event) {
    this.setState(() => {});
  }

  onChange(event) {
    const value = event.target.value;
    this.setState(() => ({ inputText: value }));
    event.target.value = this.state[event.target.name];
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <input
            style={{
              display: 'block',
              fontSize: '20px',
              margin: 'auto',
              marginBottom: '10px',
            }}
            value={this.state.inputText}
            onChange={this.onChange}
            placeholder="Header or section"
          />
          <button
            style={{
              fontSize: '15px',
              cursor: 'pointer',
              borderRadius: '10px',
              padding: '10px',
              margin: '5px',
            }}
          >
            New Header
          </button>
          <button
            style={{
              fontSize: '15px',
              cursor: 'pointer',
              borderRadius: '10px',
              padding: '10px',
              margin: '5px',
            }}
          >
            New Section
          </button>
        </div>
        <div>{this.state.items.map((item) => item)}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
