import ServiceOne from './ServiceOne';
import ServiceTwo from './ServiceTwo';
import ServiceThree from './ServiceThree';
import React from 'react';
import ServicesComponent from './ServicesComponent';
import styled from '@emotion/styled';
import { Route, NavLink } from 'react-router-dom';
import { Section } from '../../AppStyles';
import appState from '../../../content/appState';

const StyledList = styled.ul`
  list-style: none;
  margin-top: 40px;

  li {
    display: inline-block;
    margin-right: 5px;
    font-size: 18px;
    &:first-child { color: ${props => props.theme.logoGreen}; }
    &:nth-child(2) { color: ${props => props.theme.logoOrange}; }
    &:last-child { color: ${props => props.theme.logoBlue}; }
    &.active { text-decoration: underline; }

    @media (max-width: 540px) {
      display: block;
    }
  }
`;

class ServicesContainer extends React.Component {
  render() {
    const props = appState.homePage.heroPanels;
    return (
      <Section topcolor="logoBlue">
        <nav>
          <StyledList>
            <li><NavLink to={`/services/${props[0].routeName}`}>{props[0].title} | </NavLink></li>
            <li><NavLink to={`/services/${props[1].routeName}`}>{props[1].title} | </NavLink></li>
            <li><NavLink to={`/services/${props[2].routeName}`}>{props[2].title}</NavLink></li>
          </StyledList>
        </nav>
        <Route exact path="/services" component={ServicesComponent} />
        <Route path={`/services/${props[0].routeName}`} render={() => <ServiceOne info={props[0]} />} />
        <Route path={`/services/${props[1].routeName}`} render={() => <ServiceTwo info={props[1]} />} />
        <Route path={`/services/${props[2].routeName}`} render={() => <ServiceThree info={props[2]} />} />
      </Section>
    );
  }
}

export default ServicesContainer;
