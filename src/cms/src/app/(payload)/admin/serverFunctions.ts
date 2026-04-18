'use server'

import { handleServerFunctions } from '@payloadcms/next/layouts'
import type { ServerFunctionClient } from 'payload'
import configPromise from '@payload-config'
import { importMap } from './importMap'

export const serverFunction: ServerFunctionClient = async function serverFunction(args) {
  return handleServerFunctions({ ...args, config: configPromise, importMap })
}
