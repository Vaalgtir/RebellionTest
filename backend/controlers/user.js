const jwt = require('jsonwebtoken');

const Error = require('../security_public/error');

exports.login = (req, res, next) => {
  const userReq = req.body.username
  const passReq = req.body.password
  if (userReq && passReq) {
    if (passReq === 'DadSucks' && userReq === 'Luke'){
      res.status(200).json({
        accessToken: jwt.sign(
          { isAuthentified: 1 },
          'MCFCGNRJBCNTAGQQSTLBMMSFX',
          { expiresIn: '24h' }
        )
      })
    } else {
      Error.errorManagement(res, 401, { message: 'Utilisateur ou mot de passe inconnu' })
    }
  } else {
    Error.errorManagement(res, 500, { message: "Entrez un nom d'utilisateur et un mot de passe" })
  }
}
