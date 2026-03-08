import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import WritingMap from './pages/WritingMap';
import Tasks from './pages/Tasks';
import AIAssistant from './pages/AIAssistant';
import SelfAssessment from './pages/SelfAssessment';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing-map" element={<WritingMap />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/self-assessment" element={<SelfAssessment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
