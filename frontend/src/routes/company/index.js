import ContactUs from '../../components/CompanyPages/ContactUs'
import About from '../../components/DynamicContent/About'
import Pricing from '../../components/DynamicContent/Pricing/index'
import Pricing2 from  '../../components/DynamicContent/Pricing/PricingPage'
import Cookies from '../../components/CompanyPages/Cookies'
import Process from '../../components/DynamicContent/Process/'


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
            `/en/pricing2`,
            `/ru/pricing2`,
            `/pl/pricing2`
             ],
        exact: true,
        component: Pricing2
    },
    {
        path: [
            `/en/pricing`,
            `/ru/pricing`,
            `/pl/pricing`
        ],
        exact: true,
        component: Pricing2
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













