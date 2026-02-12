export interface Pen {
  color: string;
  power: number;
}

export interface Trajectoire {
  id: number;
  path: string;
  pen: Pen;
}

export interface TrajectoireData {
  width: number;
  height: number;
  trajectories: Trajectoire[];
}
