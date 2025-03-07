import ora from 'ora'
import logger from '../shared/logger'
import { remove } from 'fs-extra'
import { ES_DIR, HL_DIR, UMD_DIR } from '../shared/constant'
import { compileTypes } from '../compiler/compileTypes'
import { compileTemplateHighlight } from '../compiler/compileTemplateHighlight'
import { compileModule } from '../compiler/compileModule'

export function removeDir() {
  return Promise.all([remove(ES_DIR), remove(HL_DIR), remove(UMD_DIR)])
}

export async function runTask(taskName: string, task: () => any) {
  const s = ora().start(`Compiling ${taskName}`)
  try {
    await task()
    s.succeed(`Compilation ${taskName} completed!`)
  } catch (e: any) {
    s.fail(`Compilation ${taskName} failed!`)
    logger.error(e.toString())
  }
}

export async function compile(cmd: { noUmd: boolean }) {
  process.env.NODE_ENV = 'compile'

  await removeDir()
  await Promise.all([runTask('types', compileTypes), runTask('template highlight', compileTemplateHighlight)])

  await runTask('module', compileModule)
  await runTask('commonjs', () => compileModule('commonjs'))
  !cmd.noUmd && (await runTask('umd', () => compileModule('umd')))
}
