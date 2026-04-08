// app/workers/[slug]/page.tsx

import { workers } from '@/app/data/workers';
import { notFound } from 'next/navigation';

export default function WorkerDetails({
  params,
}: {
  params: { slug: string };
}) {
  const worker = workers.find((w) => w.slug === params.slug);

  if (!worker) return notFound();

  return (
    <div className="px-6 lg:px-20 py-16">
      <h1 className="text-3xl lg:text-5xl font-bold mb-6">
        {worker.title}
      </h1>

      <p className="text-lg text-gray-600">
        Welcome to the {worker.title} unit. More content goes here...
      </p>
    </div>
  );
}