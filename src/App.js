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
//             <h1>JOSH</h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  return(
    <div className="App">
      <table border="1" align="center">

          <caption>Login </caption>
        <tr>
            <td>Username</td>
            <td><input type="text" name="t1" /><br/></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="password" name="t2" /><br/></td>
        </tr>
        <tr >
            <td> <button>login</button> <a href="a.html">forgot password?</a></td>
        </tr>
      </table>
    </div>

);
}
export default App;
