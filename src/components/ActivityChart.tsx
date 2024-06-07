import React, { useState } from 'react';
import styled from 'styled-components';
import { Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';
import { RowsEntity } from '../types';
import CustomDropdown from '../CustomDropdown';

interface Props {
  data: RowsEntity;
}

const ChartContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const Title = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
`;

const ActivityChart: React.FC<Props> = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState<string>(data.dayWiseActivity[0].date);

  const formattedData = data.dayWiseActivity.map(day => ({
    date: day.date,
    ...day.items.children.reduce((acc, item) => {
      acc[item.label] = parseInt(item.count, 10);
      return acc;
    }, {} as Record<string, number>)
  }));

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const selectedDateData = formattedData.find(d => d.date === selectedDate);

  const dateFormatter = (date: string) => {
    const [month, day] = date.split('-');
    return `${month}-${day}`;
  };

  return (
    <>
      <ChartContainer>
        <Title>Activity Chart</Title>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={dateFormatter} interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            {data.totalActivity.map(activity => (
              <Line
                key={activity.name}
                type="monotone"
                dataKey={activity.name}
                stroke={data.dayWiseActivity[0].items.children.find(item => item.label === activity.name)?.fillColor}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      <ChartContainer style={{ padding: '20px' }}>
        <label htmlFor="author-dropdown" style={{ fontSize: '19px', fontWeight: 'bold' }}>
          Select Date:
        </label>
        <CustomDropdown
          options={data.dayWiseActivity.map(day => day.date)}
          selected={selectedDate}
          onSelect={handleDateSelect}
        />
        <Title>Activity Bar Graph of {selectedDate}</Title>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={selectedDateData ? [selectedDateData] : []}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={dateFormatter} />
            <YAxis />
            <Tooltip />
            <Legend />
            {data.totalActivity.map(activity => (
              <Bar
                key={activity.name}
                dataKey={activity.name}
                fill={data.dayWiseActivity[0].items.children.find(item => item.label === activity.name)?.fillColor || '#8884d8'}
              />
            ))}
            {data.totalActivity.map(activity => (
              <Line
                key={activity.name}
                type="monotone"
                dataKey={activity.name}
                stroke={data.dayWiseActivity[0].items.children.find(item => item.label === activity.name)?.fillColor || '#ff7300'}
              />
            ))}
          </ComposedChart>
        </ResponsiveContainer>
      </ChartContainer>
    </>
  );
};

export default ActivityChart;
