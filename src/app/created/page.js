'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DynamicCard from '@/app/Dynamic/DynamicCard';
import Container from '@/app/Container';

// Example: reuse the same products or load different ones
import Jannah from '@/app/assets/images/Jannah.jpg';
import Annah from '@/app/assets/images/joy.jpg';

// You can expand this list or import shared products if needed
const products = [
  {
    id: 1,
    title: "THE JOY OF JANNAH",
    price: 500,
    oldPrice: 600,
    image: Jannah,
    hoverImage: Annah,
    description: `This book introduces Jannah in simple words with interesting details to spark imagination.`,
  },
];

export default function CreatedPage() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Container>
        <section className="py-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="pb-10"
          >
            <h2 className="text-lg text-gray-900 uppercase">New Release</h2>
            <h3 className="text-2xl font-semibold mb-8">Created for You</h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <DynamicCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
