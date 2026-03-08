import { Menu, BookOpen } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
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
                  Học liệu số - Ngữ văn THCS (Lớp 7-9)
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block px-4 py-1.5 bg-gradient-to-r from-primary-50 to-purple-50 text-primary-700 text-sm font-semibold rounded-full border border-primary-200 shadow-sm">
              Học sinh THCS
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
