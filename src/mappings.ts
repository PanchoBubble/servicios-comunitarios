import dynamic from 'next/dynamic';

export const componentMap = {
  ComponentCta: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-cta/ctf-cta').then(module => module.CtfCta),
  ),
  GrupoDeBotones: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-cta-group/ctf-cta-group').then(
      module => module.CtfCtaGroup,
    ),
  ),
  ComponentDuplex: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-duplex/ctf-duplex').then(
      module => module.CtfDuplex,
    ),
  ),
  ComponentHeroBanner: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-hero-banner/ctf-hero-banner').then(
      module => module.CtfHeroBanner,
    ),
  ),
  ComponentInfoBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-info-block/ctf-info-block').then(
      module => module.CtfInfoBlock,
    ),
  ),
  ComponentQuote: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-quote/ctf-quote').then(
      module => module.CtfQuote,
    ),
  ),
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/ctf-text-block').then(
      module => module.CtfTextBlock,
    ),
  ),
};

export const componentGqlMap = {
  ComponentCta: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-cta/ctf-cta-gql').then(
      module => module.CtfCtaGql,
    ),
  ),
  GrupoDeBotones: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-cta-group/ctf-cta-group-gql').then(
      module => module.CtfCtaGroupGql,
    ),
  ),
  ComponentDuplex: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-duplex/ctf-duplex-gql').then(
      module => module.CtfDuplexGql,
    ),
  ),
  ComponentHeroBanner: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-hero-banner/ctf-hero-banner-gql').then(
      module => module.CtfHeroGql,
    ),
  ),
  ComponentInfoBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-info-block/ctf-info-block-gql').then(
      module => module.CtfInfoBlockGql,
    ),
  ),
  ComponentQuote: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-quote/ctf-quote-gql').then(
      module => module.CtfQuoteGql,
    ),
  ),
  ComponentTextBlock: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-text-block/ctf-text-block-gql').then(
      module => module.CtfTextBlockGql,
    ),
  ),
  ComponentFooter: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-footer/ctf-footer-gql').then(
      module => module.CtfFooterGql,
    ),
  ),
};
