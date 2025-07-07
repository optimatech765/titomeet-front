'use client'
import { Button } from "@heroui/button"

// Error boundaries must be Client Components

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <Button
          name={"try-again"}
          onPress={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </body>
    </html>
  )
}