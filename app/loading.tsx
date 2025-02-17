export default function Loading() {
  // Or a custom loading skeleton component
  return <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">Loading...</h1>
      <p className="text-center text-lg">Please wait while we load your data</p>
    </div>

  </div>
}