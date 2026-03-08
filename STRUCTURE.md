# CẤU TRÚC DỰ ÁN & HƯỚNG DẪN MỞ RỘNG

## 📂 Cấu trúc thư mục hiện tại

```
viet-van-khong-so-trang-trang/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx         # Main layout wrapper
│   │   │   ├── Header.jsx         # Header với logo và title
│   │   │   └── Sidebar.jsx        # Sidebar navigation
│   │   ├── writing-map/           # (Sẵn sàng mở rộng)
│   │   ├── tasks/                 # (Sẵn sàng mở rộng)
│   │   ├── ai-assistant/          # (Sẵn sàng mở rộng)
│   │   ├── self-assessment/       # (Sẵn sàng mở rộng)
│   │   └── common/                # (Sẵn sàng mở rộng)
│   ├── pages/
│   │   ├── Home.jsx               # Trang chủ
│   │   ├── WritingMap.jsx         # Bản đồ viết văn (4 bước)
│   │   ├── Tasks.jsx              # Thẻ nhiệm vụ số
│   │   ├── AIAssistant.jsx        # AI trợ lý
│   │   └── SelfAssessment.jsx     # Tự đánh giá
│   ├── hooks/                     # (Sẵn sàng mở rộng)
│   ├── utils/                     # (Sẵn sàng mở rộng)
│   ├── data/                      # (Sẵn sàng mở rộng)
│   ├── contexts/                  # (Sẵn sàng mở rộng)
│   ├── App.jsx                    # Router chính
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Tailwind + custom styles
├── public/                        # Static assets
├── index.html                     # HTML template
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies
└── README.md                      # Hướng dẫn dự án
```

## 🎯 Các component đã tạo

### Layout Components

#### 1. Layout.jsx
- Wrapper chính cho toàn bộ ứng dụng
- Quản lý state sidebar (mobile responsive)
- Tích hợp Header và Sidebar

#### 2. Header.jsx
- Logo và tên dự án
- Nút toggle menu (mobile)
- Badge hiển thị đối tượng học sinh

#### 3. Sidebar.jsx
- Navigation menu với 5 routes
- Responsive (overlay trên mobile, fixed trên desktop)
- Active state cho route hiện tại
- Footer với thông tin dự án

### Page Components

#### 1. Home.jsx
- Hero section với CTA buttons
- Feature grid (4 modules chính)
- Thông tin về dự án

#### 2. WritingMap.jsx
- 4 bước viết văn (Hiểu đề - Tạo ý - Viết - Tự kiểm tra)
- Tab navigation giữa các bước
- Nội dung chi tiết cho từng bước
- Navigation buttons (trước/sau)

#### 3. Tasks.jsx
- Filter tabs (Tất cả, Dễ, Trung bình, Khó)
- Task cards với level badges
- 8 nhiệm vụ mẫu phân hóa 3 mức độ
- Hướng dẫn sử dụng

#### 4. AIAssistant.jsx
- Chat interface (mẫu UI)
- Suggested questions
- Message history
- Guidelines và ví dụ tương tác

#### 5. SelfAssessment.jsx
- 4 nhóm tiêu chí đánh giá
- Radio buttons (Làm được / Một phần / Chưa làm được)
- Kết quả thống kê chi tiết
- Phân loại năng lực

## 🎨 Styling

### Tailwind Configuration
- Custom color palette (primary, secondary, success)
- Custom fonts (Inter, Lexend)
- Extended theme

### Reusable Classes (index.css)
- `.btn-primary` - Nút chính
- `.btn-secondary` - Nút phụ
- `.card` - Thẻ nội dung
- `.badge-easy`, `.badge-medium`, `.badge-hard` - Badges mức độ

## 🚀 Hướng dẫn mở rộng

### 1. Thêm Component mới trong module

Ví dụ: Tạo component `StepCard` cho Writing Map:

```jsx
// src/components/writing-map/StepCard.jsx
const StepCard = ({ step, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`card p-4 ${isActive ? 'ring-2 ring-primary-500' : ''}`}
    >
      {/* Nội dung */}
    </button>
  );
};

export default StepCard;
```

### 2. Thêm Custom Hook

Ví dụ: Hook quản lý progress:

```jsx
// src/hooks/useProgress.js
import { useState, useEffect } from 'react';

export const useProgress = (key) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(progress));
  }, [progress, key]);

  return [progress, setProgress];
};
```

### 3. Thêm Data/Constants

```jsx
// src/data/topics.js
export const writingTopics = [
  {
    id: 1,
    title: 'Lợi ích của việc đọc sách',
    category: 'Giáo dục',
    difficulty: 'easy',
  },
  // ...
];
```

### 4. Tích hợp AI thật

```jsx
// src/utils/ai.js
export const callAI = async (prompt) => {
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${YOUR_API_KEY}`,
    },
    body: JSON.stringify({ prompt }),
  });

  return await response.json();
};
```

### 5. Thêm Context cho State Management

```jsx
// src/contexts/AppContext.jsx
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState({});

  return (
    <AppContext.Provider value={{ user, setUser, progress, setProgress }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
```

## 📝 Checklist phát triển tiếp

### Chức năng cơ bản
- [ ] Thêm animation/transitions
- [ ] Loading states
- [ ] Error handling
- [ ] Form validation
- [ ] Toast notifications

### Lưu trữ
- [ ] LocalStorage cho progress
- [ ] SessionStorage cho draft
- [ ] IndexedDB cho offline

### Tích hợp AI
- [ ] OpenAI API / Gemini API
- [ ] Rate limiting
- [ ] Error handling
- [ ] Streaming responses

### UX nâng cao
- [ ] Dark mode
- [ ] Keyboard shortcuts
- [ ] Print-friendly layout
- [ ] Export PDF/Word
- [ ] Share functionality

### Testing
- [ ] Unit tests (Vitest)
- [ ] Component tests (React Testing Library)
- [ ] E2E tests (Playwright)

### Performance
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Image optimization
- [ ] Bundle analysis

## 🎓 Best Practices

1. **Component Organization**
   - Một component một file
   - Props validation (PropTypes hoặc TypeScript)
   - Meaningful component names

2. **State Management**
   - Local state cho UI state
   - Context cho shared state
   - Consider Zustand/Redux cho complex state

3. **Styling**
   - Sử dụng Tailwind utilities
   - Tránh inline styles
   - Tái sử dụng classes qua @apply

4. **Performance**
   - Sử dụng React.memo cho expensive components
   - useCallback/useMemo khi cần
   - Lazy load routes

5. **Accessibility**
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation
   - Color contrast

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)

---

**Ghi chú:** Đây là khung dự án foundation. Các chức năng chi tiết cần được implement dựa trên requirements cụ thể.
