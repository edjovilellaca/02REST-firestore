/*const jwt = require('jsonwebtoken');
const JW_SECRET = require('../controllers/authController').JW_SECRET;

function authenticationToken( req, res, netx ){
    const authHeader = req.headers['authorization'];
    token = authHeader && authHeader.split(' ')[1];
    if(!token)
        return res.status(403).json({ code: 403, message:'No hay token'});

    jwt.verify(token, JW_SECRET, (err, user) =>{
        if(err){
            switch(err.name){
                case 'JsonWebTokenError':
                    return res.status(403).json({ code: 403, message:'No coincide el token'});
                case 'TokenExpiredError':
                    return res.status(401).json({ code: 401, message:'El token ha expirado'});
                default:
                    return res.status(400).json({ code: 400, message:'Erro general'});
            }
        }

        req.user = user;
        netx();
    });
}

module.exports = authenticationToken;*/