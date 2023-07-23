function FlexRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={"flex flex-row " + className}>{children}</div>;
}

export default FlexRow;
