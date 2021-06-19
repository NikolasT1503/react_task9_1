import React, { lazy, Suspense } from "react";
import { fetchData } from "./Api";
import "./App.css";
import loading from "./img/Walk.gif";

const ProfileDetails = lazy(() => import("./ProfileDetails"));
const ProfilePosts = lazy(() => import("./ProfilePosts"));

/* export const resource = fetchData(); */

const Spinner = () => {
  return (
    <img
      src={loading}
      alt="loading..."
      loop="infinite"
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};

function Profiler(props) {
  const queryParams = new URLSearchParams(props.location.search);
  const userId = queryParams.get("userId");

  const resource = fetchData(userId);

  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        {resource && (
          <p>
            <ProfileDetails resource={resource}/>
            <ProfilePosts resource={resource}/>
          </p>
        )}
      </Suspense>
    </div>
  );
}

export default Profiler;
