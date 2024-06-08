import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Editor from "./Editor";


function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "write",
                    element: <Editor />
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default Router;