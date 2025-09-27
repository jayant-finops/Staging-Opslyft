/**
 * This route is responsible for the interactive Sanity Studio that's mounted on the `/studio` path
 */

'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
