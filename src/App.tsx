import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ActivityChart from './components/ActivityChart';
import ActivityTable from './components/ActivityTable';
import SummaryStatistics from './components/SummaryStatistics';
import { RowsEntity} from './types';
import { AppData } from './types';
import CustomDropdown from './CustomDropdown';
import Sidebar from './components/Sidebar';
import './styles.css';

const App: React.FC = () => {
    const [data, setData] = useState<RowsEntity[]>([]);
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

      interface ResponseData {
        data: AppData;
      }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ResponseData>('/sample-data.json');

                console.log(response)

                const authorWorklog = response.data.data.AuthorWorklog;
                 console.log('Response:', authorWorklog);
                //console.log('Response data:', response.data.data);
                // console.log('AuthorWorklog:', response.data.data.AuthorWorklog);
                // console.log('Rows:', response.data.data.AuthorWorklog.rows);
                setData(authorWorklog.rows);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
 
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get<ResponseData>('/sample-data.json');
    //             const authorWorklog = response.data.data.AuthorWorklog;
                
             
    
    //             setData(authorWorklog.rows);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             // Handle error state here, e.g., set an error message in state
    //         }
    //     };
    
    //     fetchData();
    // }, []);
    
    const filteredData = data.filter(author => author.name === selectedAuthor);

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="app">
            <Sidebar onStatsClick={handleScrollToSummary} onScrollToChart={handleScrollToChart} onScrollToTable={handleScrollToTable } />
            <h1 style={{ opacity: 0.8 }}>Developer Activity Dashboard</h1>
            <label htmlFor="author-dropdown">Select Author Name:</label>
            <CustomDropdown
                options={data.map(author => author.name)}
                selected={selectedAuthor}
                onSelect={setSelectedAuthor}
            />
            {filteredData.length > 0 && (
                <div>
                    <h2>Author Name: {filteredData[0].name}</h2>
                    <div ref={summaryRef}>
                        <SummaryStatistics data={filteredData[0]} />
                    </div>
                    <div ref={chartRef}>
                        <ActivityChart data={filteredData[0]} />
                    </div>
                    <div ref={tableRef}>
                        <ActivityTable data={filteredData[0]} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
