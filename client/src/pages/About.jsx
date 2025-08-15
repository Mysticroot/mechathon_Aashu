// src/pages/About.jsx
export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Passion. Speed. Innovation. That’s what drives us at Nemesis Racing.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
            alt="Nemesis Racing"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="mb-6 leading-relaxed">
            We are a team of enthusiasts dedicated to pushing the boundaries of racing technology
            and performance. From designing aerodynamic vehicles to perfecting pit-stop strategies,
            every detail matters.
          </p>
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="mb-6 leading-relaxed">
            To bring innovation and excitement to the racing world, while inspiring the next
            generation of engineers and drivers.
          </p>
          <h3 className="text-xl font-semibold mb-3">Our Values</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Innovation in design and performance</li>
            <li>Teamwork and dedication</li>
            <li>Passion for motorsports</li>
            <li>Continuous learning and growth</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to join our journey?</h2>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-black transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
