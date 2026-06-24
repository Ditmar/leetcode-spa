import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import {
  Button,
  Chip,
  Grid,
  LinearProgress,
  Skeleton,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';

import { EXPLORE_CATEGORIES, EXPLORE_DIFFICULTIES, EXPLORE_TOPICS } from './ExplorePage.constants';
import { useExplorePage } from './ExplorePage.hook';
import {
  EmptyState,
  ExploreContent,
  ExplorePageRoot,
  FilterGroup,
  FiltersCard,
  HeaderSection,
  ProgressHeader,
  StatCard,
  StatIcon,
  StatsGrid,
  TopicCard,
  TopicCardAction,
  TopicCardContent,
  TopicCardHeader,
  TopicDescription,
  TopicIcon,
} from './ExplorePage.styles';
import { getDifficultyColor, getProgressPercent } from './ExplorePage.utils';

import type { ExploreIcon, ExplorePageProps } from './ExplorePage.types';

const renderTopicIcon = (icon: ExploreIcon) => {
  switch (icon) {
    case 'arrays':
      return <ShowChartOutlinedIcon color="primary" />;

    case 'linkedList':
      return <LinkOutlinedIcon />;

    case 'search':
      return <ManageSearchOutlinedIcon />;

    case 'hash':
      return <MenuBookOutlinedIcon color="warning" />;

    case 'recursion':
      return <RecyclingOutlinedIcon color="success" />;

    case 'dp':
      return <EmojiEventsOutlinedIcon color="error" />;

    default:
      return <MenuBookTwoToneIcon />;
  }
};

export const ExplorePage = ({
  title = 'Explore',
  subtitle = 'Master coding interview questions by topic',
  isLoading = false,
}: ExplorePageProps) => {
  const {
    selectedCategory,
    selectedDifficulty,
    filteredTopics,
    setSelectedCategory,
    setSelectedDifficulty,
  } = useExplorePage();

  const solvedProblems = EXPLORE_TOPICS.reduce((acc, topic) => acc + topic.progress, 0);

  const totalProblems = EXPLORE_TOPICS.reduce((acc, topic) => acc + topic.totalProblems, 0);

  const overallProgress =
    totalProblems > 0 ? Math.round((solvedProblems / totalProblems) * 100) : 0;

  return (
    <ExplorePageRoot>
      <ExploreContent>
        <HeaderSection>
          <Typography variant="h5" fontWeight={700}>
            {title}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            {subtitle}
          </Typography>
        </HeaderSection>

        <StatsGrid>
          <StatCard elevation={1}>
            <StatIcon>
              <MenuBookOutlinedIcon color="primary" fontSize="small" />
            </StatIcon>

            <div>
              <Typography variant="h6" fontWeight={700}>
                {EXPLORE_TOPICS.length}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                Topics Available
              </Typography>
            </div>
          </StatCard>

          <StatCard elevation={1}>
            <StatIcon>
              <EmojiEventsOutlinedIcon color="success" fontSize="small" />
            </StatIcon>

            <div>
              <Typography variant="h6" fontWeight={700}>
                {solvedProblems}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                Problems Solved
              </Typography>
            </div>
          </StatCard>

          <StatCard elevation={1}>
            <StatIcon>
              <ShowChartOutlinedIcon color="secondary" fontSize="small" />
            </StatIcon>

            <div>
              <Typography variant="h6" fontWeight={700}>
                {overallProgress}%
              </Typography>

              <Typography variant="caption" color="text.secondary">
                Overall Progress
              </Typography>
            </div>
          </StatCard>
        </StatsGrid>

        <FiltersCard elevation={1}>
          <FilterGroup>
            <Typography variant="caption" fontWeight={600}>
              Category
            </Typography>

            <ToggleButtonGroup
              value={selectedCategory}
              exclusive
              size="small"
              onChange={(_, value) => value && setSelectedCategory(value)}
            >
              {EXPLORE_CATEGORIES.map((category) => (
                <ToggleButton key={category} value={category}>
                  {category}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </FilterGroup>

          <FilterGroup>
            <Typography variant="caption" fontWeight={600}>
              Difficulty
            </Typography>

            <ToggleButtonGroup
              value={selectedDifficulty}
              exclusive
              size="small"
              onChange={(_, value) => value && setSelectedDifficulty(value)}
            >
              {EXPLORE_DIFFICULTIES.map((difficulty) => (
                <ToggleButton key={difficulty} value={difficulty}>
                  {difficulty}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </FilterGroup>
        </FiltersCard>

        {isLoading ? (
          <Grid container spacing={2}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                <Skeleton variant="rounded" height={220} />
              </Grid>
            ))}
          </Grid>
        ) : filteredTopics.length === 0 ? (
          <EmptyState>
            <Typography variant="h6">No topics found</Typography>

            <Typography color="text.secondary">Try adjusting your filters.</Typography>
          </EmptyState>
        ) : (
          <Grid container spacing={2}>
            {filteredTopics.map((topic) => (
              <Grid key={topic.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <TopicCard elevation={1}>
                  <TopicCardContent>
                    <TopicCardHeader>
                      <TopicIcon>{renderTopicIcon(topic.icon)}</TopicIcon>

                      <Chip
                        label={topic.difficulty}
                        color={getDifficultyColor(topic.difficulty)}
                        size="small"
                      />
                    </TopicCardHeader>

                    <Typography variant="subtitle1" fontWeight={700}>
                      {topic.title}
                    </Typography>

                    <TopicDescription variant="body2" color="text.secondary">
                      {topic.description}
                    </TopicDescription>

                    <ProgressHeader>
                      <Typography variant="caption">Progress</Typography>

                      <Typography variant="caption">
                        {topic.progress}/{topic.totalProblems}
                      </Typography>
                    </ProgressHeader>

                    <LinearProgress
                      value={getProgressPercent(topic.progress, topic.totalProblems)}
                      variant="determinate"
                      sx={{
                        height: 6,
                        borderRadius: 1,
                      }}
                    />

                    <Chip label={topic.category} size="small" variant="outlined" />
                  </TopicCardContent>

                  <TopicCardAction>
                    <Button
                      fullWidth
                      variant="text"
                      size="small"
                      aria-label={
                        topic.progress > 0
                          ? `Continue learning ${topic.title}`
                          : `Start learning ${topic.title}`
                      }
                    >
                      {topic.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                    </Button>
                  </TopicCardAction>
                </TopicCard>
              </Grid>
            ))}
          </Grid>
        )}
      </ExploreContent>
    </ExplorePageRoot>
  );
};

export default ExplorePage;
