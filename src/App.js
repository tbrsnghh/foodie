import React from 'react';
import { Button, Space, DatePicker, version } from 'antd';
import Header from './components/header/Header';

const App = () => (
  <div style={{ padding: '0 24px' }}>
    <Header/>
    <h1>antd version: {version}</h1>
    <Space>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
    </Space>
  </div>
);

export default App;