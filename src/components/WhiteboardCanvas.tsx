import React, { useEffect, useState } from 'react';
import { Excalidraw, exportToCanvas } from '@excalidraw/excalidraw';
import useAppStore from '../store/appStore';

const WhiteboardCanvas: React.FC = () => {
  const { 
    currentTool, strokeColor, backgroundColor, strokeWidth, 
    fontSize, showGrid, snapToGrid, gridSize, zoom 
  } = useAppStore();
  
  const [excalidrawAPI, setExcalidrawAPI] = useState<any>(null);

  useEffect(() => {
    if (!excalidrawAPI) return;
    
    // Update Excalidraw tool
    const toolMap: Record<string, string> = {
      'select': 'selection',
      'rectangle': 'rectangle',
      'ellipse': 'ellipse',
      'arrow': 'arrow',
      'line': 'line',
      'pencil': 'freedraw',
      'text': 'text',
      'eraser': 'eraser',
      'hand': 'hand'
    };
    
    excalidrawAPI.setActiveTool({
      type: toolMap[currentTool] || 'selection'
    });
  }, [currentTool, excalidrawAPI]);

  useEffect(() => {
    if (!excalidrawAPI) return;
    
    // Update Excalidraw properties
    excalidrawAPI.updateScene({
      appState: {
        currentItemStrokeColor: strokeColor,
        currentItemBackgroundColor: backgroundColor === 'transparent' ? 'transparent' : backgroundColor,
        currentItemStrokeWidth: strokeWidth,
        currentItemFontSize: fontSize,
        gridSize: showGrid ? gridSize : null,
        shouldSnap: snapToGrid
      }
    });
  }, [excalidrawAPI, strokeColor, backgroundColor, strokeWidth, fontSize, showGrid, snapToGrid, gridSize]);

  useEffect(() => {
    if (!excalidrawAPI) return;
    
    // Update zoom
    excalidrawAPI.updateScene({
      appState: {
        zoom: { value: zoom }
      }
    });
  }, [excalidrawAPI, zoom]);

  const onExcalidrawAPIChange = (api: any) => {
    setExcalidrawAPI(api);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-50">
      <Excalidraw
        initialData={{
          appState: {
            viewBackgroundColor: "#f8f9fa",
            currentItemStrokeColor: strokeColor,
            currentItemBackgroundColor: backgroundColor,
            currentItemStrokeWidth: strokeWidth,
            currentItemFontSize: fontSize,
            gridSize: showGrid ? gridSize : null,
            shouldSnap: snapToGrid
          }
        }}
        excalidrawAPI={onExcalidrawAPIChange}
        UIOptions={{
          canvasActions: {
            changeViewBackgroundColor: false,
            clearCanvas: true,
            export: false,
            loadScene: false,
            saveAsImage: false,
            saveToActiveFile: false,
            theme: false,
            saveScene: false
          },
          tools: false,
          menu: false 
        }}
      />
    </div>
  );
};

export default WhiteboardCanvas;