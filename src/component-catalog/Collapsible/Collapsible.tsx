import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

import * as S from './Collapsible.styles';

import type { CollapsibleProps } from './Collapsible.types';

export const Collapsible: React.FC<CollapsibleProps> = ({
  title = '@peduarte starred 3 repositories',
  items,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <S.StyledRoot open={open} onOpenChange={setOpen}>
      <S.Header direction="row">
        <S.Title>
          {title} {items.length > 0 && `— ${items.length} items`}
        </S.Title>
        <CollapsiblePrimitive.Trigger asChild>
          <S.ToggleButton aria-label={open ? 'Close' : 'Open'}>
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </S.ToggleButton>
        </CollapsiblePrimitive.Trigger>
      </S.Header>

      <S.StyledContent>
        {items.map((item, index) => (
          <S.ItemCard key={`${item}-${index}`}>{item}</S.ItemCard>
        ))}
      </S.StyledContent>
    </S.StyledRoot>
  );
};
