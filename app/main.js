import JsonLoader from './loaders/JsonLoader.js';

class SongsDao {
  #loader = new JsonLoader();
  
  async getAll() {
    const songs = await loader.load("https://dmitrybelkevich.github.io/api/" + "api/" + "songs");
    return songs;
  }
}

function main() {
  const songsDao = new SongsDao();
  const songs = songsDao.getAll();
  console.log(songs);
}

const app = main();
