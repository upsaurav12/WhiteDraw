import React from 'react';
import useAppStore from '../store/appStore';

const PropertiesPanel: React.FC = () => {
  const { 
    strokeColor, backgroundColor, strokeWidth, fontSize,
    setStrokeColor, setBackgroundColor, setStrokeWidth, setFontSize
  } = useAppStore();

  return (
    <div className="bg-white border-l border-gray-200 p-4 w-64 overflow-y-auto">
      <h3 className="text-sm font-medium mb-3">Properties</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-xs text-gray-500">Stroke</label>
          <div className="flex items-center space-x-2">
            <input 
              type="color" 
              value={strokeColor}
              onChange={(e) => setStrokeColor(e.target.value)}
              className="w-8 h-8 rounded cursor-pointer"
            />
            <input 
              type="text" 
              value={strokeColor}
              onChange={(e) => setStrokeColor(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-xs text-gray-500">Fill</label>
          <div className="flex items-center space-x-2">
            <input 
              type="color" 
              value={backgroundColor === 'transparent' ? '#ffffff' : backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-8 h-8 rounded cursor-pointer"
            />
            <select
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="transparent">No fill</option>
              <option value={backgroundColor !== 'transparent' ? backgroundColor : '#ffffff'}>Solid color</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-xs text-gray-500">Stroke Width</label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="1"
              max="10"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(parseInt(e.target.value))}
              className="flex-1"
            />
            <span className="text-sm">{strokeWidth}px</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-xs text-gray-500">Font Size</label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="12"
              max="48"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="flex-1"
            />
            <span className="text-sm">{fontSize}px</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;