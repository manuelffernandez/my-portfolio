import { useState, createContext, useContext } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export interface TooltipValue {
  handleSelect: (i: number) => void;
  selectedIndex: number | null;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const TooltipContext = createContext<TooltipValue>({} as TooltipValue);

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

export const useTooltipContext = (): TooltipValue => {
  return useContext(TooltipContext);
};
