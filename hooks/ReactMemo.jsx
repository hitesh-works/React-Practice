// What is React.memo and how it’s different from useMemo?

// React.memo is a higher-order component that allows you to memoize a functional component. The component will re-render only if its props have changed. This can help you avoid unnecessary renderings, improving the performance of your component.

import React from 'react';

const MyComponent = React.memo(({ data }) => {
  return <div>{data.join(', ')}</div>;
});

export default MyComponent;

// useMemo is a hook that allows you to memoize a single value in your component, while React.memo is a higher-order component that allows you to memoize an entire functional component.