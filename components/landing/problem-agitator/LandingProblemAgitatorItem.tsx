import clsx from 'clsx';

export const LandingProblemAgitatorItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        className,
        'relative h-full flex items-center justify-center text-sm font-semibold w-30 text-center group cursor-pointer hover:scale-105 transition-all duration-300',
      )}
    >
      {children}
    </div>
  );
};
