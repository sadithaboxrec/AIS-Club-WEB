import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-9xl font-bold text-blue-800">404</h1>
            <p className="text-2xl font-semibold mt-4">Page Not Found</p>
            <p className="text-gray-500 mt-2">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700">
                Go Back Home
            </Link>
        </div>
    )
}

export default NotFound