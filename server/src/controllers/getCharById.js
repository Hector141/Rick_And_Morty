const axios = require("axios");

const URL = "https://rickandmortyapi.com/api"
const KEY = "b601c19982bd.d1ff5d01c384f0beea8b"


async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const response = await axios.get(`${URL}/character/${id}`);

    const { status, name, species, origin, image, gender } = response.data;
    res.json({ id, status, name, species, origin, image, gender });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).send('Not Found');
    } else {
      res.status(500).send({ message: error.message }); //axios error
    } 
  }
}

// const getCharById = async (req,res) => {
//   try{
//      const {id} = req.params;
//      const {data} = await axios(`${URL}/character/${id}`)

//      if(!data.name) throw new Error("ID Not found")

   
//       const character = {
//         id: data.id,
//         name: data.name,
//         species: data.species,
//         gender: data.gender,
//         image: data.image,
//         status: data.status,
//         origin: data.origin
//       }
//       return res.status(200).json(character)
     

//   }catch(error){
//     error.message.includes("ID")
//     ? res.status(404).send(error.message)
//     : res.status(500).send(error.message)
//   }
// }

  
module.exports = {
  getCharById
};