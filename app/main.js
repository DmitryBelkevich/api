import JsonLoader from './loaders/JsonLoader.js';

class SongsDao {
  #loader = new JsonLoader();
  
  async getAll() {
    const songs = await this.#loader.load("https://dmitrybelkevich.github.io/api/" + "api/" + "songs");
    return songs;
  }
}

async function main() {
  const songsDao = new SongsDao();
  const songs = await songsDao.getAll();
  console.log(songs);
}

const app = main();
