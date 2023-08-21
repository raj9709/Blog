
// import { apiVersion, dataset, projectId, useCdn } from '../env'
const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET;
const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const apiVersion=process.env.NEXT_PUBLIC_SANITY_API_VERSION 

import { createClient } from '@sanity/client'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
})
