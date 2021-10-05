import "./App.css";
import { Home } from "./pages";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

function App(): JSX.Element {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
