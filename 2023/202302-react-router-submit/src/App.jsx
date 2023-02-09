import { useState, useRef } from "react";
import {
  Form,
  RouterProvider,
  createBrowserRouter,
  useLoaderData,
} from "react-router-dom";

let sum = null;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Calc />,
    loader: async ({ request }) => {
      console.log("loader", request);
      let job = { a: 44, b: 12, sum: sum };
      return new Promise((resolve, _reject) => {
        // simulate a network round-trip
        setTimeout(() => resolve(job), 300);
      });
    },
    action: async ({ request }) => {
      const formData = await request.formData();
      const obj = Object.fromEntries(formData);
      const a = parseInt(obj.a, 10);
      const b = parseInt(obj.b, 10);
      sum = a + b;
      console.log("action", request);
      return null;
    },
  },
]);

function Input({ name, defaultValue, className }) {
  const buttonRef = useRef(null);
  return (
    <>
      <input
        type="text"
        name={name}
        defaultValue={defaultValue}
        className={className}
      />
    </>
  );
}

function Wrapper({ job }) {
  // give ourselves a couple levels to lose track of the route Form and have to
  // find it again
  const tw = "block bg-gray-800 my-2 px-3 py-2";
  return (
    <>
      <Input className={tw} name="a" defaultValue={job.a} />
      <Input className={tw} name="b" defaultValue={job.b} />
      {/* hidden button makes HTML submit with a return in the inputs work */}
      <button
        className="border border-white px-3 py-2 mt-4 hidden"
        type="submit"
      >
        Force a calc
      </button>
    </>
  );
}

function Calc() {
  const job = useLoaderData();
  return (
    <Form method="post">
      <div className="text-gray-500 mb-6">
        <p className="mb-2">The point of all of this:</p>
        <p>
          type a number and hit return; we should be submitting without hitting
          the button and getting a sum, ie. in an onChange instead.
        </p>
      </div>
      <Wrapper job={job} />
      <div className="mt-6 flex gap-2 items-baseline">
        <div className="text-gray-500">The sum:</div>
        <div className="text-lg">{job.sum} </div> {/* u00a0 for height */}
      </div>
    </Form>
  );
}

function App() {
  return (
    <div className="w-full container mx-auto my-12">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// vi:ft=javascript.jsx
