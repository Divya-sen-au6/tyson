const User = require('../../model/User');

controller = {}


controller.check = async(req, res)=>{
    // const result = await User.find()
    res.render('EmpDash', {
        data:req.session.user,
        title:'Dashboard',
        // layout:'index'
    })
}

controller.check1= async(req, res)=>{
    // const result = await User.find()
    res.render('EmpDash1', {
        data:req.session.user,
        title:'Dashboard',
        // layout:'index'
    })
}


module.exports = controller