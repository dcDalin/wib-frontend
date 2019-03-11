import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  ${({ theme }) => theme.medium`
      background: red;
   `}
`;
class App extends Component {
  render() {
    return (
      <Box>
        <h1>hello</h1>
      </Box>
    );
  }
}

export default App;
