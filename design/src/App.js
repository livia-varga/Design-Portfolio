import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import Portfoliopage from './pages/portfoliopage';



const router= createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Portfoliopage/>
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
