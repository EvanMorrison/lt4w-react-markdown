import bkImage from '../../../assets/rocky-stream-1280x853.jpeg';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

const HeroSection = styled.div`
  height: calc(100vh - 50px);
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 80px 0 180px;
  background: transparent;
  justify-content: center;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    /* opacity: 0.3; */
    z-index: -1;
    background-image: url(${bkImage});
    background-repeat: no-repeat;
    background-position: center center;

    /* background-attachment: fixed; */
    background-size: cover;
    border-radius: 100% 0 0 0/ 100px 0 0 0;
    border-top: 12px solid ${props => props.theme.logoGreen};

    /* border-bottom: 12px solid ${props => props.theme.logoBlue}; */
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
`;

const Mask = styled.div`
  position: absolute;
  bottom: -115px;
  background: #FFFFFF;
  height: 100px;
  width: 100%;
  border-top: 12px solid ${props => props.theme.logoGreen};
  border-radius: 100% 0 0 0/ 100px 0 0 0;
`;

const subheadBlock = css`
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

class HomeComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Mask/>
        <HeroSection>
          <div css={[subheadBlock, css`
            top: 20vh;
            left: 0;
          `]}>
            <h2 css={css`text-align: center; font-weight: 300; color: #FFFFFF;`}>Lymphatic Drainage for Health & Wellness</h2>
          </div>
          <div css={[subheadBlock, css`
            top: 60vh;
            right: 0;
          `]}>
            <h2 css={css`text-align: center; font-weight: 300; color: #FFFFFF;`}>Lymphatic Drainage & Complete Decongestive Therapy for Lymphedema</h2>
          </div>
        </HeroSection>
      </React.Fragment>
    );
  }
};

HomeComponent.propTypes = {
  history: PropTypes.object,
};

export default withRouter(HomeComponent);
