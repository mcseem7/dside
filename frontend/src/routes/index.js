import {servicesRoute} from './services'
import {company} from './company'
import { blog } from "./blog";
import { portfolio } from "./portfolio";
import NotFound from '../components/Basic/NotFound'
import Calculator from '../components/CompanyPages/calculator/'

import Main from '../components/DynamicContent/Main'






const routes = [
    {
        path: ["/en", "/ru", '/pl'] ,
        exact: true,
        component: Main,
    },
    ...servicesRoute,
    ...company,
    ...blog,
    ...portfolio,
    ...process,
    {
        exact: true,
        path: '/ru/calculator',
        component: Calculator,
    },
    {
        exact: false,
        path: '*',
        component: NotFound
    }
]

export default routes;