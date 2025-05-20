import { FiLogOut, FiHome, FiBook, FiUsers, FiSettings, FiGlobe, FiTrendingUp, FiMail, FiShield, FiBarChart2 } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const handleLogout = () => {
    // Add any logout logic here (clear tokens, cookies, etc.)
    window.location.href = '/login';
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 pt-20 shadow-lg flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-blue-400">Admin Panel</h2>
      </div>

      {/* Make nav scrollable */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiHome className="text-xl" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/industries" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiGlobe className="text-xl" />
              <span>Industries</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/about" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiUsers className="text-xl" />
              <span>About</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/service/website-development" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiSettings className="text-xl" />
              <span>Website Development</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/service/blogging" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiBook className="text-xl" />
              <span>Blogging</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/service/seo" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiTrendingUp className="text-xl" />
              <span>SEO</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/service/social-media" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiUsers className="text-xl" />
              <span>Social Media</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/service/performance" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiBarChart2 className="text-xl" />
              <span>Performance Marketing</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/service/reputation" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiShield className="text-xl" />
              <span>Reputation Management</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/service/newsletters" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiMail className="text-xl" />
              <span>Newsletter</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/services" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiSettings className="text-xl" />
              <span>All Services</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="/AdminDashboard" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiHome className="text-xl" />
              <span>Admin Dashboard</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="https://www.xlnctechnologies.com/privacy-policy.php" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiShield className="text-xl" />
              <span>Privacy Policy</span>
            </a>
          </li>
          <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
            <a href="https://www.xlnctechnologies.com/contact_us.php" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
              <FiMail className="text-xl" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Fixed logout button at the bottom */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 flex items-center gap-3 text-gray-300 hover:text-white
          bg-red-600/10 hover:bg-red-600 rounded-lg transition-all duration-200"
        >
          <FiLogOut className="text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
