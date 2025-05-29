"use client";

export default function ContactUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT: Contact Info */}
        <div>
          <h2 className="text-xl font-semibold">AL Saeed Foundation – Schools</h2>

          <hr className="my-4" />

          <h3 className="text-lg font-semibold">Lahore</h3>
          <p><span className="font-semibold">Contact Person:</span> Khawar Saeed</p>
          <p className="text-gray-700 mt-1">
            Address: Plot # 91, Block – C, Broadway Road, Phase VIII, DHA Lahore, Pakistan.
          </p>
          <p className="mt-1">Email: <a href="mailto:umer.shahid@tcf.org.pk" className="text-green-600">umer.shahid@tcf.org.pk</a></p>
          <p>Phone: <a href="tel:+924237135871" className="text-green-600">+92-42-37135871-76</a></p>

          <hr className="my-4" />

          <h3 className="text-lg font-semibold">Sahiwal</h3>
          <p><span className="font-semibold">Contact Person:</span> Khawar Saeed</p>
          <p className="text-gray-700 mt-1">
            Address: Regional Office near Fazia Colony, Service Road, Gangal West Rawalpindi.
          </p>
          <p>Tel: <a href="tel:+92514578229" className="text-green-600">(92-51) 4578229 Ext: (115)</a></p>
        </div>

        {/* RIGHT: Contact Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">For specific queries, please fill out the form below</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-medium">Your Name*</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">Your Email*</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block font-medium">Subject*</label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium">Your Message*</label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Type your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
