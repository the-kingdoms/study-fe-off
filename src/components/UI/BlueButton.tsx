interface Props {
  onClick: () => void;
  text: string;
  className?: string;
}

const BlueButton = ({ onClick, text, className }: Props) => {
  return (
    <div className={`w-full h-full bg-blue-500 ${className}`} onClick={onClick}>
      <div className="text-white text-lg flex-none">{text}</div>
    </div>
  );
};
export default BlueButton;
