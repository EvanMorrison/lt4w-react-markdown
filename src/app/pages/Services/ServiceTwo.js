import content from '../../../content/wellness.md';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PropTypes } from 'prop-types';
import { SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

class ServiceTwo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SectionTitle image={this.props.info.image}>{this.props.info.title}</SectionTitle>
        <SectionBody>
          <Paragraph>
            <ReactMarkdown source={content} escapeHtml={false}/>
          </Paragraph>
        </SectionBody>
      </React.Fragment>
    );
  }
};

ServiceTwo.propTypes = {
  info: PropTypes.object
};

export default ServiceTwo;
