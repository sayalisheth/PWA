import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Welcome!!!
//         </a>
//       </header>
//     </div>
//   );
// }


function App()
{
  return(
      <div className="App">
        <p>User Id</p>
        <input type="text"/>
        <p>Password</p>
        <input type="password"/>
        <br/><br/>
        <a className="Link" href="http://youtube.com">Sign in</a>
         </div>
       );
}




export default App;
