export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-4 mb-5">
      <div>
        <h1 className="text-9xl font-bold">Next.js Rendering Lab</h1>
      </div>
      <div className="flex gap-3 text-2xl mt-5">
        <button className="border-2 border-gray-300 rounded-md p-2 cursor-pointer">Client Side Rendering</button>
        <button className="border-2 border-gray-300 rounded-md p-2 cursor-pointer">Server Side Rendering</button>
        <button className="border-2 border-gray-300 rounded-md p-2 cursor-pointer">Static Site Generation</button>
        <button className="border-2 border-gray-300 rounded-md p-2 cursor-pointer">Incremental Static Generation</button>
        <button className="border-2 border-gray-300 rounded-md p-2 cursor-pointer">React Server Component</button>
      </div>
    </main>
  );
}
