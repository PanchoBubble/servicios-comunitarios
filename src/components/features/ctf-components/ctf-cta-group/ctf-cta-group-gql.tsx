import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfGrupoBotonesQuery } from './__generated/ctf-cta-group.generated';
import { CtfCtaGroup } from './ctf-cta-group';

interface CtfCtaGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfCtaGroupGql = ({ id, locale, preview }: CtfCtaGqlPropsInterface) => {
  const { data, isLoading } = useCtfGrupoBotonesQuery({
    id,
    locale,
    preview,
  });

  const componentCta = useContentfulLiveUpdates(data?.grupoDeBotones);

  if (isLoading || !componentCta) {
    return null;
  }

  return <CtfCtaGroup {...componentCta} />;
};
