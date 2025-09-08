import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import 'antd/dist/reset.css';   // v5: estilo base reseteado
import { ConfigProvider } from 'antd';
import { RepositoryProvider } from './infrastructure/RepositoryProvider';

async function bootstrap() {
  try {
    const resp = await fetch('/amplify_outputs.json');
    const outputs = await resp.json();
    Amplify.configure(outputs);
  } catch {
    Amplify.configure({});
  }

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
}

bootstrap();
