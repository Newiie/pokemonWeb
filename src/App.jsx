import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from './pages/StartPage.jsx';
import PokemonProvider from './hooks/PokemonProvider.jsx';
import Game from './pages/Game.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "game",
    element: <Game />
  }
]);


function App() {
  return (
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  )
}

export default App
