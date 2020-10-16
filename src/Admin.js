import React from 'react';


function Admin({location}) {
  return (
    <div className="App">
     Hello {location.state.name}

    </div>
  );
}

export default Admin;
