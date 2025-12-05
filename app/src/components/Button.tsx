interface ButtonProps {
  children: React.ReactNode
  border?: string
};

export default function Button({children, border}: ButtonProps) {
  return (
    <button className={`w-50 h-10 text-this-gray-500 text-[14px] ${border} border-this-gray-500 rounded-xl cursor-pointer hover:text-this-gray-950 md:w-25`}>{children}</button>
  );
};