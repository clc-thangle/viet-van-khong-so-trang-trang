import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import type { WritingSection } from "../data/writingMapConstants";

/**
 * Tạo một hidden DOM element chứa nội dung bài viết với format đẹp,
 * sau đó dùng html2canvas để render ra canvas và jsPDF để xuất PDF.
 */
export const generateEssayPdf = async (
  essayParagraphs: Record<string, string>,
  writingSections: WritingSection[],
  topic?: string
): Promise<void> => {
  // Tạo element ẩn để render nội dung bài viết
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.style.width = "794px"; // A4 width in px at 96dpi
  container.style.padding = "60px";
  container.style.backgroundColor = "#ffffff";
  container.style.fontFamily = "'Segoe UI', 'Roboto', 'Arial', sans-serif";
  container.style.color = "#1a1a1a";
  container.style.lineHeight = "1.8";
  container.style.boxSizing = "border-box";

  const wordCount = Object.values(essayParagraphs)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  const today = new Date();
  const dateStr = `${today.getDate().toString().padStart(2, "0")}/${(today.getMonth() + 1).toString().padStart(2, "0")}/${today.getFullYear()}`;

  // Build paragraphs HTML dynamically from writingSections
  const paragraphsHtml = writingSections
    .map((section) => {
      const text = (essayParagraphs[section.key] || "").trim();
      if (!text) return "";
      return `<p style="text-indent: 2em; margin: 0 0 16px 0; text-align: justify;">${text}</p>`;
    })
    .filter(Boolean)
    .join("\n");

  container.innerHTML = `
    <div style="border-bottom: 3px solid #3b82f6; padding-bottom: 20px; margin-bottom: 30px;">
      <h1 style="font-size: 26px; font-weight: bold; color: #1e40af; margin: 0 0 8px 0; letter-spacing: 0.5px;">
        Bài văn nghị luận
      </h1>
      ${topic ? `<p style="font-size: 16px; color: #4b5563; margin: 0 0 6px 0;"><strong>Đề bài:</strong> ${topic}</p>` : ""}
      <p style="font-size: 13px; color: #9ca3af; margin: 0;">
        Ngày tạo: ${dateStr} &nbsp;|&nbsp; Số từ: ~${wordCount} từ
      </p>
    </div>

    <div style="font-size: 15px;">
      ${paragraphsHtml}
    </div>

    <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 40px;">
      <p style="font-size: 11px; color: #9ca3af; text-align: center; margin: 0;">
        Được tạo bởi "Viết Văn Không Sợ Trắng Trang" - Bản đồ viết bài văn số
      </p>
    </div>
  `;

  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const pdf = new jsPDF("p", "mm", "a4");
    let heightLeft = imgHeight;
    let position = 0;

    // Trang đầu tiên
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Thêm trang nếu nội dung dài
    while (heightLeft > 0) {
      position = position - pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("bai-van-nghi-luan.pdf");
  } finally {
    document.body.removeChild(container);
  }
};
