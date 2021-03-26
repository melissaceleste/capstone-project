export default function createCard(card) {
  return fetch('/api/cards', {
    method: 'POST',
    headers: {
      // data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      'content-type': 'application/json',
    },
    body: JSON.stringify(card),
  }).then(res => res.json())
}
