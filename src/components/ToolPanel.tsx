import React from 'react';
import { 
  MousePointer, Square, Circle, ArrowRight, Minus,
  Pencil, Type, Eraser, Hand 
} from 'lucide-react';
import useAppStore from '../store/appStore';
import { ToolType } from '../types';

interface ToolButtonProps {
  tool: ToolType;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const ToolButton: React.FC<ToolButtonProps> = ({ tool, icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-2 rounded transition-colors ${
        isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
      }`}
      title={label}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

const ToolPanel: React.FC = () => {
  const { currentTool, setCurrentTool } = useAppStore();

  const tools: { tool: ToolType; icon: React.ReactNode; label: string }[] = [
    { tool: 'select', icon: <MousePointer size={18} />, label: 'Select' },
    { tool: 'rectangle', icon: <Square size={18} />, label: 'Rectangle' },
    { tool: 'ellipse', icon: <Circle size={18} />, label: 'Ellipse' },
    { tool: 'arrow', icon: <ArrowRight size={18} />, label: 'Arrow' },
    { tool: 'line', icon: <Minus size={18} />, label: 'Line' },
    { tool: 'pencil', icon: <Pencil size={18} />, label: 'Pencil' },
    { tool: 'text', icon: <Type size={18} />, label: 'Text' },
    { tool: 'eraser', icon: <Eraser size={18} />, label: 'Eraser' },
    { tool: 'hand', icon: <Hand size={18} />, label: 'Hand' },
  ];

  return (
    <div className="bg-white border-r border-gray-200 py-4 flex flex-col items-center space-y-2">
      {tools.map((toolData) => (
        <ToolButton
          key={toolData.tool}
          tool={toolData.tool}
          icon={toolData.icon}
          label={toolData.label}
          isActive={currentTool === toolData.tool}
          onClick={() => setCurrentTool(toolData.tool)}
        />
      ))}
    </div>
  );
};

export default ToolPanel;