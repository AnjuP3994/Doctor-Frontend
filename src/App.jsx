
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Doctor from './Components/Doctor/Doctor';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ViewDoctor from './Components/ViewDoctor/ViewDoctor';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
          {/* localhost:3001 - Doctor component */}
          <Route path='/' element={ <Doctor/> }/>
          {/* view particular doctor details localhost:3000/view/3 */}
          <Route path='/view/:id' element={ <ViewDoctor/> }/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
