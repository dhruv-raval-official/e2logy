const express = require('express');
const fetch = require('node-fetch');
const app = express();
let cachedData = null;
let cacheTime = null;
app.get('/data', (req, res) => {
    if (cachedData && cacheTime && (Date.now() - cacheTime < 600000)) {
        return res.json(cachedData);
    }
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            cacheTime = Date.now();
            cachedData = data;
            res.json(data);
        })
        .catch(error => res.status(500).json({ error: 'Failed to fetch data' }));
});
app.listen(3000, () => console.log('Server running on port 3000'));