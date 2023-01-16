# ChromeCacheCrawl
17 liner cmdline tool to crawl locally stored chrome cache and store them in a specified directory.

default : all images
default : only files larger than 20KB

-i : images
-v : videos
-a : audio

example 

```
node CrawlCache.mjs -i 2
```

this collects all images larger than 2 MB
