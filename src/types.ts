export interface AppState {
  currentTool: ToolType;
  strokeColor: string;
  backgroundColor: string; 
  strokeWidth: number;
  fontSize: number;
  showGrid: boolean;
  snapToGrid: boolean;
  gridSize: number;
  isFullScreen: boolean;
  zoom: number;
}

export type ToolType = 
  | 'select'
  | 'rectangle'
  | 'ellipse'
  | 'arrow'
  | 'line'
  | 'pencil'
  | 'text'
  | 'eraser'
  | 'hand';