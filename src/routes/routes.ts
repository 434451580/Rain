import loadable from '@loadable/component';
import { RouteObject } from 'react-router-dom'

export const routes: RoutesConfig[] = [
  {
    path: '/',
    element: loadable(() => import('@/pages/home'))
  },
  {
    path: '/about',
    element: loadable(() => import('@/pages/about'))
  }
];




export interface RoutesConfig extends RouteObject {
  auth?: string
}

