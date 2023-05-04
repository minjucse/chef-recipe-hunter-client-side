
import React from 'react'

const Blog = () => {
  return (
    <div className='container'>
      <div className=" row mb-4">
        <div className='col-md-10 card mt-4 p-4'>
          <div className="mb-4">
            <h1 className="font-bold mb-2">
              1. Tell us the differences between uncontrolled and controlled components.
            </h1>
            <p>
              <strong>Answer</strong>: Controlled components does not maintain its internal state.
              Controlled components data is controlled by the parent component. But, Uncontrolled componentsmaintains its internal states.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold mb-2">2. How to validate React props using PropTypes

            </h1>
            <p>
              <strong>Answer</strong>: The prop-types library makes component prop data type validation easy by providing us with ways to validate any prop types.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold mb-2">
              3. Tell us the difference between nodejs and express js
            </h1>
            <p>
              <strong>Answer</strong> :Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript. Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold mb-2">4. What is a custom hook, and why will you create a custom hook?</h1>
            <p>
              <strong>Answer</strong> : Custom Hooks are a mechanism to reuse stateful logic.
              The main reason to write a custom hook is for code reusability. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog