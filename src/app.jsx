import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section.jsx';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [''],
      inputText: '',
    };
    this.onChange = this.onChange.bind(this);
    this.addSection = this.addSection.bind(this);
    this.addHeader = this.addHeader.bind(this);
  }

  addSection() {
    let newState = this.state.items.concat(
      <Section text={this.state.inputText} />
    );
    console.log(newState);
    this.setState(() => ({
      items: newState,
      inputText: '',
    }));
  }

  addHeader() {
    let newState = this.state.items.concat(
      <Header text={this.state.inputText} />
    );
    this.setState(() => ({
      items: newState,
      inputText: '',
    }));
  }

  onChange(event) {
    const value = event.target.value;
    this.setState(() => ({ inputText: value }));
    event.target.value = this.state.inputText;
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
            onClick={this.addHeader}
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
            onClick={this.addSection}
          >
            New Section
          </button>
        </div>
        <div>
          {this.state.items.map((item) => (
            <Section text={item} />
          ))}
        </div>
        <div
          style={{
            width: '60%',
            minHeight: '130px',
            backgroundColor: 'lightGrey',
            margin: 'auto',
            borderRadius: '10px',
            padding: '5px',
          }}
        >
          <h3>HTML</h3>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
