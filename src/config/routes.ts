import Loadable from 'react-loadable';
import DelayLoading from '@components/DelayLoading';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ '../pages/Home/index'),
  loading: DelayLoading,
});

const ResearchDirection = Loadable({
  loader: () =>
    import(/* webpackChunkName: "ResearchDirection" */ '../pages/ResearchDirection/index'),
  loading: DelayLoading,
});

const AcademicPaper = Loadable({
  loader: () => import(/* webpackChunkName: "AcademicPaper" */ '../pages/AcademicPaper/index'),
  loading: DelayLoading,
});

const LabMember = Loadable({
  loader: () => import(/* webpackChunkName: "AcademicPaper" */ '../pages/LabMember/index'),
  loading: DelayLoading,
});

const LabPic = Loadable({
  loader: () => import(/* webpackChunkName: "LabPic" */ '../pages/LabPic/index'),
  loading: DelayLoading,
});

const News = Loadable({
  loader: () => import(/* webpackChunkName: "AcademicPaper" */ '../pages/News/index'),
  loading: DelayLoading,
});

const Contact = Loadable({
  loader: () => import(/* webpackChunkName: "AcademicPaper" */ '../pages/Contact/index'),
  loading: DelayLoading,
});

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/yjfx',
    component: ResearchDirection,
  },
  {
    path: '/xslw',
    component: AcademicPaper,
  },
  {
    path: '/syscy',
    component: LabMember,
  },

  {
    path: '/syszp',
    component: LabPic,
  },
  {
    path: '/xwdt',
    component: News,
  },
  {
    path: '/lxwm',
    component: Contact,
  },
];
