import yargs from 'yargs';
import packageJson from '../package.json';
import FirestoreSchema from '.';

yargs
    .version('v', packageJson.version)
    .alias('v', 'version')
    .help('h')
    .alias('h', 'help')
    .command(
        '$0 <entry-point>',
        'Generate Google Cloud Firestore rules, indices, models and migrations',
        (yargs) => {
          yargs.positional('entry-point', {
            describe: 'The entry point for the schema definition',
            type: 'string',
          });
        },
        (argv) => {
          const schema = new FirestoreSchema({
            entryPoint: argv.entryPoint,
          });
          schema.generate();
        },
    )
    .argv;
