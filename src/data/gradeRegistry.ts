import type { GradeData } from "./writingMapConstants";

// Lazy imports - data files will be loaded on demand
let _grade6Data: GradeData | null = null;
let _grade7Data: GradeData | null = null;
let _grade8Data: GradeData | null = null;
let _grade9Data: GradeData | null = null;

export const getGradeData = async (grade: number): Promise<GradeData> => {
  switch (grade) {
    case 6:
      if (!_grade6Data) {
        const mod = await import("./grade6Data");
        _grade6Data = mod.grade6Data;
      }
      return _grade6Data;
    case 7:
      if (!_grade7Data) {
        const mod = await import("./grade7Data");
        _grade7Data = mod.grade7Data;
      }
      return _grade7Data;
    case 8:
      if (!_grade8Data) {
        const mod = await import("./grade8Data");
        _grade8Data = mod.grade8Data;
      }
      return _grade8Data;
    case 9:
      if (!_grade9Data) {
        const mod = await import("./grade9Data");
        _grade9Data = mod.grade9Data;
      }
      return _grade9Data;
    default:
      throw new Error(`Unsupported grade: ${grade}`);
  }
};

export const AVAILABLE_GRADES = [6, 7, 8, 9] as const;
export type AvailableGrade = (typeof AVAILABLE_GRADES)[number];
