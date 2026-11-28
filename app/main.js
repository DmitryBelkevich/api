import JsonLoader from './loaders/JsonLoader.js';

function main() {
  const loader = new JsonLoader();
  const songs = await loader.load("https://dmitrybelkevich.github.io/api/" + "api/" + "songs");
  console.log(songs);
}

const app = main();
