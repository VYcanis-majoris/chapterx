import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const jsonPath = path.join(process.cwd(), '/');
  const fileContent = await fs.readFile(
    jsonPath + 'customCardData.json',
    'utf8'
  );
  res.status(200).json(fileContent);
}
