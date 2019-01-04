import image from "../../assets/rocky-stream-1280x853.jpeg";
import React, { Component } from "react";
import { css } from "@emotion/core";
import { hot } from "react-hot-loader";

class Home extends Component {
  state = {
    enteringMain: false,
    enteringLeft: false,
    enteringRight: false
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({enteringMain: true});
    });
    setTimeout(() => {
      this.setState({enteringLeft: true});
    }, 1500);
    setTimeout(() => {
      this.setState({enteringRight: true});
    }, 2000);
  }

  render = () => {
    let top = this.state.enteringMain ? 0 : "-100vh";
    let left = this.state.enteringLeft ? 0 : "-800px";
    let right = this.state.enteringRight ? 0 : "-800px";
    let subheadBlock = css`
      position: absolute;
      width: 800px;
      height: 100px;
      background-color: #111111;
      transition: all 1.3s ease-in-out;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    return(
      <div css={css`width: 100vw; height: 100vh; background-color: #000000;`}>
        <div css={css`
          color: #AAAAAA;
          position: absolute;
          width: 100vw;
          height: 100vh;
          top: ${top};
          transition: top 1.3s ease-in-out;
          background: no-repeat center/cover url(${image});
        `}>
          <div css={[subheadBlock, css`
            top: 20vh;
            left: ${left};
          `]}>
            <h2 css={css`text-align: center; font-weight: 300;`}>Lymphatic Drainage for Detoxification, Health & Wellness</h2>
          </div>
          <div css={[subheadBlock, css`
            top: 70vh;
            right: ${right};
          `]}>
            <h2 css={css`text-align: center; font-weight: 300;`}>Lymphatic Drainage & Complete Decongestive Therapy for Lymphedema</h2>
          </div>
          <div css={css`
                display: flex;
                margin-top: 40vh;
                flex-direction: column;
                align-items: center;
                font-weight: 300;
              `}>
            <h1 css={css`
                font-weight: 300;
                background-color: #111111;
                padding: 6px 18px;
                border-radius: 3px;
              `}>
              Lymphatic Therapy For Wellness</h1>
            <div css={css`
              padding: 20px;
              background-color: #FFFFFF;
              border-radius: 2px;
              text-align: center;
              color: #333333;
            `}>
              <div css={css`font-size: 18px; font-weight: 700;`}>
                Call Now: 310-283-9382
              </div>
              <div css={css`font-size: 14px;`}>
                <hr/>
                9815 E Bell Rd, Suite 110<br/>
                Scottsdale, AZ 85260
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(Home);
