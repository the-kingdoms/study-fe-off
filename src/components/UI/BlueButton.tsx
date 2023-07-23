import { useState } from "react";
interface Props {
  text: string;
  className?: string;
}

const BlueButton = ({ text, className }: Props) => {
  const onClick = () => {
    //상위로 쏴주기
  };
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
