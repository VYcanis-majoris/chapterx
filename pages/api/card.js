import { generateCardUrl } from '@/utils/cloudinary';
import fs from 'fs';

export default async function handler(req, res) {
  const { firstName, lastName, title, companyName, guestImageUrl } = req.body;
  console.log(firstName, lastName, title, companyName, guestImageUrl);
  const url = await generateCardUrl(
    title,
    firstName,
    lastName,
    companyName,
    guestImageUrl
  );
  const data = {
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    url: `${url}`,
  };
  console.log(url);
  const jsonData = JSON.stringify(data);
  fs.writeFile('customCardData.json', jsonData, (err) => {
    if (err) {
      console.error(err);
      res
        .statusCode(500)
        .json({ message: 'Cant write to File, Error occured!' });
    } else {
      res.redirect('/cardlink');
    }
  });
  //res.redirect('/').json({ url });
  //res.redirect('/card-link');
}
