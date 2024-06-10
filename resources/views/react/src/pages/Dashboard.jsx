import React, { useState } from 'react';
import Navbar from '../components/navbar';
// import Sidebar from '../components/sidebar';

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              
              <div className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
                {/* <Sidebar /> */}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Dashboard;
