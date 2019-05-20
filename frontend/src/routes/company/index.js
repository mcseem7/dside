import ContactUs from '../../components/CompanyPages/ContactUs'
import About from '../../components/DynamicContent/About'
import Cookies from '../../components/CompanyPages/Cookies'
import Process from '../../components/DynamicContent/Process'


export const company = [
    {
        path: [
            `/en/contactus`, 
            `/ru/contactus`,
            `/pl/contactus`
             ],
        exact: true,
        component: ContactUs
    },
    {
        path: [
            `/en/aboutus`, 
            `/ru/aboutus`,
            `/pl/aboutus`
             ],
        exact: true,
        component: About
    },
    {
        path: [
            `/en/cookies-policy`, 
            `/ru/cookies-policy`,
            `/pl/cookies-policy`
             ],
        exact: true,
        component: Cookies
    },
    {
        path: [
            `/en/process`,
            `/ru/process`,
            `/pl/process`
             ],
        exact: true,
        component: Process
    }
]













