import program from 'commander';
import packageJson from '../package.json';
import FirestoreSchema from '.';

function error(message) {
  console.error(`ERROR: ${message}\n`);
  program.outputHelp();
  process.exit(1);
}

let entryPoint;

program
    .version(packageJson.version)
    .arguments('<entry-point>')
    .action((e) => {
      entryPoint = e;
    })
    .parse(process.argv);

if (typeof entryPoint === 'undefined') {
  error('Must specify an entry point!');
}

const schema = new FirestoreSchema({
  entryPoint,
});

schema.generate();
