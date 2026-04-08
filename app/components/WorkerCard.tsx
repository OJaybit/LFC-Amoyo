// app/components/WorkerCard.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  slug: string;
  image: string;
}

export default function WorkerCard({ title, slug, image }: Props) {
  return (
    <Link href={`/workers/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Title */}
        <div className="absolute bottom-6 left-6 text-white text-xl font-semibold">
          {title}
        </div>
      </motion.div>
    </Link>
  );
}