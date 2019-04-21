import {servicesRoute} from './services'
import {company} from './company'
import { blog } from "./blog";
import { portfolio } from "./portfolio";
import NotFound from '../components/Basic/NotFound'

import GradeItem from '../components/DynamicContent/GradeItem'
import Main from '../components/DynamicContent/Main'






const routes = [
    {
        path: ["/en", "/ru", '/cz', '/pl'] ,
        exact: true,
        component: Main,
    },
    ...servicesRoute,
    ...company,
    ...blog,
    ...portfolio,
    ...process,
    {
        path: [
            '/en/grade/:gradeitem', 
            `/ru/grade/:gradeitem`, 
            `/cz/grade/:gradeitem`, 
            `/pl/grade/:gradeitem` 
             ],
        exact: true,
        component: GradeItem
    },
    {
        exact: false,
        path: '*',
        component: NotFound
    }
]

export default routes;