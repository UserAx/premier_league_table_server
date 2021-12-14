const season_13_14 = require('../data/13-14.json');
const season_14_15 = require('../data/14-15.json');
const season_15_16 = require('../data/15-16.json');
const season_16_17 = require('../data/16-17.json');
const season_17_18 = require('../data/17-18.json');
const router = require('express').Router();

router.get('/league/season=:season', (req, res) => {
    try{
        const season = req.params.season;
        switch(season){
            case "2013_2014": return res.send(season_13_14);
            case "2014_2015": return res.send(season_14_15);
            case "2015_2016": return res.send(season_15_16);
            case "2016_2017": return res.send(season_16_17);
            case "2017_2018": return res.send(season_17_18);
            default: return res.status(404)
            .send({Message: "Only available for seasons: 2013_2014, 2014_2015, 2015_2016, 2016_2017, 2017_2018"});
        }
    } catch(e){
        res.status(500);
    }
});

module.exports = router;