import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Editor from './editor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Editor />
  </StrictMode>,
)
