import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['dev.woistjason.de'],
}

export default withPayload(nextConfig)
