import React from 'react'

const Test = () => {
    return (
        <div className="flexbox-container bg-gray-400 p-2 m-2 flex justify-items-center">
            {[1, 2, 3].map(value => (
                <div className="flexbox-item item-1 m-2 border border-dashed text-center text-white font-bold border-gray-700 w-52 h-24">
                    Flex item {value}
                </div>
            ))}
        </div>
    )
}

export default Test
