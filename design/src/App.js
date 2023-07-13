import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Portfoliopage from './pages/portfoliopage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import {Helmet} from "react-helmet";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/portfolio',
        element: <Portfoliopage />
      },
      {
        path: '/about',
        element: <Aboutpage />
      },
      {
        path: '/contact',
        element: <Contactpage />
      },
      {
        path: '/',
        element: <Homepage />
      }

    ]
  }
])

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Livi|Visuals</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Livi Visuals" />
      </Helmet>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
