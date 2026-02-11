import './App.scss';

import { ConfigProvider, theme } from 'antd';
import MainLayout from 'layout/MainLayout';
import AIToolHome from 'pages/ai-tool/home';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <MainLayout>
        <AIToolHome />
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
