import "./App.css";
import { useState, useEffect, useRef } from "react";
import {
  Form,
  RouterProvider,
  createBrowserRouter,
  useLoaderData,
} from "react-router-dom";

function Rationale() {
  return (
    <div className="text-gray-500 mb-6">
      <p className="mt-10">The point of all of this:</p>
      <ul className="list-disc">
        <li>
          A user will change params on the front end, and throw a "job" (set of
          kv pairs) at a server and get back result kv pairs. A user might not
          change an input; we shouldn't throw unchanged params at the server
          since it already knows the previous state of the job.
        </li>
        <li>
          need a lot of UI flexibility (design experiments underway) so the idea
          is to have a big overall Form wrapper and the inputs could be
          arbitrarily deep. The mutation machinery doesn't care where, shouldn't
          need a rewrite when we move inputs from one component to another.
        </li>
        <li>
          type a number and hit return in the *input*; we should be submitting
          without having to hit a button and getting a sum/product, ie. in an
          onChange instead, maybe onBlur.
        </li>
      </ul>
    </div>
  );
}

// a job run is just an obj
// global simulates the server's database record of the job
window.JOB = { a: 12, b: 44 };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Calc />,
    loader: async ({ params, request }) => {
      console.log("loader running");
      return new Promise((resolve, _reject) => {
        // simulate a network round-trip
        // placeholder for complex backend stuff going on, backend gives us a
        // result, we're just faking it here.
        JOB.sum = JOB.a + JOB.b;
        JOB.product = JOB.a * JOB.b;
        setTimeout(() => resolve(JOB), 300);
      });
    },
    action: async ({ params, request }) => {
      console.log("action running");
      const formData = await request.formData();
      for (const [k, v] of formData) {
        // loop over known names
        // simulates throwing new input data at a server
        // in reality we POST this after some pre-processing
        console.log("sending", k, "to server");
        JOB[k] = parseInt(v, 10);
      }
      return null; // don't redirect
    },
  },
]);

function Input({ name, defaultValue, className }) {
  // don't put a name on the input until the user changes it
  // adding the name is what makes the route action able to see it
  console.debug("Input rendering");
  const [isDirty, setIsDirty] = useState(false);
  return (
    <div className="flex items-baseline gap-2">
      <div>{name} =</div>
      <input
        type="number"
        name={isDirty ? name : null}
        defaultValue={defaultValue}
        className={className}
        onChange={() => setIsDirty(true)}
        autoComplete="off"
      />
      <button
        type="submit"
        className="border border-gray-500 px-2 py-1 text-gray-400"
      >
        save
      </button>
    </div>
  );
}

const intFormatter = new Intl.NumberFormat("en-CA", {
  style: "decimal",
  maximumFractionDigits: 0,
});

const nbsp = " "; // u00a0 to avoid height shifts

function Output({ formula, value }) {
  const [firstRender, setFirstRender] = useState(true);
  const valRef = useRef(null);
  useEffect(() => {
    if (!firstRender && valRef.current) {
      // css flash on new value to draw user's eye
      valRef.current.classList.remove("flash");
      setTimeout(() => valRef.current.classList.add("flash"), 1);
    } else {
      setFirstRender(false);
    }
  }, [value]);
  return (
    <div className="flex gap-2 items-baseline">
      <div className="text-gray-500">{formula} =</div>
      <div ref={valRef} className="text-2xl">
        {intFormatter.format(value)}
        {nbsp}
      </div>
    </div>
  );
}

function Wrapper({ job }) {
  // give ourselves a couple levels to lose track of the route Form and have to
  // find it again
  console.debug("Wrapper rendering");
  const tw = "block bg-gray-700 my-2 px-3 py-2";
  return (
    <>
      <Input className={tw} name="a" defaultValue={job.a} />
      <Input className={tw} name="b" defaultValue={job.b} />
    </>
  );
}

function Calc() {
  console.debug("Calc rendering");
  const job = useLoaderData();
  return (
    <>
      <Form method="post">
        <Wrapper job={job} />
        <div className="flex flex-col gap-2 mt-4">
          <Output formula="a + b" value={job.sum} />
          <Output formula="a × b" value={job.product} />
        </div>
      </Form>
      <Rationale />
    </>
  );
}

function App() {
  console.debug("App rendering");
  return (
    <div className="w-full container mx-auto my-12">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// vi:ft=javascript.jsx
