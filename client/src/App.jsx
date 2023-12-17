import Navbar from './components/navbar'
import Footer from './components/footer'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Movie from './pages/Movie'
import Detail from './pages/Detail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/movie/:name",
    element: <Movie/>,
  },
  {
    path: "/detail/:id",
    element: <Detail/>,
  }
]);


function App() {
  
  return (
    <>
      <Navbar/>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App
