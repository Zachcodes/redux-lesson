import React from 'react';

export default function NumberUpdater(props) {
  let { increment, decrement } = props;
  return (
    <div>
      <button onClick={increment}>Increment Number</button>
      <button onClick={decrement}>Decrement Number</button>
    </div>
  );
}
