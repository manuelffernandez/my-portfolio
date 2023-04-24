import { useState } from 'react';
import TooltipContext from './TooltipContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export interface TooltipValue {
  handleSelect: (i: number) => void;
  selectedIndex: number | null;
}

const TooltipProvider = (props: Props): JSX.Element => {
  const { children } = props;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number): void => {
    if (index === selectedIndex) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <TooltipContext.Provider value={{ handleSelect, selectedIndex }}>
      {children}
    </TooltipContext.Provider>
  );
};

export default TooltipProvider;
