import { useState, useEffect } from 'react';
import { Users, FileText, Eye, X, ChevronDown, ChevronUp } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Submission {
  id: string;
  user_id: string;
  username: string;
  full_name: string;
  grade: number;
  topic: string;
  essay_paragraphs: Record<string, string>;
  writing_sections: { key: string; label: string; order: number }[];
  submitted_at: string;
}

export default function Admin() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Submission | null>(null);
  const [filterGrade, setFilterGrade] = useState<number | 'all'>('all');
  const [expandedUser, setExpandedUser] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (!error && data) setSubmissions(data);
    setLoading(false);
  };

  // Nhóm bài nộp theo học sinh
  const grouped = submissions.reduce<Record<string, Submission[]>>((acc, sub) => {
    const key = sub.user_id;
    if (!acc[key]) acc[key] = [];
    acc[key].push(sub);
    return acc;
  }, {});

  const filtered = Object.entries(grouped).filter(([, subs]) =>
    filterGrade === 'all' ? true : subs.some(s => s.grade === filterGrade)
  );

  const totalStudents = Object.keys(grouped).length;
  const totalSubmissions = submissions.length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-primary-600 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-1">Quản lý bài nộp</h1>
        <p className="text-purple-100">Xem và quản lý bài viết của học sinh</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
          <div className="text-3xl font-bold text-primary-600">{totalStudents}</div>
          <div className="text-sm text-gray-500 mt-1 flex items-center justify-center gap-1">
            <Users className="w-4 h-4" /> Học sinh
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
          <div className="text-3xl font-bold text-purple-600">{totalSubmissions}</div>
          <div className="text-sm text-gray-500 mt-1 flex items-center justify-center gap-1">
            <FileText className="w-4 h-4" /> Bài nộp
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm font-semibold text-gray-600">Lọc theo lớp:</span>
        {(['all', 6, 7, 8, 9] as const).map(g => (
          <button
            key={g}
            onClick={() => setFilterGrade(g)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
              filterGrade === g
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'
            }`}
          >
            {g === 'all' ? 'Tất cả' : `Lớp ${g}`}
          </button>
        ))}
      </div>

      {/* Danh sách học sinh */}
      {loading ? (
        <div className="text-center py-12">
          <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-500">Đang tải...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Chưa có bài nộp nào</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(([userId, subs]) => {
            const firstSub = subs[0];
            const displayName = firstSub.full_name || firstSub.username;
            const isExpanded = expandedUser === userId;
            const filteredSubs = filterGrade === 'all' ? subs : subs.filter(s => s.grade === filterGrade);

            return (
              <div key={userId} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Row học sinh */}
                <button
                  onClick={() => setExpandedUser(isExpanded ? null : userId)}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{displayName}</p>
                      <p className="text-xs text-gray-500">@{firstSub.username}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">{filteredSubs.length} bài</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </div>
                </button>

                {/* Danh sách bài nộp của học sinh */}
                {isExpanded && (
                  <div className="border-t border-gray-100 divide-y divide-gray-50">
                    {filteredSubs.map(sub => (
                      <div key={sub.id} className="flex items-center justify-between px-5 py-3">
                        <div>
                          <p className="text-sm font-medium text-gray-800">{sub.topic}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full font-medium">
                              Lớp {sub.grade}
                            </span>
                            <span className="text-xs text-gray-400">
                              {new Date(sub.submitted_at).toLocaleDateString('vi-VN', {
                                day: '2-digit', month: '2-digit', year: 'numeric',
                                hour: '2-digit', minute: '2-digit'
                              })}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelected(sub)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          Xem
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modal xem bài viết */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-100">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{selected.topic}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-600">
                    {selected.full_name || selected.username}
                  </span>
                  <span className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full font-medium">
                    Lớp {selected.grade}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(selected.submitted_at).toLocaleDateString('vi-VN')}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1">
              <div className="prose prose-sm max-w-none space-y-3">
                {selected.writing_sections
                  .sort((a, b) => a.order - b.order)
                  .map(section => {
                    const text = (selected.essay_paragraphs[section.key] || '').trim();
                    return text ? (
                      <div key={section.key}>
                        <p className="text-gray-700 leading-relaxed indent-8">{text}</p>
                      </div>
                    ) : null;
                  })}
              </div>
              <p className="text-xs text-gray-400 mt-4 text-right">
                Tổng: ~{Object.values(selected.essay_paragraphs).join(' ').trim().split(/\s+/).length} từ
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
