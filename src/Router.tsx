import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Editor from "./Editor";
import TodayCard from "./TodayCard";


function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <TodayCard />
                },
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