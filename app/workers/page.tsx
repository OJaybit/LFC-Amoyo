// app/workers/page.tsx

import { workers } from '@/app/data/workers';
import WorkerCard from '@/app/components/WorkerCard';

export default function WorkersPage() {
  return (
    <section className="px-6 lg:px-20 py-16">
      <h1 className="text-3xl lg:text-5xl font-bold mb-10 text-center">
        Meet Our Workers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workers.map((worker) => (
          <WorkerCard key={worker.slug} {...worker} />
        ))}
      </div>
    </section>
  );
}