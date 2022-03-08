import BlankLayout from '@/layouts/BlankLayout';
import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

import Login from '@/pages/user/login';
import Register from '@/pages/user/register';

import Home from '@/pages/home';
import ImgFontDemo from '@/pages/imgFontDemo';

import WorkList from '@/pages/list/WorkList';
import UserList from '@/pages/list/UserList';

import ReduxDemo from '@/pages/Person/index2';

import Clock from '@/pages/demos/lifecycle/Snapshot-sample';

import ClockHook from '@/pages/demos/componentType/Hooks/customHooks/clockHook';

import DndSample from '@/pages/DndSample';

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
            path: '/home/Clock',
            name: 'Clock',
            component: Clock,
          },
          {
            path: '/home/ClockHook',
            name: 'ClockHook',
            component: ClockHook,
          },

          {
            path: '/home/DndSample',
            name: 'DndSample',
            component: DndSample,
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
            path: '/home/reduxDemo/Person',
            name: 'reduxDemo',
            component: ReduxDemo,
          },
        ],
      },
    ],
  },
];
