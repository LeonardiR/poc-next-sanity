export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-02'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'production'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  '1x4s9wdc'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
