import type { MetaFunction } from "@remix-run/node";

import "../tailwind.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="text-red-500 h-screen w-full flex items-center justify-center">
      Hello, world!
    </div>
  );
}
