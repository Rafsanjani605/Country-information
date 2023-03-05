
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cities from './Cities/Cities';
import Countries from './Components/Elements/Countries/Countries';
import Languages from './Components/Elements/Languages/Languages';
import Maplink from './Components/Elements/maplinks/Maplink';
import Maps from './Components/Elements/Maps/Maps';
import Home from './Components/Home/Home';
import Main from './Components/Loader/Main';


function App() {

const router = createBrowserRouter([
  {
      path: '/',

      element: <Main></Main>,
      children : [
        {
          path: '/',
          loader: async() =>{
            return fetch('https://restcountries.com/v3.1/all')
          },
          element: <Home></Home>
        },
        {
          path:'/Countries',
          loader: async()=>{
          return fetch('https://restcountries.com/v3.1/all')
          },
          element: <Countries></Countries>,
        },
        {
          path: '/Languages',
          element: <Languages></Languages>
        },
        {
          path:'/Maps',
          loader: async() =>{
          return fetch('https://restcountries.com/v3.1/all')
          },
          element:<Maps></Maps>,
          
        },
        {
          path: '/Cities',
          element: <Cities></Cities>
        }
        

  
      ]

  },
])
  return (
    <div className="App">

<RouterProvider 
router={router}
></RouterProvider>

     
    </div>
  );
}

export default App;
