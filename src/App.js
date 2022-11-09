import './App.css'
import Main from "./component/Main";
import { AllContextProvider } from './context/all-context';
import SideBar from './component/CustomComponent/SideBar';
function App() {

  return (
    <AllContextProvider>
      <div className="App m-0">
        <div id="page-wrap">
          <Main />
        </div>
      </div>
    </AllContextProvider>
  );
}

export default App;
