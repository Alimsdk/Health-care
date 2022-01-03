import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './Contexts/AuthProvider';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
        
        <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='service/:id' element={
              <PrivateRoute>
                <ServiceDetails/>
              </PrivateRoute>
            }/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
          
          </BrowserRouter>
        </AuthProvider>

    </div>
  );
}

export default App;
