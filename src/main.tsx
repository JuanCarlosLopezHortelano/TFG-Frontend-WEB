import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import 'antd/dist/reset.css';   // v5: estilo base reseteado
import { ConfigProvider } from 'antd';
import { RepositoryProvider } from './infrastructure/RepositoryProvider';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorBgContainer: '#ffffff',
        borderRadius: 16,
        boxShadow: '8px 8px 16px #d1d9e6,-8px -8px 16px #ffffff', // sombra neumórfica
      },
    }}
  >
    <React.StrictMode>
    <Authenticator>
      <RepositoryProvider>
        <App />
      </RepositoryProvider>
    </Authenticator>
  </React.StrictMode>

  </ConfigProvider>  
  
);
