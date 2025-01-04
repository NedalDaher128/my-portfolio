import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
const App = lazy(() => import('./app.tsx'));

import './index.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense  fallback={<div>Loading ... </div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
