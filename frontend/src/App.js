// import route modules
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import filterData from asset to render tree view
import { filterData } from './assets/js/filterData';

// import store to use reducers
import { store } from './store';

// import bootstrap modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import redux-provider
import { Provider } from 'react-redux'

// import pages and components here
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';


function App() {

  // create new routes using create browser router
  const router = createBrowserRouter([
    // difine path
    {
      path: '/', element: <SideMenu filterData={filterData} />, children: [
        {
          path: "/", element: <Navbar />, children: [
            { index: true, element: <DashboardPage /> }
          ]
        },
      ]
    }
  ])

  // include store and router in provider
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;
