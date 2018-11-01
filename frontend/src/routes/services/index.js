import LogoPage from '../../components/CompanyPages/Services/logos'
import VideosPage from '../../components/CompanyPages/Services/videos'
import websites from '../../components/CompanyPages/Services/websites';
import branding from '../../components/CompanyPages/Services/branding';
import advertising from '../../components/CompanyPages/Services/advertising';
import automation from '../../components/CompanyPages/Services/automation';


const typeServices = {
    nameLocation: 'services',
    type: {
        serviceVideos: 'videos',
        serviceLogo: 'logo',
        websites: 'website',
        serviceBrand: 'brand',
        serviceAutomation: 'automation',
        serviceAdvertising: 'advertising'
    }
}

export const servicesRoute = [
    {
        path: [
            `/en/${typeServices.nameLocation}/${typeServices.type.serviceVideos}`, 
            `/ru/${typeServices.nameLocation}/${typeServices.type.serviceVideos}`,
            `/pl/${typeServices.nameLocation}/${typeServices.type.serviceVideos}`,
            `/cz/${typeServices.nameLocation}/${typeServices.type.serviceVideos}`
             ],
        exact: true,
        component: VideosPage
    },
    {
        path: [
            `/en/${typeServices.nameLocation}/${typeServices.type.serviceLogo}`, 
            `/ru/${typeServices.nameLocation}/${typeServices.type.serviceLogo}`,
            `/pl/${typeServices.nameLocation}/${typeServices.type.serviceLogo}`,
            `/cz/${typeServices.nameLocation}/${typeServices.type.serviceLogo}`
             ],
        exact: true,
        component: LogoPage
    },
    {
        path: [
            `/en/${typeServices.nameLocation}/${typeServices.type.websites}`, 
            `/ru/${typeServices.nameLocation}/${typeServices.type.websites}`,
            `/pl/${typeServices.nameLocation}/${typeServices.type.websites}`,
            `/cz/${typeServices.nameLocation}/${typeServices.type.websites}`
             ],
        exact: true,
        component: websites
    },
    {
        path: [
            `/en/${typeServices.nameLocation}/${typeServices.type.serviceBrand}`, 
            `/ru/${typeServices.nameLocation}/${typeServices.type.serviceBrand}`,
            `/pl/${typeServices.nameLocation}/${typeServices.type.serviceBrand}`,
            `/cz/${typeServices.nameLocation}/${typeServices.type.serviceBrand}`
             ],
        exact: true,
        component: branding
    },
    {
        path: [
            `/en/${typeServices.nameLocation}/${typeServices.type.serviceAdvertising}`, 
            `/ru/${typeServices.nameLocation}/${typeServices.type.serviceAdvertising}`,
            `/pl/${typeServices.nameLocation}/${typeServices.type.serviceAdvertising}`,
            `/cz/${typeServices.nameLocation}/${typeServices.type.serviceAdvertising}`
             ],
        exact: true,
        component: advertising
    },
    {
        path: [
            `/en/${typeServices.nameLocation}/${typeServices.type.serviceAutomation}`, 
            `/ru/${typeServices.nameLocation}/${typeServices.type.serviceAutomation}`,
            `/pl/${typeServices.nameLocation}/${typeServices.type.serviceAutomation}`,
            `/cz/${typeServices.nameLocation}/${typeServices.type.serviceAutomation}`
             ],
        exact: true,
        component: automation
    }
]








