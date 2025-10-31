// app/customer-stories/[slug]/loading.tsx
export default function LoadingStory() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="animate-spin h-10 w-10 border-4 border-t-transparent border-[#00B67A] rounded-full" />
      <p className="mt-4 text-gray-500">Loading story...</p>
    </div>
  );
}
