// pages/api/handler.js
export default async function handler(req, res) {
    const { method } = req;
  
    if (method === 'GET') {
      res.status(200).json({ message: 'GET request successful' });
    } else if (method === 'POST') {
      const data = req.body;
      res.status(200).json({ message: 'POST request successful', data });
    } else {
      res.status(405).json({ message: `Method ${method} Not Allowed` });
    }
  }