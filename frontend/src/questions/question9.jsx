import React, { useState, useEffect } from 'react';
const FetchData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err); 
                setLoading(false);
            });
    }, []);
    return (
        <div>
            {loading ? <p>Loading...</p> : <ul>{data.map(item => <li key={item.id}>{item.title}</li>)}</ul>}
        </div>
    );
};
export default FetchData;
