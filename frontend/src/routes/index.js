import {servicesRoute} from './services'
import {company} from './company'
import { blog } from "./blog";
import { portfolio } from "./portfolio";
import NotFound from '../components/Basic/NotFound'


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
        exact: false,
        path: '*',
        component: NotFound
    }
]

export default routes;