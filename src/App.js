import './App.css';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <h1>TDD a login form</h1>
      <LoginForm submit={values => alert(JSON.stringify(values))} />
    </div>
  );
}

export default App;
