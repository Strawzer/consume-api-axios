import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PatientsList from './Patients'




const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Patients List</h2>
      </header>
      <div className="Patients-container">
        <PatientsList />
      </div>
    </div>
  );
};


export default App;
ReactDOM.render(<App />, document.querySelector('#root'));

