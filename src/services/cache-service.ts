import Cache from 'file-system-cache';
import cachedir from 'cachedir'

export default function () {
    const cachedirs = cachedir("simar")
    console.info("Storing cache at " + cachedirs)
    return Cache({
        basePath: cachedirs + "/.cache", // (optional) Path where cache files are stored (default).
        ns: "my-namespace",   // (optional) A grouping namespace for items.
        hash: "sha1",          // (optional) A hashing algorithm used within the cache key.
        ttl: 3500               // (optional) A time-to-live (in secs) on how long an item remains cached.
    });
}