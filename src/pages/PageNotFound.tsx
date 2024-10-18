import { Link } from "react-router-dom";

export default function PageNotFound() {
    return(
        <main className="p-10 flex-grow p-4 text-center">
            <div className="flex flex-col">
            <h1>404</h1>
            <h1 className="">Page not found</h1>
            <Link className="py-4" to="/">Back to homepage.</Link>
            </div>
        </main> 
    )
}