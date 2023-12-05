import React from 'react';
import GasolineHistory from '../components/charts/GasolineHistory'

const Gasoline = () => {
    return (
      <main className="gasoline-page">
        <h1>Gasoline Information</h1>
        <GasolineHistory />
        {/* You can add more forms or components as needed */}
      </main>
    );
  };
  
  export default Gasoline;