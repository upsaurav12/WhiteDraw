import React from 'react';
import Toolbar from './components/Toolbar';
import ToolPanel from './components/ToolPanel';
import PropertiesPanel from './components/PropertiesPanel';
import WhiteboardCanvas from './components/WhiteboardCanvas';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Toolbar />
      
      <div className="flex flex-1 overflow-hidden">
        <ToolPanel />
        
        <main className="flex-1 relative">
          <WhiteboardCanvas />
        </main>
        
        <PropertiesPanel />
      </div>
    </div>
  );
}

export default App;