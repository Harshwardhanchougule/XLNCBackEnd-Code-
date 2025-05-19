import { FiLogOut, FiHome, FiBook, FiUsers, FiSettings } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const handleLogout = () => {
    // Add any logout logic here (clear tokens, cookies, etc.)
    window.location.href = '/login';
  };

  return (
    <div className="w-64  bg-gray-900 text-white fixed left-0 top-0 pt-20 shadow-lg">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-blue-400">Admin Panel</h2>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
                <FiHome className="text-xl" />
                <span>Dashboard</span>
              </a>
            </li>
            <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
                <FiBook className="text-xl" />
                <span>Blogs</span>
              </a>
            </li>
            <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
                <FiUsers className="text-xl" />
                <span>Users</span>
              </a>
            </li>
            <li className="hover:bg-gray-800 rounded-lg transition-all duration-200">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400">
                <FiSettings className="text-xl" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>

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
    </div>
  );
};

export default Sidebar;
