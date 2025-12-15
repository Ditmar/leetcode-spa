import Box from '@mui/material/Box';
import React from 'react';

import { Logo } from '../Logo/Logo';

import { DEFAULT_NAV_ITEMS } from './NavigationSidebar.constants';
import { Root, NavList, NavItem, IconWrap, Label } from './NavigationSidebar.styles';

import type { NavigationSidebarProps } from './NavigationSidebar.types';

const gradient = 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)';

const InlineSvg: React.FC<{ svg: string; selected?: boolean }> = ({ svg, selected = false }) => {
  const id = React.useMemo(() => `navGrad_${Math.random().toString(36).slice(2, 9)}`, []);
  const [content, setContent] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    const process = (raw: string) => {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(raw, 'image/svg+xml');
        const svg = doc.querySelector('svg');
        if (!svg) {
          if (!cancelled) setContent(raw);
          return;
        }

        // ensure defs exists
        let defs = svg.querySelector('defs');
        if (!defs) {
          defs = doc.createElementNS('http://www.w3.org/2000/svg', 'defs');
          svg.insertBefore(defs, svg.firstChild);
        }

        // create gradient if selected
        if (selected) {
          const grad = doc.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
          grad.setAttribute('id', id);
          grad.setAttribute('x1', '0');
          grad.setAttribute('y1', '0');
          grad.setAttribute('x2', '1');
          grad.setAttribute('y2', '0');
          const stop1 = doc.createElementNS('http://www.w3.org/2000/svg', 'stop');
          stop1.setAttribute('offset', '13.4%');
          stop1.setAttribute('stop-color', '#B33DEB');
          const stop2 = doc.createElementNS('http://www.w3.org/2000/svg', 'stop');
          stop2.setAttribute('offset', '86.6%');
          stop2.setAttribute('stop-color', '#DE8FFF');
          grad.appendChild(stop1);
          grad.appendChild(stop2);
          defs.appendChild(grad);

          // set all fills/strokes to gradient
          const elements = svg.querySelectorAll('[fill], [stroke]');
          elements.forEach((el) => {
            const fill = el.getAttribute('fill');
            if (fill && fill !== 'none') el.setAttribute('fill', `url(#${id})`);
            const stroke = el.getAttribute('stroke');
            if (stroke && stroke !== 'none') el.setAttribute('stroke', `url(#${id})`);
          });
        } else {
          // set fills/strokes to black
          const elements = svg.querySelectorAll('[fill], [stroke]');
          elements.forEach((el) => {
            const fill = el.getAttribute('fill');
            if (fill && fill !== 'none') el.setAttribute('fill', '#000000');
            const stroke = el.getAttribute('stroke');
            if (stroke && stroke !== 'none') el.setAttribute('stroke', '#000000');
          });
        }

        const serializer = new XMLSerializer();
        const out = serializer.serializeToString(svg);
        if (!cancelled) setContent(out);
      } catch {
        if (!cancelled) setContent(raw);
      }
    };

    if (svg.trim().startsWith('<')) {
      process(svg);
    } else {
      fetch(svg)
        .then((r) => r.text())
        .then((text) => process(text))
        .catch(() => {
          if (!cancelled) setContent(null);
        });
    }

    return () => {
      cancelled = true;
    };
  }, [svg, selected, id]);

  if (!content) return <span />;
  return <span aria-hidden dangerouslySetInnerHTML={{ __html: content }} />;
};

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
  items = DEFAULT_NAV_ITEMS,
  currentPath,
  onNavigate,
  width = 280,
}) => {
  const getInitial = () =>
    currentPath ??
    (typeof window !== 'undefined' ? window.location.pathname : undefined) ??
    '/dashboard';
  const [selectedPath, setSelectedPath] = React.useState<string>(getInitial);

  React.useEffect(() => {
    if (currentPath) setSelectedPath(currentPath);
  }, [currentPath]);

  const handleClick = (route: string) => () => {
    setSelectedPath(route);
    if (onNavigate) onNavigate(route);
  };

  return (
    <Root sx={{ width }} data-testid="navigation-sidebar-root">
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Logo orientation="vertical" />
      </Box>

      <NavList>
        {items.map((item) => {
          const selected =
            selectedPath === item.route || (!selectedPath && item.route === '/dashboard');
          return (
            <NavItem
              key={item.route}
              onClick={handleClick(item.route)}
              selected={selected}
              data-testid={item.testId}
              sx={{
                background: 'transparent',
                overflow: 'visible',
                minHeight: 56,
                display: 'flex',
                alignItems: 'center',
                // add extra spacing after Dark mode to separate from Settings
                marginBottom: item.route === '/settings/theme' ? 22 : undefined,
                '&.Mui-selected': { background: 'transparent' },
              }}
            >
              <IconWrap>
                {item.iconSvg ? (
                  <InlineSvg svg={item.iconSvg} selected={selected} />
                ) : (
                  <Box
                    sx={{
                      color: selected ? 'transparent' : '#000000',
                      backgroundImage: selected ? gradient : 'none',
                      WebkitBackgroundClip: selected ? 'text' : 'border-box',
                      backgroundClip: selected ? 'text' : 'border-box',
                    }}
                  >
                    {item.icon}
                  </Box>
                )}
              </IconWrap>

              <Label
                primary={item.label}
                sx={{
                  // apply gradient/text color to the inner primary span
                  '& .MuiListItemText-primary': {
                    display: 'inline-block',
                    color: selected ? 'transparent' : '#000000',
                    backgroundImage: selected ? gradient : 'none',
                    WebkitBackgroundClip: selected ? 'text' : 'border-box',
                    backgroundClip: selected ? 'text' : 'border-box',
                    backgroundSize: '100% 100%',
                    lineHeight: '24px',
                  },
                  // ensure label area doesn't clip
                  overflow: 'visible',
                  alignSelf: 'center',
                }}
              />
            </NavItem>
          );
        })}
      </NavList>
    </Root>
  );
};

export default NavigationSidebar;
