import styles from './Tooltip.module.scss';

interface Props {
  text: string;
}

const Tooltip = (props: Props): JSX.Element => {
  const { text } = props;
  const { containerActive } = styles;

  return <div className={containerActive} data-tooltip={text}></div>;
};

export default Tooltip;
