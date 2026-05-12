export interface SelectOption {
  value: string;
  label: string;
}

export interface HierarchyEntity {
  id: string;
  name: string;
  isActive?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface StructureNode {
  id: string;
  name: string;
  type: 'university' | 'faculty' | 'department' | 'field' | 'level';
  children: StructureNode[];
  count: number;
}
