# VIẾT VĂN KHÔNG SỢ TRẮNG TRANG

Học liệu số hỗ trợ học sinh THCS (lớp 7-9) rèn luyện kỹ năng viết đoạn văn nghị luận theo Chương trình Giáo dục phổ thông 2018.

## 🎯 Mục tiêu

- Giúp học sinh nắm vững quy trình viết đoạn văn nghị luận (4 bước)
- Cung cấp thẻ nhiệm vụ phân hóa theo 3 mức độ
- Hỗ trợ AI gợi ý (không viết thay)
- Tự đánh giá năng lực viết văn

## 📚 Các module chính

### 1. Bản đồ viết văn
Hướng dẫn 4 bước viết đoạn văn:
- **Bước 1:** Hiểu đề
- **Bước 2:** Tạo ý
- **Bước 3:** Viết
- **Bước 4:** Tự kiểm tra

### 2. Thẻ nhiệm vụ số
Bài tập phân hóa 3 mức độ:
- ⭐ **Dễ:** Phù hợp khi mới bắt đầu
- 🎯 **Trung bình:** Dành cho học sinh đã nắm cơ bản
- 🔥 **Khó:** Thử thách nâng cao

### 3. AI trợ lý viết văn
- Gợi ý định hướng, không đưa ra đáp án hoàn chỉnh
- Đặt câu hỏi ngược để kích thích tư duy
- Khuyến khích học sinh tự làm

### 4. Phiếu tự đánh giá
- Đánh giá năng lực theo 4 nhóm tiêu chí
- Thống kê kết quả chi tiết
- Gợi ý cải thiện

## 🛠️ Công nghệ sử dụng

- **React 18** - Thư viện UI
- **React Router v6** - Routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## 📦 Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build
```

## 📁 Cấu trúc thư mục

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Sidebar, Layout)
│   ├── writing-map/     # Components cho module Bản đồ viết văn
│   ├── tasks/           # Components cho module Thẻ nhiệm vụ
│   ├── ai-assistant/    # Components cho module AI trợ lý
│   ├── self-assessment/ # Components cho module Tự đánh giá
│   └── common/          # Shared components
├── pages/               # Page components
│   ├── Home.jsx
│   ├── WritingMap.jsx
│   ├── Tasks.jsx
│   ├── AIAssistant.jsx
│   └── SelfAssessment.jsx
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── data/                # Static data, constants
├── contexts/            # React contexts
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Thiết kế UI/UX

- Giao diện đơn giản, học thuật, thân thiện
- Responsive design (mobile, tablet, desktop)
- Màu sắc chủ đạo: Xanh dương (primary), tím (AI), xanh lá (success)
- Typography: Inter (body), Lexend (headings)

## 📖 Nguyên tắc thiết kế học liệu

1. **Không cung cấp bài văn mẫu hoàn chỉnh**
   - Chỉ hướng dẫn cách làm
   - Gợi mở tư duy

2. **Phân hóa theo trình độ**
   - 3 mức độ nhiệm vụ
   - Học sinh tự chọn theo năng lực

3. **Tương tác chủ động**
   - Học sinh tự khám phá
   - Tự đánh giá năng lực

4. **Phù hợp CTGDPT 2018**
   - Phát triển năng lực viết văn nghị luận
   - Tư duy phản biện

## 🚀 Phát triển tiếp

### Các tính năng có thể bổ sung:

- [ ] Tích hợp AI thật (OpenAI API, Gemini API)
- [ ] Lưu tiến độ học tập (LocalStorage hoặc Backend)
- [ ] Thêm ngân hàng đề bài
- [ ] Chức năng export bài viết (PDF, Word)
- [ ] Hệ thống điểm và huy hiệu
- [ ] Chế độ dark mode
- [ ] Chia sẻ bài viết với giáo viên
- [ ] Forum thảo luận

## 📝 License

Dự án này được tạo ra cho mục đích giáo dục và tham gia dự thi thiết kế học liệu số.

---

**Lưu ý:** Đây là khung dự án ban đầu. Các chức năng chi tiết (đặc biệt là AI) cần được phát triển thêm.
