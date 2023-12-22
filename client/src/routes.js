            import { Navigate, createBrowserRouter } from "react-router-dom";
            import Home from "./Pages/Home/Home";
            import Login from "./Pages/Auth/Login";
            import Register from "./Pages/Auth/Register";
            import App from "./App";
            import CarDetails from "./Pages/CarDetails/CarDetails";
            import Managecars from "./Pages/manage-cars/Managecars";
            import Addcar from "./Pages/manage-cars/Addcar";
            import Updatecar from "./Pages/manage-cars/Updatecar";
        

            export const routes = createBrowserRouter([
            {
                path: "",
                element: <App />,
                children: [
                {
                    path: "/",
                    element: <Home />,
                },

                {
                    path: "/Login",
                    element: <Login />,
                },
                {
                    path: ":id",
                    element:<CarDetails />,
                },
                {
                    path: "/Register",
                    element: <Register />,
                },
                {
                        path: "/manage-car",
                        children:[
                            {
                                path:"",
                                element:<Managecars />
                            },
                            {
                                path:'add',
                                element:<Addcar />


                            },
                            {
                                path:'update',
                                element:<Updatecar />

                            },
                        ]
                        
                            
                        
                },
                ],
            },
            {
                path: '*',
                element: <Navigate to ={"/"}/>
            }
            ]);
