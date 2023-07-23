interface Props {
  onClick?: () => void;
  text: string;
  className?: string;
}

const BlueButton = ({ onClick, text, className }: Props) => {
  return (
    <div
      className={`flex flex-col w-full h-full bg-blue-500 ${className}`}
      onClick={onClick}
    >
      <div className="text-white text-lg flex-none my-auto">{text}</div>
    </div>
  );
};
export default BlueButton;
