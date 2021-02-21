import Alicia from '.components/alicia.js';
import Alicia1 from '.components/alicia1.js';
import ListBeer from '.components/ListBeer.js'
import ListBeerClass from '.components/ListBeerClass.js'
import Header from '.components/Header.js'
import Contact from '.components/Contact.js'
import Home from '.components/Home.js';


export default [

    {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/Alicia',
        exact: true,
        component: Alicia
      },
      {
        path: '/Alicia1',
        exact: true,
        component: Alicia1
      },
      {
        path: '/Contact',
        exact: true,
        component: Contact
      },
      {
        path: '/Header',
        exact: true,
        component: Header
      },
      {
        path: '/TableBeer',
        exact: true,
        component: ListBeer
      },
      {
        path: '/ListBeer',
        exact: true,
        component: ListBeerClass
      }

    ]
      