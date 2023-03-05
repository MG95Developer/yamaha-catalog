import
{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Home, { motorcyclesLoader } from './pages/Home'
import Contact from './pages/Contact'
import TestDrive from './pages/TestDrive';
import Profile from './pages/Profile'


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={motorcyclesLoader} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/test-drive" element={<TestDrive />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
)

function App()
{
  return (
    <RouterProvider router={router} />
  )
}

export default App
