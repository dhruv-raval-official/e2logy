const express = require('express');
const app = express();
const log = {};
const time = 60000;
const limit = 5;
app.use((req, res, next) => {
    const ip = req.ip;
    if(!log[ip]){
        log[ip] = {count: 1, time: Date.now()};
    }else{
        const timePassed = Date.now() - log[ip].time;
        if(timePassed > time){
            log[ip] = {count: 1, time: Date.now()};
        }else{
            if(log[ip].count >= limit){
                return res.status(429).json({error: 'Request after 1 minitue.'});
            }
            log[ip].count++;
        }
    }
    next();
});
app.get('/data', (req, res) => {
    res.json({ message: 'Data fetched successfully' });
});
app.listen(3000, () => console.log('Server running on port 3000'));
