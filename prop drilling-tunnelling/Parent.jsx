import React from 'react'

function Parent() {
  const theme = "dark";

  return (
    <Child1 theme={theme}>
      <Child2 theme={theme}>
        <Child3 theme={theme} />
      </Child2>
    </Child1>
  );
}

export default Parent
