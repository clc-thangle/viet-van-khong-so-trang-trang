import { useState, useEffect } from 'react';
import { UserCircle, Save, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      setFullName(user.user_metadata?.full_name ?? '');
    }
  }, [user]);

  const displayName = user?.user_metadata?.username
    ?? user?.user_metadata?.full_name
    ?? user?.email?.split('@')[0]
    ?? 'Học sinh';

  const isGoogleUser = user?.app_metadata?.provider === 'google';

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      data: { full_name: fullName },
    });

    setLoading(false);

    if (error) {
      setError('Cập nhật thất bại, vui lòng thử lại!');
      return;
    }

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-lg mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-600"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Hồ sơ của tôi</h1>
      </div>

      {/* Avatar + Tên */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
        {user?.user_metadata?.avatar_url ? (
          <img
            src={user.user_metadata.avatar_url}
            alt={displayName}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary-200"
          />
        ) : (
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {displayName.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="font-bold text-gray-900 text-lg">{displayName}</p>
          <p className="text-sm text-gray-500">{user?.email}</p>
          {isGoogleUser && (
            <span className="inline-flex items-center gap-1 mt-1 text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">
              Google Account
            </span>
          )}
        </div>
      </div>

      {/* Form cập nhật */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
          <UserCircle className="w-5 h-5 text-primary-600" />
          Cập nhật thông tin
        </h2>

        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2 text-sm text-green-700">
            <CheckCircle className="w-4 h-4 shrink-0" />
            Cập nhật thành công!
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-sm text-red-700">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4">
          {/* Họ và tên */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Họ và tên
            </label>
            <input
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              placeholder="Ví dụ: Nguyễn Văn A"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
            />
            <p className="text-xs text-gray-400 mt-1">
              Tên này sẽ hiển thị trên bài nộp của bạn
            </p>
          </div>

          {/* Username (readonly) */}
          {user?.user_metadata?.username && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Tên đăng nhập
              </label>
              <input
                type="text"
                value={user.user_metadata.username}
                disabled
                className="w-full px-4 py-2.5 border border-gray-100 rounded-xl bg-gray-50 text-gray-500 cursor-not-allowed"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        </form>
      </div>
    </div>
  );
}
