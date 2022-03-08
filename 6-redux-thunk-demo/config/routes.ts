import BlankLayout from '@/layouts/BlankLayout';
import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import Login from '@/pages/user/login';
import Register from '@/pages/user/register';

import Home from '@/pages/home';
import ImgFontDemo from '@/pages/imgFontDemo';

import WorkList from '@/pages/list/WorkList';
import UserList from '@/pages/list/UserList';

import ReduxDemo from '@/pages/reduxDemo';

export default [
  {
    path: '/',
    component: BlankLayout,
    routes: [
      {
        path: '/user',
        component: UserLayout,
        routes: [
          {
            path: '/user/login',
            component: Login,
          },
          {
            path: '/user/register',
            component: Register,
          },
        ],
      },
      {
        path: '/home',
        component: BasicLayout,
        routes: [
          {
            path: '/home/index',
            name: '首页',
            component: Home,
          },
          {
            path: '/home/imgFontDemo',
            name: 'imgFontDemo',
            component: ImgFontDemo,
          },

          {
            path: '/home/list',
            name: 'list',
            component: BlankLayout,
            routes: [
              {
                path: '/home/list/UserList',
                name: 'UserList',
                component: UserList,
              },
              {
                path: '/home/list/WorkList',
                name: 'WorkList',
                component: WorkList,
              },
            ],
          },
          {
            path: '/home/reduxDemo',
            name: 'reduxDemo',
            component: ReduxDemo,
          },
        ],
      },
    ],
  },
];
