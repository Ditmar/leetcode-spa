import type { InputLabelProps } from '@mui/material/InputLabel';
import type React from 'react';

interface BaseLabelProps
  extends Omit<InputLabelProps, 'required'> {
 
  htmlFor: string;


  children: React.ReactNode;

  
  error?: boolean;

  
  disabled?: boolean;

  tooltip?: string;
}

type RequiredStateProps =
  | {
      required?: true;
      optional?: never;
    }
  | {
      required?: false;
      optional?: boolean;
    };


export type LabelProps = BaseLabelProps &
  RequiredStateProps;

