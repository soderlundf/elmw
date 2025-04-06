
function elmw(config) {
    config = config || {};
    let _out = config?.out ? config.out : console
    let _context = config?.context ? config.context : {}

    return (req, res, next) => {
        let _data = {
            context: _context,
            method: req.method,
            url: req.url,
            statusCode: res.statusCode,
            statusMessage: res.statusMessage,
            headers: req.headers,
            body: req.body,
            params: req.params,
            query: req.query
        }

        if (typeof _out?.log === 'function') {
            _out.log(JSON.stringify(_data));
            next();
            return;
        }
        if (typeof _out?.write === 'function') {
            _out.write(JSON.stringify(_data) + '\n');
            next();
            return;
        }
        next();
    };
}

module.exports = elmw;