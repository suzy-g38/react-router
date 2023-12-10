import { useLoaderData } from "react-router-dom";

import { rand, sleep } from "../utils.js";

export async function loader() {
  await sleep();
  return { data: `Home loader - random value ${rand()}` };
}

export function Component() {
  let data = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  return (
    <div>
      <h2>Home</h2>
      <p>Loader Data: {data.data}</p>
    </div>
  );
}
