import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Defs = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<svg id="svg-holder" 
xmlns="http://www.w3.org/2000/svg">

<defs>
<pattern id="img1" patternUnits="objectBoundingBox" width="100" height="100">
<image xlink:href="http://localhost:3000/handsomeboy.jpg" />
</pattern>
</defs>

</svg>
`
    }}
  />
);

export default Defs;
