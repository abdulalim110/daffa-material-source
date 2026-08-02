const express = require('express');
const app = express();
const port = 3000;

app.get('/lingkaran-tabung', (req, res) => {
  const radius = Number(req.query.radius);
  const height = Number(req.query.height);
  
  function AreaofCircle(radius){
    return (22/7) * radius * radius;
  }

  function CircumferenceofCircle(radius){
    return 2 * (22/7) * radius;
  }

  function VolumeofCylinder(radius, height){
    return ((22/7) * radius * radius) * height;
  }
  
  let result = `
  radius: ${radius} <br/>
  height: ${height} <br/>
  <br/>
  cylinder volume : ${VolumeofCylinder(radius,height)}, cylinder base area : ${AreaofCircle(radius)}, cylinder base circumference : ${CircumferenceofCircle(radius)}
  `

  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});