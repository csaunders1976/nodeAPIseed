module.exports = function (express){
    var router = express.Router();

    router.get('/', function(req, res) {
        res.json({hello: "world"});
    });

    router.get('/status', function(req, res){
        res.json({healthy: true});
    });

    router.get('/user/:id', function(req, res){
        res.json({user: {id: req.params.id}});
    });

    router.get('/v1', function(req, res) {
        res.json({hello: "world"});
    });


    return router;
};