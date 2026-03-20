import { NavLink } from 'react-router-dom';
import { Home, Map, ShieldCheck, X, type LucideIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  path: string;
  icon: LucideIcon;
  label: string;
  adminOnly?: boolean;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { user } = useAuth();
  const isAdmin = user?.user_metadata?.role === 'admin';

  const navItems: NavItem[] = [
    { path: '/', icon: Home, label: 'Trang chủ', adminOnly: false },
    { path: '/writing-map', icon: Map, label: 'Bản đồ viết văn', adminOnly: false },
    { path: '/admin', icon: ShieldCheck, label: 'Quản lý bài nộp', adminOnly: true },
  ];

  // Admin chỉ thấy trang quản lý, học sinh thấy trang chủ + bản đồ
  const visibleItems = isAdmin
    ? navItems.filter(item => item.adminOnly)
    : navItems.filter(item => !item.adminOnly);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-md shadow-2xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:top-[73px] border-r border-gray-200
        `}
      >
        <div className="flex items-center justify-between p-4 lg:hidden border-b border-gray-200">
          <h2 className="font-bold text-gray-900 text-lg">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {visibleItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-50 to-purple-50 text-primary-700 font-semibold shadow-md border border-primary-200'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:shadow-sm'
                }`
              }
            >
              <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>{item.label}</span>
              {item.adminOnly && (
                <span className="ml-auto text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                  Admin
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="text-xs text-gray-600">
            <p className="font-bold mb-1 text-primary-700">📚 Về dự án</p>
            <p className="text-gray-600 leading-relaxed">
              Học liệu số phù hợp CTGDPT 2018
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
