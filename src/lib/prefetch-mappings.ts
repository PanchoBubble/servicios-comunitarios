import { useCtfCtaQuery } from '@src/components/features/ctf-components/ctf-cta/__generated/ctf-cta.generated';
import { useCtfGrupoBotonesQuery } from '@src/components/features/ctf-components/ctf-cta-group/__generated/ctf-cta-group.generated';
import { useCtfDuplexQuery } from '@src/components/features/ctf-components/ctf-duplex/__generated/ctf-duplex.generated';
import { useCtfHeroBannerQuery } from '@src/components/features/ctf-components/ctf-hero-banner/__generated/ctf-hero-banner.generated';
import { useCtfInfoBlockQuery } from '@src/components/features/ctf-components/ctf-info-block/__generated/ctf-info-block.generated';
import { useCtfQuoteQuery } from '@src/components/features/ctf-components/ctf-quote/__generated/ctf-quote.generated';
import { useCtfTextBlockQuery } from '@src/components/features/ctf-components/ctf-text-block/__generated/ctf-text-block.generated';

/**
 * This map is used to match a generated GQL query to a Contentful model's __typename. The query is used to prefetch the data through React Query's prefetchQuery method
 */
export const prefetchMap = {
  ComponentCta: useCtfCtaQuery,
  ComponentHeroBanner: useCtfHeroBannerQuery,
  ComponentDuplex: useCtfDuplexQuery,
  ComponentInfoBlock: useCtfInfoBlockQuery,
  ComponentTextBlock: useCtfTextBlockQuery,
  ComponentQuote: useCtfQuoteQuery,
  GrupoDeBotones: useCtfGrupoBotonesQuery,
};
