import * as React from 'react';
import Grandchild from './Grandchild';

const Child: React.SFC = ({ children }) => (
  <div>
    <Grandchild />
  </div>
);

export default Child;
