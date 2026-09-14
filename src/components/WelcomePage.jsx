import React from 'react'

const Welcome = () => {
  return (
    <div className="welcome-container flex flex-col items-center justify-center min-h-screen bg-orange-600">
      <div className="text-center text-white p-8 rounded-lg shadow-lg bg-linear-to-r from-orange-500 to-yellow-400">
        <div className="title bg-amber-50 text-orange-800 p-4 rounded-lg shadow-md mb-4 text-3xl font-bold">
          <h1>Welcome to BrainBuzz</h1>
        </div>
        <div>
          <p className='text-lg font-bold my-9'>Discover the power of brain training with our interactive platform.</p>

          <button className="get-started-button bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded active:scale-95 transition-transform duration-200"
          onClick={() => {}}
          >
            Get Started
          </button>
        </div>
      </div>

    </div>
  )
}

export default Welcome