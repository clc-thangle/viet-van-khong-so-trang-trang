import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Lock, Eye, EyeOff, UserPlus, AlertCircle, User, UserCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username.length < 3) {
      setError('Tên đăng nhập phải có ít nhất 3 ký tự!');
      return;
    }
    if (!/^[a-zA-Z0-9_+\-().]+$/.test(username)) {
      setError('Tên đăng nhập không hợp lệ!');
      return;
    }
    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp!');
      return;
    }
    if (password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự!');
      return;
    }

    setLoading(true);

    try {
      // Gọi Edge Function tạo user (không gửi email, không rate limit)
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ username, password, fullName }),
        }
      );

      const result = await res.json();

      if (!res.ok || result.error) {
        setError(result.error ?? 'Đăng ký thất bại, vui lòng thử lại!');
        setLoading(false);
        return;
      }

      // Đăng nhập luôn sau khi tạo thành công
      const fakeEmail = `${username.toLowerCase()}@viet-van.local`;
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: fakeEmail,
        password,
      });

      if (signInError) {
        setError('Tạo tài khoản thành công! Vui lòng đăng nhập.');
        navigate('/login');
        return;
      }

      // Refresh session để đảm bảo metadata (full_name) được load đầy đủ
      await supabase.auth.refreshSession();

      navigate('/');
    } catch (_err) {
      setError('Không thể kết nối server, vui lòng thử lại!');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 via-primary-600 to-purple-600 rounded-2xl shadow-lg mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-700 to-purple-700 bg-clip-text text-transparent">
            VIẾT VĂN KHÔNG SỢ TRẮNG TRANG
          </h1>
          <p className="text-gray-500 text-sm mt-1">Tạo tài khoản mới</p>
        </div>

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <UserPlus className="w-5 h-5 text-primary-600" />
            <h2 className="text-xl font-bold text-gray-900">Đăng Ký</h2>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2 text-sm text-red-700">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Họ và tên */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Họ và tên <span className="text-gray-400 font-normal">(tuỳ chọn)</span>
              </label>
              <div className="relative">
                <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn A"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">Hiển thị trên bài nộp, có thể cập nhật sau</p>
            </div>

            {/* Tên đăng nhập */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Tên đăng nhập <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Có thể dùng số điện thoại"
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">Có thể dùng chữ cái, số hoặc số điện thoại</p>
            </div>

            {/* Mật khẩu */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Mật khẩu <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Ít nhất 6 ký tự"
                  required
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Xác nhận mật khẩu */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Xác nhận mật khẩu <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="Nhập lại mật khẩu"
                  required
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? 'Đang tạo tài khoản...' : 'Tạo tài khoản'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Đã có tài khoản?{' '}
            <Link to="/login" className="text-primary-600 font-semibold hover:underline">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
