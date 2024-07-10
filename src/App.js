import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './layout/homepage';
import Product from './products/product';
import Info from './info/info';
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