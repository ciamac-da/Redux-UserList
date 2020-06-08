import React from 'react';
import './App.css';
import store from "./redux/store";
import { Provider} from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <HooksCakeContainer />
    <CakeContainer />
    <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
