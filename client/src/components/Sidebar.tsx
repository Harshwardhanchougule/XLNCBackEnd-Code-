const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
        <div className="mt-20 bg-gray-800">
      <h2 className="text-2xl font-bold p-4">Admin Panel</h2>
      <ul className="p-4 space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Blogs</li>
        <li className="hover:text-blue-400 cursor-pointer">Users</li>
        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
