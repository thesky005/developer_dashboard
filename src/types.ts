export interface ActivityMeta {
    label: string;
    fillColor: string;
  }
  
  export interface TotalActivity {
    name: string;
    value: string;
  }
  
  export interface DayWiseActivityItem {
    count: string;
    label: string;
    fillColor: string;
  }
  
  export interface DayWiseActivity {
    date: string;
    items: {
      children: DayWiseActivityItem[];
    };
  }
  
  export interface AuthorWorklogRow {
    name: string;
    totalActivity: TotalActivity[];
    dayWiseActivity: DayWiseActivity[];
  }

  export interface data {
    data: AuthorWorklog;
}

  
  
  export interface AuthorWorklog {
    activityMeta: ActivityMeta[];
    rows: {
        name: string;
        totalActivity: number[];
        dayWiseActivity: number[];
        activeDays: any; // Define the type of activeDays according to its structure
    }[];
}



  
