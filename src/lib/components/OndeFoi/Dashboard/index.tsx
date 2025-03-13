import Doodle from '@/lib/components/OndeFoi/Dashboard/Doodle';
import Text from '@/lib/components/OndeFoi/Dashboard/Text';

export default function Dashboard() {
  return (
    <div className="mt-0 flex h-full w-full items-center justify-center lg:mt-[-180px]">
      <div className="mt-10 flex grid h-full w-full grid-cols-1 flex-col items-center justify-center p-5 lg:flex-row lg:p-32">
        <Doodle />
        <Text />
      </div>
    </div>
  );
}
