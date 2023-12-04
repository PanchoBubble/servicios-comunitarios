import { Container, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { CtaGroupFieldsFragment } from './__generated/ctf-cta-group.generated';

import { CtfCtaIndividual } from '@src/components/features/ctf-components/ctf-cta-individual/ctf-cta-individual';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { PageLink } from '@src/components/features/page-link';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { getColorConfigFromPalette } from '@src/theme';
import { optimizeLineBreak } from '@src/utils';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
  },
  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '93.4rem',
    padding: theme.spacing(19, 0, 19),
  },
  headline: {
    fontWeight: 'bold',
  },
  subline: {
    fontWeight: 400,
    lineHeight: 1.52,
    marginTop: theme.spacing(8),
  },
  buttonWrapper: {
    display: 'grid',
    marginTop: 30,
    rowGap: 20,
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
}));

export const CtfCtaGroup = (props: CtaGroupFieldsFragment) => {
  console.log(props);
  const { headline, subline, buttonsCollection, colorPalette } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');

  const classes = useStyles();

  return (
    <Container
      maxWidth={false}
      className={classes.root}
      style={{
        backgroundColor: colorConfig.backgroundColor,
      }}
    >
      <div className={classes.innerContainer}>
        {headline && (
          <Typography
            variant="h1"
            component="h2"
            className={classes.headline}
            style={{ color: colorConfig.headlineColor }}
          >
            {optimizeLineBreak(headline)}
          </Typography>
        )}
        {subline && (
          <LayoutContext.Provider value={{ ...defaultLayout, parent: 'cta-subline' }}>
            <div style={{ color: colorConfig.textColor }}>
              <CtfRichtext {...subline} className={classes.subline} />
            </div>
          </LayoutContext.Provider>
        )}
        <div className={classes.buttonWrapper}>
          {buttonsCollection?.items?.map(
            button =>
              button && (
                <CtfCtaIndividual key={button?.sys.id} {...button} colorPalette={colorPalette} />
              ),
          )}
        </div>
      </div>
    </Container>
  );
};
