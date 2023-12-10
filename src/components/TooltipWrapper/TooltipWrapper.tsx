import TooltipProvider from '@/context/TooltipProvider';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const TooltipWrapper = (props: Props): JSX.Element => {
  const { children } = props;

  return <TooltipProvider>{children}</TooltipProvider>;
};

export default TooltipWrapper;
