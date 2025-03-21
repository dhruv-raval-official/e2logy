const fs = require('fs');
const express = require('express');
const app = express();
app.get('/download', (req, res) => {
    const filePath = './path/to/file.pdf';
    if(!fs.existsSync(filePath)){
        return res.status(404).json({error: 'File not found'});
    }
    res.download(filePath);
});
app.listen(3000, () => console.log('Server running on port 3000'));