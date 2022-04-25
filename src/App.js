import './App.css';
import styled from '@emotion/styled';
import Search from "./Components/Search";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: #fff;
`

function App() {
  return (
    <AppWrapper>
        <Search/>
    </AppWrapper>
  );
}

export default App;
