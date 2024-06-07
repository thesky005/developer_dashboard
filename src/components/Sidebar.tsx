// src/components/Sidebar.tsx
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertChartIcon from '@mui/icons-material/InsertChart'; // Icon for ActivityChart
import TableViewIcon from '@mui/icons-material/TableView'; // Icon for ActivityTable

interface SidebarProps {
  onStatsClick: () => void;
  onScrollToChart: () => void;
  onScrollToTable: () => void;
}

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Sidebar: React.FC<SidebarProps> = ({ onStatsClick, onScrollToChart, onScrollToTable }) => (
  <Drawer variant="permanent" anchor="left">
    <List>
      <img src="https://cdn.prod.website-files.com/642535c7875ea6e60927dd49/65cb115f23533388f1d0b7e2_DevDynamics_Logo.svg" alt="" style={{ width: '196px', height: 'auto' , padding:'16px'}} />
      <ListItem button onClick={handleClick}>
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={onStatsClick}>
        <ListItemIcon><BarChartIcon /></ListItemIcon>
        <ListItemText primary="Stats" />
      </ListItem>
      <ListItem button onClick={onScrollToChart}>
        <ListItemIcon><InsertChartIcon /></ListItemIcon>
        <ListItemText primary="Chart" />
      </ListItem>
      <ListItem button onClick={onScrollToTable}>
        <ListItemIcon><TableViewIcon /></ListItemIcon>
        <ListItemText primary="Table" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;

