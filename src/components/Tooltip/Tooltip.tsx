import { useTooltipContext } from '@/context/TooltipProvider';
import styles from './Tooltip.module.scss';

interface Props {
  text: string;
  children: JSX.Element;
  index: number;
}

const Tooltip = (props: Props): JSX.Element => {
  const { text, children, index } = props;
  const { container, containerActive } = styles;
  const { handleSelect, selectedIndex } = useTooltipContext();
  const selectedDos = selectedIndex === index;

  return (
    <div
      className={selectedDos ? containerActive : container}
      title={text}
      onClick={() => {
        handleSelect(index);
      }}
      data-tooltip={text}>
      {children}
    </div>
  );
};

export default Tooltip;
