const Dev = require('../models/Dev');
const stringParse = require('../utils/parseStringArray');

module.exports = {
	async index(req, res) {
		const { latitude, longitude, techs } = req.query;
		const techsArray = stringParse(techs);
		const devs = await Dev.find({
			techs: { $in: techsArray },
			location: {
				$near: {
					$geometry: {
						type: 'Point',
						coordinates: [ longitude, latitude ]
					},
					$maxDistance: 10000
				}
			}
		});

		return res.json({ devs });
	}
};
