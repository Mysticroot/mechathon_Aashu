// src/components/home/BlogSection.jsx
import React from 'react';

export default function BlogSection() {
  const sections = [
    {
      title: 'Engineering the Future',
      text: `Our team combines years of mechanical engineering expertise with cutting-edge technology
        to create innovative solutions. From conceptual design to final implementation, we
        deliver excellence in every project.`,
      subText: `Specializing in buggy design, mechanical systems, and advanced engineering solutions,
        we've established ourselves as leaders in the field through consistent innovation and
        technical excellence.`,
      stats: [
        { value: '50+', label: 'Projects Completed' },
        { value: '15+', label: 'Team Members' },
      ],
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600&h=400&fit=crop',
    },
    {
      title: 'Innovation at Every Step',
      text: `We believe innovation starts from day one. By combining creativity with practical
        engineering, we ensure that our designs are not just concepts but realities that make
        a difference.`,
      subText: `From prototyping to testing, every step is carefully measured to push the limits
        of what's possible in mechanical engineering and racing technology.`,
      stats: [
        { value: '20+', label: 'Awards Won' },
        { value: '10+', label: 'Years Experience' },
      ],
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop',
    },
    {
      title: 'Shaping Tomorrow',
      text: `Our focus isn’t just today—it’s about preparing for the future. We actively invest
        in research, sustainable solutions, and empowering young engineers to take the lead.`,
      subText: `Through collaboration, knowledge-sharing, and real-world problem solving, we are
        building a legacy of innovation and impact for the generations to come.`,
      stats: [
        { value: '100+', label: 'Students Trained' },
        { value: '30+', label: 'Industry Collaborations' },
      ],
      image:
        'https://images.unsplash.com/photo-1526716173434-a1d1b1b1b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Latest from Our Blog</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-black transition-colors">
          View All
        </button>
      </div>

      {/* Alternating Sections */}
      <div className="space-y-20">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 ${
              idx % 2 === 1 ? 'md:grid-flow-col-dense' : ''
            }`}
          >
            {/* Text */}
            <div className={`${idx % 2 === 1 ? 'md:col-start-2' : ''}`}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{sec.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">{sec.text}</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">{sec.subText}</p>
              <div className="grid grid-cols-2 gap-6">
                {sec.stats.map((s, i) => (
                  <div className="text-center" key={i}>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{s.value}</div>
                    <div className="text-sm text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={sec.image}
                alt={sec.title}
                className="shadow-xl mx-auto max-w-2xl object-cover 
             [clip-path:polygon(8%_0,100%_0,92%_100%,0%_100%)] 
             rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
