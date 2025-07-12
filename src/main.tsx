import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Note: We don't need to import the i18n config here since it's scoped to the /for-gps section
// and will be loaded only when that section is accessed

createRoot(document.getElementById("root")!).render(<App />);
