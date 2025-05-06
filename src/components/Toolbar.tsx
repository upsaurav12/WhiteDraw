import React from 'react';
import { 
  Undo, Redo, Trash, Download, Share, ZoomIn, ZoomOut, Grid3X3, 
  Maximize, Minimize, LayoutGrid
} from 'lucide-react';
import useAppStore from '../store/appStore';

const Toolbar: React.FC = () => {
  const { 
    showGrid, snapToGrid, isFullScreen, zoom,
    toggleGrid, toggleSnapToGrid, toggleFullScreen, setZoom
  } = useAppStore();

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 0.1, 0.5));
  };

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button className="toolbar-btn">
          <Undo size={18} />
        </button>
        <button className="toolbar-btn">
          <Redo size={18} />
        </button>
        <div className="h-6 border-r border-gray-300 mx-1"></div>
        <button className="toolbar-btn">
          <Trash size={18} />
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="toolbar-btn">
          <Download size={18} />
        </button>
        <button className="toolbar-btn">
          <Share size={18} />
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          className={`toolbar-btn ${showGrid ? 'bg-blue-100 text-blue-600' : ''}`}
          onClick={toggleGrid}
          title="Toggle Grid"
        >
          <Grid3X3 size={18} />
        </button>
        <button
          className={`toolbar-btn ${snapToGrid ? 'bg-blue-100 text-blue-600' : ''}`}
          onClick={toggleSnapToGrid}
          title="Toggle Snap to Grid"
        >
          <LayoutGrid size={18} />
        </button>
        <div className="flex items-center space-x-1 px-2">
          <button className="toolbar-btn" onClick={handleZoomOut}>
            <ZoomOut size={18} />
          </button>
          <span className="text-sm font-medium">{Math.round(zoom * 100)}%</span>
          <button className="toolbar-btn" onClick={handleZoomIn}>
            <ZoomIn size={18} />
          </button>
        </div>
        <button className="toolbar-btn" onClick={toggleFullScreen}>
          {isFullScreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Toolbar;