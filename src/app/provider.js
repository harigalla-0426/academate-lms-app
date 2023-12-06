'use client'

import { SessionProvider } from 'next-auth/react'

const consoleError = console.error
const SUPPRESSED_ERRORS = ['Support for defaultProps will be removed']

console.error = function filterError(msg, ...args) {
  if (!SUPPRESSED_ERRORS.some((entry) => msg.includes(entry))) {
    consoleError(msg, ...args)
  }
}

export default SessionProvider
