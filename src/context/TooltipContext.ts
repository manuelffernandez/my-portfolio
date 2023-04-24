import { createContext } from 'react';
import { type TooltipValue } from './TooltipProvider';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const TooltipContext = createContext<TooltipValue>({} as TooltipValue);

export default TooltipContext;
