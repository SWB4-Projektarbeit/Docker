export interface StatusEntry {
  status: 'CONFIRMED' | 'RESCHEDULED' | 'CANCELLED';
  successor: ScheduleEntry | null;
}

export interface ScheduleEntry {
  name: string;
  nameEn: string;
  startTime: string;
  endTime: string;
  roomUid: number;
  status: StatusEntry;
}

export interface Room {
  roomUid: number;
  roomName: string;
  roomType: string;
  roomTypeEn: string;
  templateUid: number;
  templateName: string;
  schedule: ScheduleEntry[];
  floor: string;
  requiredPermissions: string[];
}

export interface Building {
  buildingName: string;
  rooms: Room[];
}

export interface FlatRoom {
  uid: number;
  name: string;
  building: string;
  floor: string;
  templateUid: number;
  templateName: string;
  schedule: ScheduleEntry[];
}
