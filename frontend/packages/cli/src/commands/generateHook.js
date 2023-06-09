import { queueHook } from '../queue/queueHook.js';
import { handleFunction } from '../utils/error.js';
import { getPaths, SyGen, SyLog } from '../utils/index.js';
import { validateName } from '../utils/validate.js';

/**
 * @description
 * Generate a hook based on the provided hook name.
 *
 * @param {string} hookName - The name of the hook.
 * @throws {Error} If an error occurs during the generation process.
 * @returns {Promise<void>}
 * @async
 */
export async function generateHook(hookName) {
  await handleFunction(async () => {
    const validatedName = validateName(hookName);

    const generator = new SyGen();
    const paths = getPaths();

    await generator.ensureAndLogDir(paths.web.src.hooks);
    await queueHook(validatedName, paths.web.src.hooks, generator);

    const templatesUsed = await generator.generateQueue();
    SyLog.logStats(templatesUsed);
  });
}
