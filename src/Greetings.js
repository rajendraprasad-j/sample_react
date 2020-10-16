import React from 'react';


function Greetings({location}) {
  return (
    <div className="App">
     Hello {location.state.name}

    </div>
  );
}

export default Greetings;
