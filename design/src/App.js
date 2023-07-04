import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import Portfoliopage from './pages/portfoliopage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import homepage from './pages/homepage';



const router= createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path:'/portfolio',
        element:<Portfoliopage/>
      },
      {
        path:'/about',
        element:<Aboutpage/>
      },
      {
        path:'/contact',
        element:<Contactpage/>
      },
      {
        path:'/',
        element:<homepage/>
      }

    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
