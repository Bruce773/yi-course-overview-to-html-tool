import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Header, Section } from './LayoutComponents';
import { HeaderHtml, SectionHtml } from './HtmlComponents';
import {
  LayoutContainer,
  LayoutWrapper,
  NewButton,
  PageWrapper,
  MainHeader,
  Input,
  HtmlContainer,
  HtmlWrapper,
} from './elements.jsx';

const App = () => {
  const [items, setItems] = useState(['']);
  const [inputText, setInputText] = useState('');
  const firstHeader = true;
  let id = 1;

  const addSection = () => {
    let newState = items.concat(<Section section={true} text={inputText} />);
    setItems(newState);
    setInputText('');
  };

  const addHeader = () => {
    let newState = items.concat(<Header header={true} text={inputText} />);
    setItems(newState);
    setInputText('');
  };

  const onChange = (event) => {
    const value = event.target.value;
    setInputText(value);
    event.target.value = inputText;
  };

  return (
    <PageWrapper>
      <MainHeader>YI Course Overview to HTML Tool</MainHeader>
      <Input
        value={inputText}
        onChange={onChange}
        placeholder="Header or section"
      />
      <NewButton onClick={addHeader}>New Header</NewButton>
      <NewButton onClick={addSection}>New Section</NewButton>
      <LayoutContainer>
        <h3>Layout</h3>
        <LayoutWrapper>{items.map((item) => item)}</LayoutWrapper>
      </LayoutContainer>
      <HtmlContainer>
        <h3>HTML</h3>
        <HtmlWrapper>
          <code>
            <div>{`<div class="mt-1">&nbsp;</div><div><div class="container"><div class="row"><div class="col-12"><h2>Course Layout</h2><div aria-multiselectable="true" class="panel-group" id="accordion" role="tablist">`}</div>

            <div>
              {items.map((item, index, array) => {
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
                    returnVal = [returnVal, `</ul></div></div></div>`];
                  }
                  return returnVal;
                }
              })}
            </div>
            <div>{`</div></div></div></div></div>`}</div>
          </code>
        </HtmlWrapper>
      </HtmlContainer>
    </PageWrapper>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
