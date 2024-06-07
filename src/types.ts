export interface AppData {
  AuthorWorklog: AuthorWorklog;
}

export interface AuthorWorklog {
  activityMeta?: ActivityMetaEntity[];
  rows: RowsEntity[];
}

export interface ActivityMetaEntity {
  label: string;
  fillColor: string;
}

export interface RowsEntity {
  name: string;
  totalActivity: TotalActivityEntity[];
  dayWiseActivity: DayWiseActivityEntity[];
  activeDays: ActiveDays;
}

export interface TotalActivityEntity {
  name: string;
  value: string;
}

export interface DayWiseActivityEntity {
  date: string;
  items: Items;
}

export interface Items {
  children: ChildrenEntity[];
}

export interface ChildrenEntity {
  count: string;
  label: string;
  fillColor: string;
}

export interface ActiveDays {
  days: number;
  isBurnOut: boolean;
  insight?: string[];
}
