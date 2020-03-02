
const errorsMiddleware = (app) => {
    app.use((err, req, res, next) => {
        console.log(`
        =====Error=====
        err.data:
        ${err.data}

        err.message:
        ${err.message}
        ----------------
        from ip : ${req.ip}
        -----------------
        ${err.inputError}
        =====End of error info=====`);
        if (err.inputError) {
            res.status(err.statusCode).send(err.inputError)
        } else {
            res.status(err.statusCode).send({global: err.message})
        }
    });
};

module.exports = errorsMiddleware;