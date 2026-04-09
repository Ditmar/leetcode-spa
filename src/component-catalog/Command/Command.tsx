import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Dialog,
  DialogContent,
  InputAdornment,
  List,
  ListSubheader,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCallback, useEffect, useId, useState } from 'react';

import { useCommand } from './Command.hook';
import {
  CommandItemRow,
  CommandOpenButton,
  CommandPanel,
  CommandResults,
  CommandWrapper,
} from './Command.styles';

import type { CommandProps, CommandItem } from './Command.types';

export const Command = ({
  open = false,
  groups,
  placeholder = 'Type a command or search...',
  emptyMessage = 'No results found.',
  title = 'Command',
  subtitle = 'Command palette / search',
  onClose,
}: CommandProps) => {
  const [internalOpen, setInternalOpen] = useState(open || false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const listboxId = useId();

  useEffect(() => {
    setInternalOpen(open);
  }, [open]);

  const handleClose = useCallback(() => {
    setInternalOpen(false);
    onClose?.();
  }, [onClose]);

  const { query, setQuery, filteredGroups, flatItems, highlightedIndex, handleKeyDown } =
    useCommand({
      groups,
      onClose: handleClose,
    });

  const hasResults = filteredGroups.length > 0;
  const activeItem = flatItems[highlightedIndex];
  const activeDescendantId = activeItem ? `command-item-${activeItem.id}` : undefined;

  const handleOpen = useCallback(() => setInternalOpen(true), []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    [setQuery]
  );

  const handleSelect = useCallback(
    (itm: CommandItem) => () => {
      itm.onSelect?.();
      handleClose();
    },
    [handleClose]
  );

  return (
    <CommandWrapper>
      <Typography variant="h4" fontWeight={700}>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {subtitle}
      </Typography>

      <CommandPanel>
        <CommandOpenButton variant="outlined" size="small" onClick={handleOpen}>
          Open Command Palette
        </CommandOpenButton>

        <Dialog
          open={internalOpen}
          onClose={handleClose}
          fullWidth
          maxWidth="md"
          fullScreen={isMobile}
        >
          <DialogContent sx={{ p: 3 }}>
            <TextField
              fullWidth
              value={query}
              placeholder={placeholder}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              role="combobox"
              aria-expanded={internalOpen}
              aria-controls={listboxId}
              aria-activedescendant={activeDescendantId}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
                sx: {
                  minHeight: isMobile ? theme.spacing(5.5) : undefined,
                },
              }}
            />

            {hasResults ? (
              <CommandResults>
                <List id={listboxId} sx={{ py: 1 }}>
                  {filteredGroups.map((group) => (
                    <li key={group.id}>
                      <Box component="ul" sx={{ p: 0, m: 0 }}>
                        <ListSubheader>{group.heading}</ListSubheader>

                        {group.items.map((item) => {
                          const itemIndex = flatItems.findIndex(
                            (flatItem) => flatItem.id === item.id
                          );
                          const isHighlighted = itemIndex !== -1 && itemIndex === highlightedIndex;
                          const itemDomId = `command-item-${item.id}`;

                          return (
                            <CommandItemRow
                              key={item.id}
                              id={itemDomId}
                              disabled={item.disabled}
                              selected={isHighlighted}
                              onClick={handleSelect(item)}
                            >
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: theme.spacing(1.25),
                                  justifyContent: 'space-between',
                                  width: '100%',
                                }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: 'var(--ring)',
                                      '& svg': {
                                        fontSize: theme.typography.body1.fontSize,
                                      },
                                    }}
                                  >
                                    {item.icon}
                                  </Box>

                                  <Typography
                                    sx={{
                                      fontSize: theme.typography.body2.fontSize,
                                      fontWeight: isHighlighted ? 500 : 400,
                                    }}
                                  >
                                    {item.label}
                                  </Typography>
                                </Box>

                                {item.shortcut ? (
                                  <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
                                    {item.shortcut}
                                  </Typography>
                                ) : null}
                              </Box>
                            </CommandItemRow>
                          );
                        })}
                      </Box>
                    </li>
                  ))}
                </List>
              </CommandResults>
            ) : (
              <Typography sx={{ mt: 2 }}>{emptyMessage}</Typography>
            )}
          </DialogContent>
        </Dialog>
      </CommandPanel>
    </CommandWrapper>
  );
};
