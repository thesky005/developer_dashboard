import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ActivityChart from './components/ActivityChart';
import ActivityTable from './components/ActivityTable';
import SummaryStatistics from './components/SummaryStatistics';
import { AuthorWorklogRow, data } from './types';
import CustomDropdown from './CustomDropdown';
import Sidebar from './components/Sidebar';
import './styles.css';

const App: React.FC = () => {
    const [data, setData] = useState<AuthorWorklogRow[]>([]);
    const [selectedAuthor, setSelectedAuthor] = useState<string>(''); 
    const summaryRef = useRef<HTMLDivElement>(null); 
    const chartRef = useRef<HTMLDivElement>(null); 
    const tableRef = useRef<HTMLDivElement>(null); 

    const handleScrollToSummary = () => {
        if (summaryRef.current) {
          summaryRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const handleScrollToChart = () => {
        if (chartRef.current) {
            chartRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const handleScrollToTable = () => {
        if (tableRef.current) {
            tableRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    //   interface Author {
    //     name: string;
    //     // Add other relevant fields here
    // }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<data>('/sample-data.json');
                //console.log('Response:', response);
                //console.log('Response data:', response.data.data);
                //console.log('AuthorWorklog:', response.data.data.AuthorWorklog);
                //console.log('Rows:', response.data.data.AuthorWorklog.rows);
                setData(response.data.data.AuthorWorklog.rows);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const filteredData = data.filter(author => author.name === selectedAuthor);

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="app">
            <Sidebar onStatsClick={handleScrollToSummary} onScrollToChart={handleScrollToChart} onScrollToTable={handleScrollToTable } />
            <h1 style={{ opacity: 0.8 }}>Developer Activity Dashboard</h1>
            <label htmlFor="author-dropdown" style={{ fontSize: '19px', fontWeight: 'bold' }}
            >Select Author Name : </label>
            <CustomDropdown
                
                options={data.map(author => author.name)}
                selected={selectedAuthor}
                onSelect={setSelectedAuthor}
            />
            {filteredData.map((authorData, index) => (
                <div key={index}>
                    <h2>Author Name : {authorData.name}</h2>
                    <div ref={summaryRef}>
                        <SummaryStatistics data={authorData} />
                    </div>
                    <div ref={chartRef}>
                        <ActivityChart data={authorData} />
                    </div>
                    <div ref={tableRef}>
                        <ActivityTable data={authorData} />
                    </div>
                    
                    
                </div>
            ))}
        </div>
    );
};

export default App;
