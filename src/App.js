import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Footer from "./components/Footer/Footer";

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Movies />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
