import Blog from '../../components/DynamicContent/Blog'
import BlogItem from '../../components/DynamicContent/BlogItem';

export const blog = [
    {
        path: [
            `/en/blog`, 
            `/ru/blog`, 
            `/cz/blog`, 
            `/pl/blog` 
             ],
        exact: true,
        component: Blog
    },
    {
        path: [
            `/en/blog/:blogitem`, 
            `/ru/blog/:blogitem`, 
            `/cz/blog/:blogitem`, 
            `/pl/blog/:blogitem` 
             ],
        exact: true,     
        component: BlogItem
    }
]

