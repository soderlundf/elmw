# README

Simple Express logging middleware.

# What it does

It logs `req` properties using `console.log()` or a custom writeable stream.

# Installation

`npm i @soderlundf/elmw`

# Usage

Default usage is to just require the module and then use it as a middleware.

```javascript
const express = require('express');
const elmw = require('@soderlundf/elmw');

const app = express();

app.use(elmw());

app.get('/', (req, res) => {
    res.status(200).send();
});

app.listen(3000, () => { });
```

Calls to the `/` route will produce the following output using `console.log()`:

```json
{
    "context": {},
    "method": "GET",
    "url": "/",
    "statusCode": 200,
    "headers": {
        "user-agent": "vscode-restclient",
        "accept-encoding": "gzip, deflate",
        "host": "localhost:3000",
        "connection": "close"
    },
    "params": {},
    "query": {}
}
```

# Configuration

The default configuration is used when the middleware is loaded without a configuration object.

```javascript
app.use(elmw());
```

or

```javascript
app.use(elmw({}));
```

## Specifying `out`

To redirect output to a writeable stream, pass a writeable stream to `out` in the configuration.

```javascript
app.use(elmw({ out: myStream }));
```

## Context data

The add custom data to the output, pass additional data to `context` in the configuration.

```javascript
app.use(elmw({ context: 'hello world' }));
```
