import { NextApiRequest, NextApiResponse } from 'next';

interface Contact {
  name: string;
  email: string;
  message: string;
}

type ReqBodyProps = {
  email: string;
  name: string;
  message: string;
};

type ResData = {
  message: string;
  contactMessage: Contact;
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Partial<ResData>>
) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body as ReqBodyProps;

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
    const newMessage = {
      email,
      name,
      message,
    };

    res.status(201).json({ message: 'Success!', contactMessage: newMessage });
  }
};

export default handler;
