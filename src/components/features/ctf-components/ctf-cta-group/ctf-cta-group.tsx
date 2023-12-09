import { Container, TextField, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

import { CtaGroupFieldsFragment } from './__generated/ctf-cta-group.generated';

import { CtfCtaIndividual } from '@src/components/features/ctf-components/ctf-cta-individual/ctf-cta-individual';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
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
    padding: theme.spacing(19, 0, 8),
  },
  headline: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(8),
  },
  headlineWrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
  },
  subline: {
    fontWeight: 400,
    lineHeight: 1.52,
    marginBottom: theme.spacing(8),
  },
  buttonWrapper: {
    display: 'grid',
    rowGap: 20,
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
}));

export const CtfCtaGroup = (props: CtaGroupFieldsFragment) => {
  const { headline, subline, buttonsCollection, colorPalette } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const [search, setSearch] = useState('');

  const classes = useStyles();

  const searchMarup =
    (buttonsCollection?.items?.length || 0) > 4 ? (
      <TextField
        value={search}
        onChange={e => setSearch(e.target.value)}
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
    ) : null;

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
          <div className={classes.headlineWrapper}>
            <Typography
              variant="h1"
              component="h2"
              className={classes.headline}
              style={{ color: colorConfig.headlineColor }}
            >
              {optimizeLineBreak(headline)}
            </Typography>
            {searchMarup}
          </div>
        )}
        {subline && (
          <LayoutContext.Provider value={{ ...defaultLayout, parent: 'cta-subline' }}>
            <div style={{ color: colorConfig.textColor }}>
              <CtfRichtext {...subline} className={classes.subline} />
            </div>
          </LayoutContext.Provider>
        )}
        <div className={(buttonsCollection?.items?.length || 0) > 1 ? classes.buttonWrapper : ''}>
          {buttonsCollection?.items
            ?.filter(item => item?.ctaText?.toLowerCase()?.includes(search.toLowerCase()))
            ?.map(
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
