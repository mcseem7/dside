import ContactUs from "../../components/CompanyPages/ContactUs";
import About from '../../components/DynamicContent/About'
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
            `/en/process`,
            `/ru/process`,
            `/pl/process`,
            `/cz/process`
             ],
        exact: true,
        component: Process
    }
]













