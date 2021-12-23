import loadable from '@loadable/component';
import { RouteProps } from 'react-router-dom'

const Layouts = loadable(() => import('@/layouts'))
const Home = loadable(() => import('@/pages/Home'))
const About = loadable(() => import('@/pages/About'))
const Login = loadable(() => import('@/pages/Login'))
const NotFund = loadable(() => import('@/pages/NotFund'))

export const routes: RoutesConfig[] = [
  {
    path: '/',
    icon: 'HomeOutlined',
    element: <Layouts />,
    children: [
      {
        index: true,
        auth: 'xxx',
        element: <Home />,
        icon: 'TagOutlined'
      },
      {
        path: '/home',
        auth: 'xxx',
        element: <Home />,
        icon: 'TagOutlined'
      },
      {
        path: '/about',
        auth: 'xxx',
        element: <About />,
        icon: 'TagOutlined'
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    icon: 'TagOutlined'
  },
  {
    path: '*',
    element: <NotFund />,
  }
];

export interface RoutesConfig extends RouteProps {
  path?: string,
  exact?: boolean
  auth?: string,
  icon?: string,
  children?: RoutesConfig[]
}

