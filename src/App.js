import logo from './logo.svg';
import './App.css';
import Form from'./Form'

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <div className='flex-it'>
        <Form />
    </div>
  );
}

export default App;
