import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BlogWritePage from "./components/Add";

import BlogDetail from "./components/ThoughtDetail";
import { useDarkMode } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import RootLayout from "./Layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='write' element={<BlogWritePage />} />
      <Route path='register' element={<RegistrationPage />}></Route>
      <Route path='login' element={<LoginPage />}></Route>
      <Route path='/:id' element={<BlogDetail />}></Route>
    </Route>
  )
);

function App() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${isDarkMode ? "bg-slate-900 text-white" : ""} min-h-screen`}>
      <div className=' px-5 sm:px-6 md:px-10 lg:mx-20 xl:px-32 mx-auto'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
