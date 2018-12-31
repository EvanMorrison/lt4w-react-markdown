import image from "../../assets/rocky-stream-1280x853.jpeg";
import React, { Component } from "react";
import { css } from "@emotion/core";

export default class Home extends Component {
  state = {
    entering: false
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({entering: true});
    });
  }

  render = () => {
    let top = this.state.entering ? 0 : "-100vh";
    return(
      <div css={css`width: 100vw; height: 100vh; background-color: #000000;`}>
        <div css={css`
          position: absolute;
          width: 100vw;
          height: 100vh;
          top: ${top};
          transition: top 1.5s ease-in-out;
          background: no-repeat center/cover url(${image});
        `}>
          <div css={css`
                display: flex;
                margin-top: 33vh;
                flex-direction: column;
                align-items: center;
                font-family: Roboto, "Helvetica Neue", sans-serif;
                font-weight: 300;
              `}>
            <h1 css={css`
                color: #11CCCC;
                font-weight: 300;
                background-color: #111111;
                padding: 6px 18px;
                border-radius: 3px;
              `}>
              Lymphatic Therapy For Wellness</h1>
          </div>
        </div>
      </div>
    );
  }
}
