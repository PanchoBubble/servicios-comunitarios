import { Container, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { PageLink } from '@src/components/features/page-link';
import { IndividualCta } from '@src/lib/__generated/graphql.types';
import { getColorConfigFromPalette } from '@src/theme';
import { DeepPartial } from '@src/utils';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    height: '100%',
  },
  ctaContainer: {
    height: '100%',
    width: '100%',
    '& a': {
      width: '100%',
      height: '100%',
    },
    '& button': {
      width: '100%',
      height: '100%',
    },
  },
}));

export const CtfCtaIndividual = (props: DeepPartial<IndividualCta> & { colorPalette?: any }) => {
  const { ctaText, colorPalette, urlParameters, targetPage } = props;
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
      <div className={classes.ctaContainer}>
        <PageLink
          size="large"
          page={targetPage as any}
          variant="contained"
          color={colorConfig.buttonColor}
          isButton
          urlParams={urlParameters ?? ''}
        >
          {ctaText}
        </PageLink>
      </div>
    </Container>
  );
};
