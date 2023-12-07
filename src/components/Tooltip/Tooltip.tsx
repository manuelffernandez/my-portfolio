import { useContext } from 'react';
import styles from './Tooltip.module.scss';
import TooltipContext from '../../context/TooltipContext';

interface Props {
  text: string;
  children: JSX.Element;
  index: number;
}

const Tooltip = (props: Props): JSX.Element => {
  const { text, children, index } = props;
  const { container, containerActive } = styles;
  const { handleSelect, selectedIndex } = useContext(TooltipContext);
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
