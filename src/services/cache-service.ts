import Cache from 'node-cache'

var CacheFactory = (function () {
    var instance: Cache;
    return {
        getInstance: function () {
            if (instance == null) {
                instance = new Cache({ stdTTL: 3600, checkperiod: 300 });
            }
            return instance;
        }
    };
})();


export default function () {

    return CacheFactory.getInstance()
}