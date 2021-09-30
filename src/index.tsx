import React from 'react';

const SayHello = ({ name }: { name: string }): React.ReactElement => (
  <div>Hey {name}, say hello to TypeScript.</div>
);

export default SayHello;
