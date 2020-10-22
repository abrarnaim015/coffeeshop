class CoffeShop{
    static logIn(req, res){
        res.render('login.ejs')
    }

    static showHome(req, res){
        res.render('home.ejs')
    }

    static constomerId(req, res){
        res.render('costomer-Id.ejs')
    }
}

module.exports = CoffeShop