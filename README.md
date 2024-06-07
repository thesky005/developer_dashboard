# Developer Activity Dashboard

## Overview

The Developer Activity Dashboard is a React application designed to visualize the activity logs of developers. The dashboard provides various views including summary statistics, detailed tables, and charts for each developer's activities. The data is fetched from a JSON file and displayed dynamically based on the selected author.

## Features

- **Dynamic Data Fetching**: Fetches data from a local JSON file.
- **Custom Dropdown**: Allows users to select a developer and view their specific activity data.
- **Summary Statistics**: Displays a summary of activities for the selected developer.
- **Activity Table**: Shows detailed day-wise activity logs in a table format.
- **Activity Chart**: Visualizes activity trends over time using a line chart.

## Components

### App Component

- **Location**: `src/App.tsx`
- **Description**: The main component that orchestrates the fetching of data, selection of authors, and rendering of sub-components like `SummaryStatistics`, `ActivityTable`, and `ActivityChart`.

### SummaryStatistics Component

- **Location**: `src/components/SummaryStatistics.tsx`
- **Description**: Displays summary statistics for the selected developer.
- **Props**: 
  - `data` (AuthorWorklogRow): The activity data for the selected developer.

### ActivityTable Component

- **Location**: `src/components/ActivityTable.tsx`
- **Description**: Renders a table displaying day-wise activity logs.
- **Props**: 
  - `data` (AuthorWorklogRow): The activity data for the selected developer.

### ActivityChart Component

- **Location**: `src/components/ActivityChart.tsx`
- **Description**: Visualizes the activity trends over time using a line chart.
- **Props**: 
  - `data` (AuthorWorklogRow): The activity data for the selected developer.

### CustomDropdown Component

- **Location**: `src/components/CustomDropdown.tsx`
- **Description**: A dropdown component for selecting a developer.
- **Props**: 
  - `options` (string[]): List of developer names.
  - `selected` (string): Currently selected developer name.
  - `onSelect` (Function): Callback function to handle selection changes.

## Data Types

### AuthorWorklogRow

- **Description**: Represents the activity log for a developer.
- **Properties**:
  - `name` (string): Developer's name.
  - `totalActivity` (TotalActivity[]): Array of total activities.
  - `dayWiseActivity` (DayWiseActivity[]): Array of day-wise activities.

### TotalActivity

- **Description**: Represents total activity statistics.
- **Properties**:
  - `name` (string): Name of the activity.
  - `value` (string): Value of the activity.

### DayWiseActivity

- **Description**: Represents activities for a specific day.
- **Properties**:
  - `date` (string): Date of the activity.
  - `items` (Object): An object containing an array of `DayWiseActivityItem`.

### DayWiseActivityItem

- **Description**: Represents an individual activity item for a specific day.
- **Properties**:
  - `count` (string): Count of the activity.
  - `label` (string): Label of the activity.
  - `fillColor` (string): Color used for the activity representation.

### ResponseData

- **Description**: Represents the structure of the response data fetched from the JSON file.
- **Properties**:
  - `data` (AuthorWorklog): The main data object containing activity logs.

### AuthorWorklog

- **Description**: Represents the main structure of the worklog data.
- **Properties**:
  - `activityMeta` (ActivityMeta[]): Metadata for activities.
  - `rows` (Object[]): Array of `AuthorWorklogRow` objects.

### ActivityMeta

- **Description**: Metadata for activities.
- **Properties**:
  - `label` (string): Label of the activity.
  - `fillColor` (string): Color associated with the activity.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/developer-activity-dashboard.git
   cd developer-activity-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173/` to view the dashboard.

## Directory Structure

```plaintext
developer-activity-dashboard/
│
├── public/
│   └── sample-data.json
│
├── src/
│   ├── components/
│   │   ├── ActivityChart.tsx
│   │   ├── ActivityTable.tsx
│   │   ├── SummaryStatistics.tsx
│   │   └── CustomDropdown.tsx
│   │
│   ├── styles.css
│   ├── types.ts
│   └── App.tsx
│
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Sample Data Structure

- **Location**: `public/sample-data.json`
- **Example**:
  ```json
  {
    "data": {
      "AuthorWorklog": {
        "activityMeta": [
          {
            "label": "Commits",
            "fillColor": "#8884d8"
          }
        ],
        "rows": [
          {
            "name": "John Doe",
            "totalActivity": [
              {
                "name": "Commits",
                "value": "50"
              }
            ],
            "dayWiseActivity": [
              {
                "date": "2023-01-01",
                "items": {
                  "children": [
                    {
                      "count": "5",
                      "label": "Commits",
                      "fillColor": "#8884d8"
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  }
  ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.