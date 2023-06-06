import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from 'react-router-dom';
import Header from './components/Header';
import '@picocss/pico';
import { Suspense } from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SmokesScreen from './screens/NadesScreen';
import Loader from './components/Loader';
import SmokesMapScreen from './screens/NadesMapScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='container'>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/nades' element={<SmokesScreen />} />
            <Route path='/nades/:map' element={<SmokesMapScreen />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
