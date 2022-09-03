import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';

const connectionUrl = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.bmoow.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export interface Contact {
  id?: ObjectId;
  name: string;
  email: string;
  message: string;
}

export type ResData = {
  message: string;
  contactMessage: Contact;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Partial<ResData>>
) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body as Contact;

    if (
      !email ||
      email.trim() === '' ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid inputs' });
      return;
    }
    const newMessage: Contact = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(connectionUrl);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }
    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Success!', contactMessage: newMessage });
  }
};

export default handler;
