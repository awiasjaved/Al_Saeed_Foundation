// components/WhyMonthly.jsx
"use client";
import Image from 'next/image'

export default function WhyMonthly() {
  const items = [
    {
      src: '/icons/icon-budget.svg',
      alt: 'Fits your budget',
      title: 'Fits your budget',
      text: `By giving monthly, you can choose to donate what’s easy for you and create long-term impact over the course of your membership.`
    },
    {
      src: '/icons/icon-zakat.svg',
      alt: 'Meets your Zakat requirements',
      title: 'Meets your Zakat requirements',
      text: `Set up your monthly donations as Zakat and be assured that you are fulfilling your obligations. Donations can also be marked as Sadaqah or general donations.`
    },
    {
      src: '/icons/icon-hassle-free.svg',
      alt: 'Hassle-Free',
      title: 'Hassle-Free',
      text: `By setting up recurring payments via credit card, your donation occurs automatically every month. You can change the amount or cancel any time.`
    },
    {
      src: '/icons/icon-community.svg',
      alt: 'Join a community of changemakers',
      title: 'Join a community of changemakers',
      text: `By donating as little as Rs. 3,400 per month, you will be joining our community of dedicated members who want to solve the education crisis in Pakistan.`
    }
  ]

  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-12">
        Why Give Monthly?
      </h2>
      <div className="container mx-auto flex flex-nowrap justify-between px-4 overflow-x-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-1/4 px-4 mb-8"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h5 className="text-lg font-medium text-gray-700 mb-2">
              {item.title}
            </h5>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
