import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './layout/homepage';
import Product from './products/product';
import Info from './info/info';
import AboutUs from './about/about-us';
const elements = [
    {
        path: '/',
        element: <HomePage/>,
        children: [
            {
                path: 'products',
                element: <Product/>

            },
            {
                path: '',
                element: <Info/>

            },
            {
                path: '/about-us',
                element: <AboutUs/>

            }
        ]
    }
];
const router = createBrowserRouter(elements);
function App(){
    return (
        <RouterProvider router={router}/>
    );
};
export default App;