import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section.jsx';
import Header from './Header.jsx';
import HeaderHtml from './HeaderHtml.jsx';
import SectionHtml from './SectionHtml.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [''],
      inputText: '',
      firstHeader: true,
    };
    this.onChange = this.onChange.bind(this);
    this.addSection = this.addSection.bind(this);
    this.addHeader = this.addHeader.bind(this);
  }

  addSection() {
    let newState = this.state.items.concat(
      <Section section={true} text={this.state.inputText} />
    );
    // console.log(newState[1].props.text);
    this.setState(() => ({
      items: newState,
      inputText: '',
    }));
  }

  addHeader() {
    let newState = this.state.items.concat(
      <Header header={true} text={this.state.inputText} />
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
    let id = 1;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>YI Course Overview to HTML Tool</h1>
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
        <div
          style={{
            width: '60%',
            // minHeight: '100px',
            backgroundColor: 'lightGrey',
            margin: 'auto',
            borderRadius: '10px',
            padding: '5px',
            marginBottom: '15px',
            marginTop: '15px',
          }}
        >
          <h3>Layout</h3>
          {this.state.items.map((item) => item)}
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
          <div>{`
          <div class="mt-1">&nbsp;</div>
            <div>
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <h2>Course Layout</h2>
                    <div
                      aria-multiselectable="true"
                      class="panel-group"
                      id="accordion"
                      role="tablist"
                    >
          `}</div>

          <div style={{ whiteSpace: 'pre' }}>
            {this.state.items.map((item, index, array) => {
              if (item.props !== undefined) {
                let returnVal;
                if (item.props.header) {
                  returnVal = <HeaderHtml id={id++} text={item.props.text} />;
                } else if (item.props.section) {
                  returnVal = <SectionHtml text={item.props.text} />;
                }
                if (
                  array[index + 1] === undefined ||
                  array[index + 1].props.header !== undefined ||
                  index === array.length
                ) {
                  returnVal = [returnVal, `\n</ul></div></div></div>`];
                }
                return returnVal;
              }
            })}
          </div>

          <div>{`
                  </div>
                  </div>
                </div>
              </div>
            </div>
          `}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
