import RecentPosts from '@/lib/components/Home/Posts/RecentPosts';

export default function SupportMapBiomesWidget() {
  return (
    <div className="mt-[-50px] flex items-center justify-center lg:mt-[-150px] xl:mt-20">
      <div className="w-[1500px]">
        <RecentPosts />
      </div>
    </div>
  );
}
