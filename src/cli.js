import path from 'path';
import yargs from 'yargs';
import inquirer from 'inquirer';
import packageJson from '../package.json';
import Schema from '.';
import Init from './init';

export const DEFAULT_CONFIG_PATH = 'firestore-schema.json';
export const DEFAULT_SCHEMA_PATH = 'firestore-schema/schema';
export const DEFAULT_MIGRATIONS_PATH = 'firestore-schema/migrations';

const CONFIG_OPTION = {
  alias: 'config',
  demandOption: false,
  default: DEFAULT_CONFIG_PATH,
  describe: 'Path to the config file',
  type: 'string',
};

yargs
    .version('v', packageJson.version)
    .alias('v', 'version')
    .help('h')
    .alias('h', 'help')
    .command(
        'init',
        'Initialize a firestore-schema configuration',
        () => {},
        () => {
          inquirer
              .prompt([{
                type: 'input',
                name: 'config',
                default: DEFAULT_CONFIG_PATH,
                message: 'Path to the config file',
              }, {
                type: 'input',
                name: 'migrations',
                default: DEFAULT_MIGRATIONS_PATH,
                message: 'Path to the migrations directory',
              }, {
                type: 'input',
                name: 'schema',
                default: DEFAULT_SCHEMA_PATH,
                message: 'Path to the schema directory',
              }]).then((answers) => {
                const init = new Init(answers);
                init.create();
              });
        },
    )
    .command(
        'generate',
        'Generate Google Cloud Firestore rules, indices, models and migrations',
        (yargs) => {
          yargs
              .option('c', CONFIG_OPTION);
        },
        (argv) => {
          const config = require(path.resolve(argv.config));
          const schema = new Schema(config);
          schema.generate();
        },
    )
    .completion()
    .argv;
