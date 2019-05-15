import ContactUs from '../../components/CompanyPages/ContactUs'
import About from '../../components/DynamicContent/About'
import Cookies from '../../components/CompanyPages/Cookies'
import Process from '../../components/DynamicContent/Process'


export const company = [
    {
        path: [
            `/en/contactus`, 
            `/ru/contactus`,
            `/pl/contactus`,
            `/cz/contactus`
             ],
        exact: true,
        component: ContactUs
    },
    {
        path: [
            `/en/aboutus`, 
            `/ru/aboutus`,
            `/pl/aboutus`,
            `/cz/aboutus`
             ],
        exact: true,
        component: About
    },
    {
        path: [
            `/en/cookies-policy`, 
            `/ru/cookies-policy`,
            `/pl/cookies-policy`,
            `/cz/cookies-policy`
             ],
        exact: true,
        component: Cookies
    },
    {
        path: [
            `/en/process`,
            `/ru/process`,
            `/pl/process`,
            `/cz/process`
             ],
        exact: true,
        component: Process
    }
]













