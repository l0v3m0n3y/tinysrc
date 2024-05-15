# tinysrc
JavaScript library for tinysrc.me
# main
```js
const {tinysrc} = require('./tinysrc');

const shortener = new tinysrc();
const longUrl = 'https://example.com';
shortener.short_link(longUrl).then(shortUrl => {
    console.log('Shortened URL:', shortUrl);
}).catch(error => {
    console.error('Error:', error);
});

```
