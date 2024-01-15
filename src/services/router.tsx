import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Rules } from '../components/Rules/rules';
import { Forum } from '../pages/rules/forum';
import { Server } from '../pages/rules/server';
import { InputsPage } from '../pages/inputs/InputsPage';
import { Shop } from '../pages/shop/Shop';
import { Admin } from '../pages/rules/admin';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'rules',
        element: <Rules />,
        children: [
          {
            path: 'forum',
            element: <Forum />,
          },
          {
            path: 'server',
            element: <Server />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ]
      },
      {
        path: 'inputs',
        element: <InputsPage />,
      },
      {
        path: 'shop',
        element: <Shop />,
      }
    ]
  }
])
