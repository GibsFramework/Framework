import React from 'react';
import { TemplateGibs, GContainer, GRow, GColumn } from './Main';
const App = () => {
  return (
    <TemplateGibs>
      <GContainer>
        <GRow>
          <GColumn Desk="4">
            <p>Teste</p>
          </GColumn>
          <GColumn Desk="4">
            <p>Teste</p>
          </GColumn>
          <GColumn Desk="4">
            <p>Teste</p>
          </GColumn>
        </GRow>
      </GContainer>
    </TemplateGibs>
  );
}

export default App;
