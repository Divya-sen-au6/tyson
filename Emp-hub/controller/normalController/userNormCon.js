
controller={};

controller.landing = function(req, res){
    res.render('dashboard', {
        title:'Dashboard',
        layout:'index'

    })
}

controller.join = function(req, res){
    res.render('joining', {
        title:'Join with company',
        layout:'index'
    })
}

controller.register= function(req, res){
    res.render('register', {
        title:'Sign up',
        layout:'index'

    })

}
controller.login = function(req, res){
    res.render('login', {
        title:"Sign in",
        layout:"index"
    })
}

module.exports= controller;