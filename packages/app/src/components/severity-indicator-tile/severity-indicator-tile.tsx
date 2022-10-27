import { colors } from '@corona-dashboard/common';
import css from '@styled-system/css';
import styled from 'styled-components';
import { space } from '~/style/theme';
import { Box } from '~/components/base';
import { Markdown } from '~/components/markdown';
import { BoldText, InlineText } from '~/components/typography';
import { TrendIcon } from '~/domain/topical/types';
import { SeverityIndicatorLabel } from './components/severity-indicator-label';
import { SeverityIndicator } from './components/severity-indicator';
import { SEVERITY_INDICATOR_TILE_COLUMN_MIN_WIDTH } from './constants';
import { getSeverityColor } from './logic/get-severity-color';
import { SeverityLevels } from './types';
import { mapStringToColors } from './logic/map-string-to-colors';
import { setTrendIcon } from '~/components/severity-indicator-tile/logic/set-trend-icon';

interface SeverityIndicatorTileProps {
  description: string;
  label: string;
  level: SeverityLevels;
  title: string;
  sourceLabel: string;
  datesLabel: string;
  levelDescription: string;
  trendIcon: TrendIcon | null;
}

export const SeverityIndicatorTile = ({ description, label, level, title, datesLabel, sourceLabel, levelDescription, trendIcon }: SeverityIndicatorTileProps) => {
  const hasIconProps = trendIcon?.direction && trendIcon?.color;
  const iconColor = trendIcon?.color.toUpperCase();

  return (
    <Box
      alignItems="flex-start"
      border={`1px solid ${colors.gray3}`}
      borderLeft={`${space[2]} solid ${getSeverityColor(level)}`}
      css={css({ gap: `0 ${space[5]}` })}
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      p={4}
      mt={4}
      as="figure"
    >
      <Box flexGrow={1} width={`min(${SEVERITY_INDICATOR_TILE_COLUMN_MIN_WIDTH}px, 50%)`}>
        <BoldText>
          <Markdown content={title} />
        </BoldText>
        <InlineText>{datesLabel}</InlineText>

        <SeverityIndicatorLabel label={label} level={level} />

        <SeverityIndicator level={level} />
      </Box>

      <Box flexGrow={1} width={`min(${SEVERITY_INDICATOR_TILE_COLUMN_MIN_WIDTH}px, 50%)`} as="figcaption">
        <Markdown content={description} />
        <Box display={hasIconProps ? 'flex' : 'block'} alignItems="center" mt={3} css={css({ gap: 2 })}>
          {hasIconProps && <TrendIconWrapper color={mapStringToColors(iconColor)}>{setTrendIcon(trendIcon.direction)}</TrendIconWrapper>}

          <Markdown content={levelDescription} />
        </Box>
        <Box my={3}>
          <InlineText color="gray7">{sourceLabel}</InlineText>
        </Box>
      </Box>
    </Box>
  );
};

const TrendIconWrapper = styled.span`
  color: ${({ color }) => color};
  flex-shrink: 0;
  width: 20px;
`;
