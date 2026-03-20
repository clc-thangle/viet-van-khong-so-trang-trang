import { useState, useRef, useEffect } from 'react';
import { Menu, BookOpen, LogOut, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    setDropdownOpen(false);
    await signOut();
  };

  // Ưu tiên: họ tên đầy đủ → username → phần trước @ của email
  const displayName = (user?.user_metadata?.full_name || '').trim()
    || (user?.user_metadata?.username || '').trim()
    || user?.email?.split('@')[0]
    || 'Học sinh';

  // Lấy avatar từ Google hoặc tạo avatar chữ cái đầu
  const avatarUrl = user?.user_metadata?.avatar_url;
  const initials = displayName.charAt(0).toUpperCase();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <div className="px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-xl hover:bg-gradient-to-br hover:from-primary-50 hover:to-purple-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-primary-500 via-primary-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-primary-700 to-purple-700 bg-clip-text text-transparent">
                  VIẾT VĂN KHÔNG SỢ TRẮNG TRANG
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block font-medium">
                  Học liệu số - Ngữ văn THCS (Lớp 6-9)
                </p>
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-2" ref={dropdownRef}>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-primary-200"
              >
                {/* Avatar */}
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={displayName}
                    className="w-8 h-8 rounded-full object-cover border-2 border-primary-200"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {initials}
                  </div>
                )}
                <span className="hidden sm:block text-sm font-semibold text-gray-700 max-w-[120px] truncate">
                  {displayName}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      {avatarUrl ? (
                        <img src={avatarUrl} alt={displayName} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {initials}
                        </div>
                      )}
                      <div className="overflow-hidden">
                        <p className="font-semibold text-gray-900 text-sm truncate">{displayName}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Profile */}
                  <button
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 transition-colors"
                    onClick={() => { setDropdownOpen(false); navigate('/profile'); }}
                  >
                    <User className="w-4 h-4 text-gray-500" />
                    Hồ sơ của tôi
                  </button>

                  {/* Logout */}
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
