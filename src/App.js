import React from "react";
import {Link} from 'react-router-dom';
const App = () => {
  return (
    <div>
     Custom Component's List
     <ul>
       <li><Link to='/modal'>Modal</Link></li>
       <li><Link to='/drawer'>Drawer</Link></li>
      </ul>
    </div>
  );
};

export default App;
