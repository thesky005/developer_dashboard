import React from 'react';
import styled from 'styled-components';
import { RowsEntity } from '../types';

interface Props {
  data: RowsEntity;
}

const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
`;

const Title = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 1.1em;
  color: #555;
  margin: 10px 0;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(odd) {
    background: #f1f1f1;
  }
`;

const ActivityName = styled.span`
  font-weight: bold;
  color: #1c1e21;
`;

const ActivityValue = styled.span`
  font-weight: bold;
  color: #28a745;
  padding-right: 100px;
`;

const SummaryStatistics: React.FC<Props> = ({ data }) => (
  <Container>
    <Title>Summary Statistics</Title>
    <List>
      {data.totalActivity.map(activity => (
        <ListItem key={activity.name}>
          <ActivityName>{activity.name}</ActivityName>
          <ActivityValue>{activity.value}</ActivityValue>
        </ListItem>
      ))}
    </List>
  </Container>
);

export default SummaryStatistics;
