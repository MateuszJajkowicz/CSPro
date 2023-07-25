import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from '@clerk/clerk-react';
import { dark } from '@clerk/themes';
import Header from './components/Header';
import '@picocss/pico';
import { Suspense } from 'react';
import HomeScreen from './screens/HomeScreen';
import SmokesScreen from './screens/NadesScreen';
import Loader from './components/Loader';
import NadesPositionsOnMapScreen from './screens/NadesPositionsOnMapScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import NadesByPositionScreen from './screens/NadesByPositionScreen';

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      // navigate={(to) => navigate(to)}
      appearance={{
        baseTheme: dark,
      }}
    >
      <Header />
      <main className='container'>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route
              path='/sign-in/*'
              element={<SignIn routing='path' path='/sign-in' />}
            />
            <Route
              path='/sign-up/*'
              element={<SignUp routing='path' path='/sign-up' />}
            />
            <Route path='/nades' element={<SmokesScreen />} />
            <Route path='/nades/:map' element={<NadesPositionsOnMapScreen />} />
            <Route path='/nades/:map/:nadeType/:endPosition' element={<NadesByPositionScreen />} />
            <Route
              path='/favorites'
              element={
                <>
                  <SignedIn>
                    <FavoritesScreen />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
          </Routes>
        </Suspense>
      </main>
    </ClerkProvider>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
};

export default App;
