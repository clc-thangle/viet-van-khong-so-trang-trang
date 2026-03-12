import { useState } from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

const AIAssistant = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'assistant',
      content: 'Xin chào! Mình là AI trợ lý viết văn. Mình sẽ giúp em với các gợi ý và hướng dẫn, nhưng không viết thay em nhé. Em cần trợ giúp gì?',
    },
  ]);

  const suggestedQuestions = [
    'Làm thế nào để phân tích đề bài?',
    'Giúp em tạo dàn ý cho đề: "Lợi ích của đọc sách"',
    'Câu mở đoạn nên viết như thế nào?',
    'Em cần dẫn chứng gì cho luận điểm này?',
  ];

  const handleSend = () => {
    if (!userInput.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      { type: 'user', content: userInput },
    ];

    // Simulate AI response
    const aiResponse = {
      type: 'assistant',
      content: 'Đây là phản hồi mẫu từ AI trợ lý. Trong phiên bản thực tế, đây sẽ là câu trả lời chi tiết và có ích từ AI, giúp em định hướng cách làm bài mà không đưa ra đáp án hoàn chỉnh.',
    };

    setMessages([...newMessages, aiResponse]);
    setUserInput('');
  };

  const handleSuggestedQuestion = (question: string) => {
    setUserInput(question);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          AI trợ lý viết văn
        </h1>
        <p className="text-gray-600">
          Nhận gợi ý và hướng dẫn, không phải bài văn hoàn chỉnh
        </p>
      </div>

      {/* Chat Container */}
      <div className="card overflow-hidden">
        {/* Messages Area */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[80%] rounded-lg p-4
                  ${message.type === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-900 shadow-sm'
                  }
                `}
              >
                {message.type === 'assistant' && (
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-sm text-purple-600">AI trợ lý</span>
                  </div>
                )}
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="px-6 py-4 bg-white border-t">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Gợi ý câu hỏi:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-left px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 bg-white border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Nhập câu hỏi của em..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              onClick={handleSend}
              className="btn-primary flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Gửi
            </button>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
        <h3 className="font-semibold text-gray-900 mb-2">
          🤖 Nguyên tắc hoạt động của AI trợ lý
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Gợi ý định hướng:</strong> AI sẽ hướng dẫn em cách làm, không đưa ra đáp án hoàn chỉnh</li>
          <li>• <strong>Đặt câu hỏi ngược:</strong> AI có thể đặt câu hỏi để kích thích tư duy của em</li>
          <li>• <strong>Phản hồi theo ngữ cảnh:</strong> AI hiểu bối cảnh câu hỏi để trả lời phù hợp</li>
          <li>• <strong>Khuyến khích tự làm:</strong> Mục tiêu là giúp em tự viết, không phải thay em viết</li>
        </ul>
      </div>

      {/* Example Interaction */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 mb-4">
          💬 Ví dụ tương tác
        </h3>
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm font-medium text-blue-900 mb-1">Em hỏi:</p>
            <p className="text-gray-700">"Giúp em viết đoạn văn về lợi ích của đọc sách"</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm font-medium text-green-900 mb-1">AI trả lời:</p>
            <p className="text-gray-700">
              "Thay vì viết thay em, mình sẽ hướng dẫn em:<br/>
              1. Em hãy thử liệt kê 3-4 lợi ích mà em nghĩ đến khi đọc sách<br/>
              2. Với mỗi lợi ích, em có thể nghĩ đến ví dụ cụ thể nào?<br/>
              3. Em muốn sắp xếp các lợi ích này theo thứ tự nào?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
