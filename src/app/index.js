import React, { Component } from 'react';
import styled from 'styled-components';

const themes = ['royal', 'solidVault', 'fireWatch', 'servQuick', 'sunrise', 'mirage', 'stellar'];

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: transparent;
`;
class App extends Component {
  state = {
    themeIndex: 0,
  }

  componentWillMount() {
    setInterval(() => {
      const { themeIndex } = this.state;
      this.setState({
        themeIndex: themeIndex + 1,
      });
    }, 2000);
  }

  render() {
    const { themeIndex } = this.state;
    return <section id="theme-background" className={themes[themeIndex % 6]}>
      <Wrapper>
        <Title>
          test asdsa
        </Title>
      </Wrapper>
    </section>;
  }
}

export default App;
