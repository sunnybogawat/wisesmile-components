/**
 * About Component
 *
 * presentational component lightweight functions
 * purpose: How things look (markup, styles)
 * aware of flux: No
 * Read data through props
 * Inline style here provided only as an example of the possibilities
 */

import React from 'react';

const About = ({ name, version }) => (
 <div className="about">
   <h2 className="title">{name}</h2>
   <h3>{version}</h3>
 </div>
);

About.propTypes = {
 name: React.PropTypes.string.isRequired,
 version: React.PropTypes.string.isRequired,
};

export default About;
