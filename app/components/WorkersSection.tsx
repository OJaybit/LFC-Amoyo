import { workers } from '@/app/data/workers';
import WorkerCard from '@/app/components/WorkerCard';
import { pacifico } from '@/app/fonts';

export default function WorkersSection() {
  return (
    <section className="px-6 lg:px-20 py-16">
        {/* TITLE */}
            <div className="text-center mb-10">
              <h2 className={`${pacifico.className} text-5xl sm:text-4xl text-[#5c6f87]`}>
                Meet Our Workers
              </h2>
              
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workers.map((worker) => (
          <WorkerCard key={worker.slug} {...worker} />
        ))}
      </div>
    </section>
  );
}