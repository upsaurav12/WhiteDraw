import { create } from 'zustand';
import { AppState, ToolType } from '../types';

const useAppStore = create<AppState & {
  setCurrentTool: (tool: ToolType) => void;
  setStrokeColor: (color: string) => void;
  setBackgroundColor: (color: string) => void;
  setStrokeWidth: (width: number) => void;
  setFontSize: (size: number) => void;
  toggleGrid: () => void;
  toggleSnapToGrid: () => void;
  setGridSize: (size: number) => void;
  toggleFullScreen: () => void;
  setZoom: (zoom: number) => void;
}>((set) => ({
  currentTool: 'select',
  strokeColor: '#000000',
  backgroundColor: 'transparent',
  strokeWidth: 2,
  fontSize: 20,
  showGrid: true,
  snapToGrid: true,
  gridSize: 20,
  isFullScreen: false,
  zoom: 1,

  setCurrentTool: (tool) => set({ currentTool: tool }),
  setStrokeColor: (color) => set({ strokeColor: color }),
  setBackgroundColor: (color) => set({ backgroundColor: color }),
  setStrokeWidth: (width) => set({ strokeWidth: width }),
  setFontSize: (size) => set({ fontSize: size }),
  toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),
  toggleSnapToGrid: () => set((state) => ({ snapToGrid: !state.snapToGrid })),
  setGridSize: (size) => set({ gridSize: size }),
  toggleFullScreen: () => set((state) => ({ isFullScreen: !state.isFullScreen })),
  setZoom: (zoom) => set({ zoom }),
}));

export default useAppStore;