import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DressMenu } from './ContextHook/ContextMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <DressMenu>
            <App />
        </DressMenu>
    </StrictMode>
)
