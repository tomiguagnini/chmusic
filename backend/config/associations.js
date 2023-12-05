const Purchase = require('../models/purchase');
const Song = require('../models/song');
const User = require('../models/user');
Purchase.belongsTo(User);
User.hasMany(Purchase);

Purchase.belongsToMany(Song, { through: 'PurchaseSongs' });
Song.belongsToMany(Purchase, { through: 'PurchaseSongs' });
