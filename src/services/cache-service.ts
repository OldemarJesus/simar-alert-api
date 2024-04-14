import Cache from 'file-system-cache';

export default function () {
    return Cache({
        basePath: "./.cache", // (optional) Path where cache files are stored (default).
        ns: "my-namespace",   // (optional) A grouping namespace for items.
        hash: "sha1",          // (optional) A hashing algorithm used within the cache key.
        ttl: 3500               // (optional) A time-to-live (in secs) on how long an item remains cached.
    });
}