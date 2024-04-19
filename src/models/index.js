const EmailCode = require("./EmailCode");
const User = require("./User");

//EmailCode -> userId
EmailCode.belongsTo(User)
User.hasMany(EmailCode)