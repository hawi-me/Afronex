import React from 'react';

export default function Aboutus() {
  return (
    <div className="bg-gray-100 py-10">
      {/* Hero section */}
      <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog!</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed odio sit amet libero bibendum laoreet. Integer sed felis sed leo placerat vestibulum.</p>
        </div>
      </div>

      {/* Mission section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed odio sit amet libero bibendum laoreet. Integer sed felis sed leo placerat vestibulum.</p>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          {/* Individual team member cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team member card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="team-member-1.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Add more team member cards here */}
          </div>
        </div>
      </div>
    </div>
  );
}

