import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import type { User } from '@/payload-types'

/**
 * Retrieves the currently authenticated user using the JWT token stored in cookies
 * @param args Optional configuration object for redirect behavior
 * @param args.nullUserRedirect Path to redirect to if no user is found
 * @param args.validUserRedirect Path to redirect to if a valid user is found
 * @returns Object containing the JWT token and user data
 */
export const getMeUser = async (args?: {
  nullUserRedirect?: string
  validUserRedirect?: string
}): Promise<{
  token: string
  user: User
}> => {
  // Destructure optional redirect paths from args
  const { nullUserRedirect, validUserRedirect } = args || {}

  // Get the cookie store and extract the payload-token
  const cookieStore = await cookies()
  const token = cookieStore.get('payload-token')?.value

  // Make API request to /api/users/me endpoint to get the current user
  const meUserReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })

  // Parse the response to get user data
  const {
    user,
  }: {
    user: User
  } = await meUserReq.json()

  // If validUserRedirect is provided and we have a valid user,
  // redirect to the specified path
  if (validUserRedirect && meUserReq.ok && user) {
    redirect(validUserRedirect)
  }

  // If nullUserRedirect is provided and either the request failed
  // or no user was found, redirect to the specified path
  if (nullUserRedirect && (!meUserReq.ok || !user)) {
    redirect(nullUserRedirect)
  }

  // Return the token and user data
  // Note: Token is force-unwrapped (!) because if it doesn't exist,
  // the user would have been redirected by now
  return {
    token: token!,
    user,
  }
}
