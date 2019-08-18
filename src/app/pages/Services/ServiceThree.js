import content from '../../../content/surgeries.md';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PropTypes } from 'prop-types';
import { SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

const ServiceThree = ({info}) => {
  return (
    <React.Fragment>
      <SectionTitle image={info.image}>{info.title}</SectionTitle>
      <SectionBody>
        <Paragraph>
          <ReactMarkdown source={content} escapeHtml={false}/>
        </Paragraph>
      </SectionBody>
    </React.Fragment>
  );
};

ServiceThree.propTypes = {
  info: PropTypes.object
};

export default ServiceThree;
