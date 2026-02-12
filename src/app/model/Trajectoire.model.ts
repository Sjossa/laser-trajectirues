export interface Pen {
  color: string;
  power: number;
}

export interface Trajectory {
  id: number;
  path: string;
  pen: Pen;
}

export interface TrajectoryData {
  width: number;
  height: number;
  trajectories: Trajectory[];
}
