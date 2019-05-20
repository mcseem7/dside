import websites from '../../components/CompanyPages/Services/websites';
import design from '../../components/CompanyPages/Services/design';
import ecommerce from '../../components/CompanyPages/Services/ecommerce';


const typeServices = {
    nameLocation: 'services',
    type: {
        websites: 'website',
        design: 'design',
        ecommerce: 'ecommerce'
    }
}

export const servicesRoute = [
    {
        path: [
            `/en/${typeServices.nameLocation}/${typeServices.type.websites}`, 
            `/ru/${typeServices.nameLocation}/${typeServices.type.websites}`,
            `/pl/${typeServices.nameLocation}/${typeServices.type.websites}`
             ],
        exact: true,
        component: websites
    },
    {
        path: [
            `/en/${typeServices.nameLocation}/${typeServices.type.design}`, 
            `/ru/${typeServices.nameLocation}/${typeServices.type.design}`,
            `/pl/${typeServices.nameLocation}/${typeServices.type.design}`
             ],
        exact: true,
        component: design
    },
    {
        path: [
            `/en/${typeServices.nameLocation}/${typeServices.type.eccomerce}`,
            `/ru/${typeServices.nameLocation}/${typeServices.type.ecommerce}`,
            `/pl/${typeServices.nameLocation}/${typeServices.type.ecommerce}`
             ],
        exact: true,
        component: ecommerce
    }
]








