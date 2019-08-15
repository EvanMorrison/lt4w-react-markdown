import Home from "./homepage/home";
import React, { Component } from "react";
import { Global, css } from "@emotion/core";
import { hot } from "react-hot-loader";

class App extends Component {
  render() {
    return(
      <div>
        <Global styles={css`
          body {
            padding: 0;
            margin: 0;
            font-family: Roboto, "Helvetica Neue", sans-serif;
          }
        `}/>
        <Home/>
      </div>
    );
  }
}

export default hot(module)(App);
