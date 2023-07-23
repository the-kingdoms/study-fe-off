interface Props {
  onClick?: () => void;
  text: string;
  className?: string;
}
const WhiteButton = ({ onClick, text, className }: Props) => {
  return (
    <div
      className={`w-full h-full bg-white-500 ${className}`}
      onClick={onClick}
    >
      <div className="text-black text-lg flex-none">{text}</div>
    </div>
  );
};
export default WhiteButton;
