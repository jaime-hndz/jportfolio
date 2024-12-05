const effect =
  "hover:translate-y-1 hover:translate-x-1 hover:ml-2 border-r-8 border-b-8 hover:border-none transition ease-in-out";

export const RowCol = ({
  className,
  num = "",
  children,
  onClick,
  color = "",
}) => {
  const colors = {
    sky: ` bg-sky-500 border-sky-600 shadow-lg shadow-sky-500/50`,
    amber: ` bg-amber-500 border-amber-600 shadow-lg shadow-amber-500/50`,
    red: ` bg-red-500 border-red-600 shadow-lg shadow-red-500/50`,
    rose: ` bg-rose-500 border-rose-600 shadow-lg shadow-rose-500/50`,
    orange: ` bg-orange-500 border-orange-600 shadow-lg shadow-orange-500/50`,
    gray: ` bg-gray-100 border-gray-100 shadow-lg shadow-gray-100/50`,
    blue: ` bg-blue-500 border-blue-600 shadow-lg shadow-blue-500/50`,
  };
  return (
    <div
      onClick={onClick}
      className={`row-col${num} ${effect}  ${className} ${colors[color]}`}
    >
      {children}
    </div>
  );
};