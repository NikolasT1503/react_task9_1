import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { fetchData } from "./Api";


/* const ProfileDetails = lazy(() => import("./ProfileDetails"));
const ProfilePosts = lazy(() => import("./ProfilePosts")); */

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Location = lazy(() => import("./components/Location"));
const Profiler = lazy(() => import("./Profiler"));
const NotFound = () => <h1>404 Страница не найдена</h1>;

export const resource = fetchData();

const Spinner = () => {
  return (
    <h4>Loading...</h4>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home} exact/>
            <Route path="/about/:id(\d{1})?/:name?" component={About} exact/>            
            <Route path="/about/:id(\d{1})?/:name?/:type-:weight?" component={About} exact/>            
            <Route path="/location" component={Location} />
            <Route path="/about/location" component={Location} />
            <Route path="/posts" component={Profiler} />
            <Route path="/notFound" component={NotFound}/>
            <Redirect from="/404/" to="/notFound" strict />
            <Route component={()=><h1>что то пошло не так</h1>}/>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
