// src/components/Newsletter.js
import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react';

const Newsletter = () => (
  <Segment textAlign="center">
    <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
    <Input action={{ color: 'blue', content: 'Subscribe' }} placeholder="Enter your email" />
  </Segment>
);

export default Newsletter;
