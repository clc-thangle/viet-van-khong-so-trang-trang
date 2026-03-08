# 📸 PREVIEW CÁC TRANG

## 🏠 Trang chủ (Home)

**URL:** `/`

**Nội dung:**
- Hero section với tiêu đề chính và CTA buttons
- Feature grid hiển thị 4 module chính:
  - Bản đồ viết văn (icon: Map)
  - Thẻ nhiệm vụ (icon: ClipboardList)
  - AI trợ lý (icon: Bot)
  - Tự đánh giá (icon: CheckSquare)
- Info box về dự án và nguyên tắc

**Interactions:**
- Click vào feature cards để navigate đến module tương ứng
- 2 CTA buttons trong hero section

---

## 🗺️ Bản đồ viết văn (Writing Map)

**URL:** `/writing-map`

**Nội dung:**
- 4 step cards (Hiểu đề, Tạo ý, Viết, Tự kiểm tra)
- Active step content area với:
  - Icon và title
  - Description
  - Danh sách các bước thực hiện
- Navigation buttons (Bước trước / Bước tiếp theo)
- Tips section

**Interactions:**
- Click vào step cards để chuyển bước
- Navigation buttons để di chuyển tuần tự
- Visual feedback khi active

**Color coding:**
- Bước 1: Blue
- Bước 2: Green
- Bước 3: Purple
- Bước 4: Orange

---

## 📝 Thẻ nhiệm vụ (Tasks)

**URL:** `/tasks`

**Nội dung:**
- Filter tabs (Tất cả, Dễ, Trung bình, Khó)
- Grid layout với 8 task cards:
  - Level badge (Dễ/Trung bình/Khó)
  - Estimated time
  - Task title
  - Description
  - Objective
  - "Bắt đầu làm bài" button
- Guidelines section

**Interactions:**
- Click filter tabs để lọc theo mức độ
- Hover effect trên cards
- Click button để bắt đầu (chưa implement logic)

**Badge colors:**
- Dễ: Green
- Trung bình: Yellow
- Khó: Red

---

## 🤖 AI trợ lý (AI Assistant)

**URL:** `/ai-assistant`

**Nội dung:**
- Chat interface với:
  - Messages area (scrollable)
  - Welcome message từ AI
  - User/AI message bubbles
- Suggested questions (4 gợi ý)
- Input area với textbox và Send button
- Guidelines về nguyên tắc AI
- Example interaction

**Interactions:**
- Type vào input box
- Click suggested questions để điền vào input
- Click Send hoặc Enter để gửi
- AI response (hiện tại là mock data)

**Note:** Cần tích hợp API thật ở phase tiếp theo

---

## ✅ Tự đánh giá (Self Assessment)

**URL:** `/self-assessment`

**Nội dung:**
- 4 category cards (Hiểu đề, Tạo ý, Viết, Tự kiểm tra)
- Mỗi category có 3-4 câu hỏi với radio buttons:
  - Làm được (green)
  - Làm được một phần (yellow)
  - Chưa làm được (red)
- "Xem kết quả đánh giá" button
- Guidelines section

**Result view (sau khi submit):**
- Score percentage (large display)
- Level classification (Xuất sắc/Khá/Trung bình/Cần cố gắng)
- Statistics (4 boxes):
  - Tổng câu hỏi
  - Làm được
  - Làm được một phần
  - Chưa làm được
- "Làm lại đánh giá" button

**Interactions:**
- Select radio buttons
- Submit để xem kết quả
- Reset để làm lại
- Scroll to top khi có kết quả

---

## 🎨 Layout chung

**Header:**
- Logo icon (BookOpen)
- Title: "VIẾT VĂN KHÔNG SỢ TRẮNG TRANG"
- Subtitle: "Học liệu số - Ngữ văn THCS (Lớp 7-9)"
- Badge: "Học sinh THCS"
- Menu toggle (mobile)

**Sidebar:**
- 5 navigation items (active state)
- Icons cho mỗi item
- Footer với thông tin dự án
- Responsive:
  - Desktop: Fixed sidebar
  - Mobile: Overlay sidebar with close button

**Responsive breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🎨 Color Palette

**Primary (Blue):**
- 50-900 shades
- Main: #0ea5e9 (500)
- Dark: #0369a1 (700)

**Secondary (Purple):**
- Used for AI features
- Main: #d946ef (500)

**Success (Green):**
- Used for positive actions
- Main: #22c55e (500)

**Semantic:**
- Yellow: Warning/Medium level
- Red: Error/Hard level
- Gray: Neutral elements

---

## 📱 Responsive Features

**Mobile (< 768px):**
- Hamburger menu
- Stacked layouts
- Full-width cards
- Collapsible sections

**Tablet (768px - 1024px):**
- 2-column grids
- Visible sidebar (can toggle)
- Medium spacing

**Desktop (> 1024px):**
- Multi-column layouts
- Fixed sidebar
- Maximum content width: 1280px
- Generous spacing

---

## ⚡ Interactive Elements

**Buttons:**
- Primary: Blue background, white text
- Secondary: White background, blue border
- Hover states: Darker shade
- Focus states: Ring outline

**Cards:**
- White background
- Shadow on hover
- Rounded corners (xl)
- Smooth transitions

**Navigation:**
- Active state: Blue background + bold text
- Hover state: Gray background
- Smooth transitions

**Forms:**
- Focus rings on inputs
- Validation states (future)
- Clear error messages (future)

---

## 🚀 Cách xem preview

1. Chạy dev server:
```bash
npm run dev
```

2. Mở browser tại: `http://localhost:5173`

3. Navigate qua các trang từ sidebar hoặc links trong trang

4. Test responsive bằng Chrome DevTools (F12 > Toggle device toolbar)

---

**Note:** Đây là UI/UX preview. Logic backend (AI, lưu progress, etc.) cần implement ở phase tiếp theo.
