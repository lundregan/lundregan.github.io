import React from 'react'

export default Available => {
    return (
        <div className="text-center shadow p-16 rounded-md border-t-4 bg-gray-100 dark:bg-gray-800 border-b-4 border-blue-500">
            <p className="text-5xl text-gray-600 dark:text-gray-200">STATUS</p>
            <div className="mt-8">
                <p className="text-6xl text-green-500 dark:text-green-400 font-semibold">Available</p>
                <p className="text-gray-700 dark:text-gray-400 mt-1">I am Currently Taking On New Projects</p>
            </div>
        </div>
    )
}
