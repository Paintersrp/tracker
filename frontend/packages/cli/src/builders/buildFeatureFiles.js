import path from 'path';

import { genEmptyIndexes } from '../generators/genEmptyIndexes.js';
import { genIndividualFiles } from '../generators/genIndividualFiles.js';
import { genSharedFiles } from '../generators/genSharedFiles.js';
import { genSuiteFiles } from '../generators/genSuiteFiles.js';
import { FEATURES_DIR } from '../../config.js';
import { SyLogger } from '../utils/SyLogger.js';
import { SyFormatter } from '../utils/SyFormater.js';

/**
 * Builds feature files for the specified feature name, type, and component count.
 *
 * @param {string} featureName - The name of the feature to build.
 * @param {string} type - The type of feature ('Individual' or 'Suite').
 * @param {number} componentCount - The number of components to generate for the feature.
 * @returns {Promise<void>} A promise that resolves when the feature files are built.
 */
async function buildFeatureFiles(featureName, type, componentCount) {
  const templatesUsed = [];
  const componentImports = [];
  const featureDirectory = path.join(FEATURES_DIR, featureName);
  const formattedName = SyFormatter.capFirst(featureName);
  const depluraledName = SyFormatter.deplural(formattedName);

  await SyLogger.ensureAndLogDir(featureDirectory);
  await genEmptyIndexes(templatesUsed, featureDirectory);

  if (type === 'Individual') {
    await genIndividualFiles(featureDirectory, formattedName, templatesUsed);
  }

  if (type === 'Suite') {
    await genSuiteFiles(featureDirectory, formattedName, depluraledName, templatesUsed);
  }

  await genSharedFiles(
    featureDirectory,
    formattedName,
    templatesUsed,
    componentCount,
    componentImports
  );

  SyLogger.logStats(templatesUsed);
}

export { buildFeatureFiles };
