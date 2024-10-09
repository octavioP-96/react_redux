import './App.css';
import { useState, Suspense, lazy } from 'react';
import { Loading } from './Loading';

// const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview')));
const MarkdownPreview = lazy(() => import('./MarkdownPreview').then((mod)=>({ default: mod.MarkdownPreview })));

function App() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState('Hello, **world**!');


  return (
    <>
      <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
      <label>
        <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </>
  );
}

export default App;

const delayForDemo = async (importPromise: Promise<any>): Promise<any> => {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Retrasar 2 segundos
  const mod = await importPromise;
  return { default: mod.MarkdownPreview };
};
