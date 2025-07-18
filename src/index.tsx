import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ImageUploader } from './components/ImageUploader';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // 不適切なコードを検知するためのヘルパー
  <React.StrictMode>
    {/* <Counter initialValue={0} /> */}
    {/* <UseMemoSample /> */}
    <ImageUploader />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
