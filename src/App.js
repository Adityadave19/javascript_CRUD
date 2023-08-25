import logo from './logo.svg';
import './App.css';

function App() {



  return (
    <div className="App">
      <h1>React JS</h1>

      <label for="Fname">FirstName</label>
      <input type='text' id='name' name='name' placeholder='first name' /> <br /><br />

      <label for="lname">lastname</label>
      <input type='text' id='name' name='name' placeholder='last name' /> <br /><br />

      <label for="age">age</label>
      <input type='number' id='age' name='age' placeholder='age' min={12} max={30} />  <br /><br />

      <label for="gender">gender</label>
      <input type='radio' name='gender' id='male' />male
      <input type='radio' name='gender' id='female' />female <br /><br />

      <label for="hobby">hobby</label>
      <input type='checkbox' name='hobby' id='cricket' />cricket
      <input type='checkbox' name='hobby' id='tennis' />tennis
      <input type='checkbox' name='hobby' id='footbaal' />football <br /><br />

      <label for="password">password</label>
      <input type='text' name='password' id='password' placeholder='password' /> <br /><br />

      <label for="email">email</label>
      <input type='text' name='email' id='email' placeholder='email' /> <br /><br />

      <label for="tel">tel</label>
      <input type='number' name='tel' id='tel' placeholder='tel' /> <br /><br />

      <label for="date">birthdate</label>
      <input type='date' name='date' id='date' /> <br /> <br />

      <label for="week">week</label>
      <input type='week' name='week' id='week' /><br /><br />

      <label for="color">color</label>
      <input type='color' name='color' id='color' /> <br /> <br />

      <input type="submit" value='submit' />
    </div >
  );
}

export default App;
