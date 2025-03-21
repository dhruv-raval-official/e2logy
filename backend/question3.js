const express = require('express');
const app = express();
app.get('/users', (req, res) => {
    const users = [
        { name: 'John' }, { name: 'Jane' }, { name: 'Jim' }, { name: 'Jake' },
        { name: 'Jill' }, { name: 'Jack' }, { name: 'Jason' }
    ];
    let page = req.query.page;
    let limit = req.query.limit;
    const startIndex = (page * limit) - 2;
    const endIndex = page * limit;
    let data = users.slice(startIndex, endIndex);
    res.json(data);
});
app.listen(3000, () => console.log('Server running on port 3000'));