import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";

const BlogRout = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index path={<Blog />} />
        </Routes>
        </BrowserRouter>
    )
}