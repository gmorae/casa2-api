const connection = require('../database/connection')

module.exports = {

	async index(req, res) {
		const allCategory = await connection('categories').select('*');
		for (let index = 0; index < allCategory.length; index++) {
			const { id, title } = allCategory[index];
			const [count] = await connection('properties').select('*').where({ id }).count();
			allCategory[index] = { id, title, qtd: count['count(*)'] }
		}
		return res.json(allCategory)
	},

	async show(req, res) {
		const { id } = req.params
		return res.json(await connection('properties').select('*').where({ id_category: id }))
	},

	async create(req, res) {
		const { title } = req.body
		if (!title) {
			res.status(400).send();
		} else {
			await connection('categories').insert({ title })
			return res.status(201).send();
		}
	},

	async delete(req, res) {
		const { id } = req.params

		const verifyId = await connection('categories').where({ id }).first()
		if (verifyId) {

			await connection('categories').delete().where({ id })

			return res.status(201).send();
		} else {

			return res.status(400).send();
		}
	}

}