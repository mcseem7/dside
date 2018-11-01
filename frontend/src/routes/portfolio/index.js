import Portfolio from '../../components/DynamicContent/Portfolio'
import PortfolioItem from '../../components/DynamicContent/PortfolioItem'
 

export const portfolio = [
    {
        path: [
            `/en/portfolio`, 
            `/ru/portfolio`, 
            `/cz/portfolio`, 
            `/pl/portfolio` 
             ],
        exact: true,
        component: Portfolio
    },
    {
        path: [
            '/en/portfolio/:portfolioitem', 
            `/ru/portfolio/:portfolioitem`, 
            `/cz/portfolio/:portfolioitem`, 
            `/pl/portfolio/:portfolioitem` 
             ],
        exact: true,
        component: PortfolioItem
    }
]

