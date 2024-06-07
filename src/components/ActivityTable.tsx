import React from 'react';
import styled from 'styled-components';
import { AuthorWorklogRow } from '../types';

interface Props {
  data: AuthorWorklogRow;
}

// Define styled components
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledThead = styled.thead`
  background-color: #f2f2f2;
`;

const StyledTbody = styled.tbody``;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const StyledTh = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const StyledTd = styled.td<{ isHighlighted: boolean }>`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: ${props => (props.isHighlighted ? 'green' : 'inherit')};
  font-weight: ${props => (props.isHighlighted ? 'bold' : 'normal')};
`;

const Title = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
`;

const ActivityTable: React.FC<Props> = ({ data }) => (
  <>
    <Title>Activity Table</Title>
    <StyledTable>
      <StyledThead>
        <tr>
          <StyledTh>Date</StyledTh>
          {data.totalActivity.map(activity => (
            <StyledTh key={activity.name}>{activity.name}</StyledTh>
          ))}
        </tr>
      </StyledThead>
      <StyledTbody>
        {data.dayWiseActivity.map(day => (
          <StyledTr key={day.date}>
            <StyledTd isHighlighted={false}>{day.date}</StyledTd>
            {day.items.children.map(item => (
              <StyledTd key={item.label} isHighlighted={parseInt(item.count, 10) > 0}>
                {item.count}
              </StyledTd>
            ))}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  </>
);

export default ActivityTable;
