import JsonLoader from './loaders/JsonLoader.js';

class SongsDao {
  #loader = new JsonLoader();
  
  async getAll() {
    const songs = await this.#loader.load("https://dmitrybelkevich.github.io/api/" + "api/" + "songs");
    return songs;
  }
}

class SongsService {
  #songsDao = new SongsDao();

  async getIds() {
    const ids = [];
    
    const songs = await songsDao.getAll();
    
    return ids;
  }
}

async function main() {
  const songsService = new SongsService();
  const ids = await songsService.getIds();
  console.log(ids);
}

const app = main();
