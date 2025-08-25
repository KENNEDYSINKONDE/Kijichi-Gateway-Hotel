'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ResponsiveNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <Navbar onOpenMenu={handleOpenMenu} />
      {openMenu && <MobileNavbar onCloseMenu={handleCloseMenu} />}
    </div>
  );
};

export default ResponsiveNav;
