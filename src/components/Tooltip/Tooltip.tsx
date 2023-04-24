import styles from './Tooltip.module.scss';

interface Props {
  text: string;
  selected: boolean;
  onClick: () => void;
  children: JSX.Element;
}

const Tooltip = (props: Props): JSX.Element => {
  const { text, selected, onClick, children } = props;
  const { container, containerActive } = styles;

  return (
    <div
      className={selected ? containerActive : container}
      onClick={onClick}
      data-tooltip={text}>
      {children}
    </div>
  );
};

export default Tooltip;
