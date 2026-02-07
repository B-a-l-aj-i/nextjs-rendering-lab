import RSC from '@/components/rsc';

export default function RSCPage() {

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">
        React Server Components (RSC)
      </h1>

      <p className="text-xl text-gray-500 mb-6">
        This page renders entirely on the server. Data is fetched before the
        page is sent to the client.
      </p>
      <RSC />
    </div>
  );
}
