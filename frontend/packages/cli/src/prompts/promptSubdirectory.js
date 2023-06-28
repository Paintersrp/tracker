import inquirer from 'inquirer';
import fs from 'fs-extra';

import { SyLogger } from '../utils/SyLogger.js';
import { COMPONENTS_DIR } from '../../config.js';

/**
 * Prompts the user to choose a subdirectory from the components directory.
 * @returns {Promise<string>} - The selected subdirectory.
 */
export async function promptSubdirectory() {
  const componentsExists = await fs.pathExists(COMPONENTS_DIR);
  if (!componentsExists) {
    SyLogger.error('The components directory does not exist.');
  }

  const componentFolders = await fs.readdir(COMPONENTS_DIR);
  if (componentFolders.length === 0) {
    SyLogger.error('There are no subdirectories in the components directory.');
  }

  const { subdirectory } = await inquirer.prompt([
    {
      type: 'list',
      name: 'subdirectory',
      message: 'Choose a subdirectory for the component:',
      choices: componentFolders,
      default: componentFolders[0],
    },
  ]);

  return subdirectory;
}
