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
import { useId, useState } from 'react';

import { useCommand } from './Command.hook';
import {
  CommandItemRow,
  CommandOpenButton,
  CommandPanel,
  CommandResults,
  CommandWrapper,
} from './Command.styles';

import type { CommandProps } from './Command.types';

export default function Command({
  open = false,
  groups,
  placeholder = 'Type a command or search...',
  emptyMessage = 'No results found.',
  title = 'Command',
  subtitle = 'Command palette / search',
  onClose,
}: CommandProps) {
  const [internalOpen, setInternalOpen] = useState(open);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const listboxId = useId();

  const handleClose = () => {
    setInternalOpen(false);
    onClose?.();
  };

  const { query, setQuery, filteredGroups, highlightedIndex, handleKeyDown } = useCommand({
    groups,
    onClose: handleClose,
  });

  const hasResults = filteredGroups.length > 0;
  const flatItems = filteredGroups.flatMap((group) => group.items.filter((item) => !item.disabled));

  const activeItem = flatItems[highlightedIndex];
  const activeDescendantId = activeItem ? `command-item-${activeItem.id}` : undefined;

  let currentItemIndex = -1;

  return (
    <CommandWrapper>
      <Typography variant="h4" fontWeight={700}>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {subtitle}
      </Typography>

      <CommandPanel>
        <CommandOpenButton variant="outlined" size="small" onClick={() => setInternalOpen(true)}>
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
              onChange={(event) => setQuery(event.target.value)}
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
                  minHeight: isMobile ? 44 : undefined,
                },
              }}
            />

            {hasResults ? (
              <CommandResults>
                <List id={listboxId} sx={{ py: 1 }}>
                  {filteredGroups.map((group) => (
                    <li key={group.id}>
                      <ul style={{ padding: 0, margin: 0 }}>
                        <ListSubheader>{group.heading}</ListSubheader>

                        {group.items.map((item) => {
                          if (!item.disabled) {
                            currentItemIndex += 1;
                          }

                          const isHighlighted =
                            !item.disabled && currentItemIndex === highlightedIndex;

                          const itemDomId = `command-item-${item.id}`;

                          return (
                            <CommandItemRow
                              key={item.id}
                              id={itemDomId}
                              disabled={item.disabled}
                              selected={isHighlighted}
                              onClick={() => {
                                item.onSelect?.();
                                handleClose();
                              }}
                            >
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
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
                                        fontSize: 18,
                                      },
                                    }}
                                  >
                                    {item.icon}
                                  </Box>

                                  <Typography
                                    sx={{ fontSize: 15, fontWeight: isHighlighted ? 500 : 400 }}
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
                      </ul>
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
}
