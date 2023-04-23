interface Props {
  children: JSX.Element | JSX.Element[];
}

const TooltipWrapper = (props: Props): JSX.Element => {
  const { children } = props;

  return <div>{children}</div>;
};

export default TooltipWrapper;
