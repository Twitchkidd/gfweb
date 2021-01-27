import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../util/mongodb';

export default async (req, res) => {
	const {
		query: { id },
	} = req;
	const { db } = await connectToDatabase();
	const movie = await db
		.collection('movies')
		.findOne({ _id: new ObjectId(id) });
	res.json(movie);
};
