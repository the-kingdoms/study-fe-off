interface Props {
  text: string;
  className?: string;
}

const InputField = ({ text, className }: Props) => {
  return (
    <input
      className={`w-full h-full border-b border-black text-lg placeholder:text-black placeholder:font-bold focus:outline-none${
        className ?? ""
      }`}
      placeholder={text}
    ></input>
  );
};
export default InputField;
