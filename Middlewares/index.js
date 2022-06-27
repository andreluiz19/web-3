const middlewares = {
  authenticate(req,res,next){
    const { authentication } = req.headers
    const { user_id } = req.params

    if(!authentication) return res.status(400).json({ message: "Sem Token!" })
    if(authentication !== user_id) return res.status(400).json({ message: 'Não Permitido!' })

    next()
  }

}

module.exports = middlewares