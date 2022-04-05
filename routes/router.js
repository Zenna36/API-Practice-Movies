const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default:fetch}) => fetch(...args));
router.use(express.static('public'));

const dramaRoute = require('./api/dramaRoute');
const mysteryRoute = require('./api/mysteryRoute');
const westernRoute = require('./api/westernRoute');

router.use('/drama', dramaRoute);
router.use('/mystery', mysteryRoute);
router.use('/western', westernRoute);

router.use('/', (req, res) => {
    const url = 'https://api.sampleapis.com/movies/drama';
    fetch (url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/home', {
                title: 'Some films for you',
                name: 'Watch this',
                data
            });
        })
        .catch(error => {
            console.log('Error', error)
        });
});

router.use('/', (req, res) => {
    const url = 'https://api.sampleapis.com/movies/drama';
    fetch (url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/drama', {
                title: 'Drama',
                name: 'Drama Films',
                data
            });
        })
        .catch(error => {
            console.log('Error', error)
        });
});

router.use('/', (req, res) => {
    const url = 'https://api.sampleapis.com/movies/mystery';
    fetch (url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/mystery', {
                title: 'Mystery',
                name: 'Mystery',
                data
            });
        })
        .catch(error => {
            console.log('Error', error)
        });
});

router.use('/', (req, res) => {
    const url = 'https://api.sampleapis.com/movies/western';
    fetch (url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/western', {
                title: 'Western',
                name: 'Western',
                data
            });
        })
        .catch(error => {
            console.log('Error', error)
        });
});



router.get('*', (req, res) => {
    if(req.url == '/favico/ico') {
        res.end();
    } else {
        res.render('pages/error', {
            title: 404,
            name: 404,
        })
    }
})

module.exports = router;