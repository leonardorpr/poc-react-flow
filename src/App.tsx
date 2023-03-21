import { ReactFlowProvider } from 'reactflow'

import { Flow } from 'pages'

function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  )
}

export default App
