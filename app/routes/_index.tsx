import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="text-red-500 h-screen w-full flex items-center justify-center text-4xl">
      Hello, world!
      <i className="ri-github-fill ri-4x"></i>
    </div>
  );
}
