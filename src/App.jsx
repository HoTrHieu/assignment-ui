import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import TopPage from "./pages/TopPage/TopPage";
import MyRecord from "./pages/MyRecord/MyRecord";
import CollumPage from "./pages/CollumPage/CollumPage";
import 'styles/global.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopPage/>
  }, 
  {
    path: "/record",
    element: <MyRecord/>
  },
  {
    path: "/collumn",
    element: <CollumPage/>
  }
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
