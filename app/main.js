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
    
    const songs = await this.#songsDao.getAll();
    for (const song of songs)
      ids.push(song.id);
    
    return ids.sort((a, b) => a - b);
  }
}

function findMissingNumbers(arr) {
  const missing = [];

  const numSet = new Set(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  for (let i = min; i <= max; i++)
    if (!numSet.has(i))
      missing.push(i);
  
  return missing;
}

async function main() {
  const songsService = new SongsService();
  const ids = await songsService.getIds();

  // console.log(ids);
  
  // for (const id of ids)
  //   console.log(id);

  const missingIds = findMissingNumbers(ids);
  console.log(missingIds);
}

const app = main();
