import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import NotFound from "./components/NotFound/NotFound";

const store = createStore(reducers, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/movies-app" component={Home} />
            <Route
              path="/movies-app/details/:movieId"
              render={(props) => (
                <MovieDetails key={props.match.params.movieId} {...props} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
