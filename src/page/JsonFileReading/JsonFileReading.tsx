import myJson from './my.json';

export function JsonFileReading() {
  return (
    <div>
      <h2>json file reading</h2>
      <p>{myJson.title}</p>
    </div>
  );
}
