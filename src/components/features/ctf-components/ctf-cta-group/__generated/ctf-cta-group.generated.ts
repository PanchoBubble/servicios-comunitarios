import * as Types from '../../../../../lib/__generated/graphql.types';

import { PageLinkFieldsFragment } from '../../../page-link/__generated/page-link.generated';
import { PageLinkFieldsFragmentDoc } from '../../../page-link/__generated/page-link.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type CtaGroupFieldsFragment = { __typename?: 'GrupoDeBotones', colorPalette?: string | null, headline?: string | null, subline?: { __typename?: 'GrupoDeBotonesSubline', json: any } | null, buttonsCollection?: { __typename?: 'GrupoDeBotonesButtonsCollection', items: Array<{ __typename: 'IndividualCta', ctaText?: string | null, urlParameters?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, targetPage?: (
        { __typename?: 'Page' }
        & PageLinkFieldsFragment
      ) | null } | null> } | null };

export type CtfGrupoBotonesQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfGrupoBotonesQuery = { __typename?: 'Query', grupoDeBotones?: (
    { __typename?: 'GrupoDeBotones' }
    & CtaGroupFieldsFragment
  ) | null };

export const CtaGroupFieldsFragmentDoc = `
    fragment CtaGroupFields on GrupoDeBotones {
  colorPalette
  headline
  subline {
    json
  }
  buttonsCollection {
    items {
      __typename
      sys {
        id
      }
      ctaText
      targetPage {
        ...PageLinkFields
      }
      urlParameters
      colorPalette
    }
  }
}
    `;
export const CtfGrupoBotonesDocument = `
    query CtfGrupoBotones($id: String!, $locale: String, $preview: Boolean) {
  grupoDeBotones(id: $id, locale: $locale, preview: $preview) {
    ...CtaGroupFields
  }
}
    ${CtaGroupFieldsFragmentDoc}
${PageLinkFieldsFragmentDoc}`;
export const useCtfGrupoBotonesQuery = <
      TData = CtfGrupoBotonesQuery,
      TError = unknown
    >(
      variables: CtfGrupoBotonesQueryVariables,
      options?: UseQueryOptions<CtfGrupoBotonesQuery, TError, TData>
    ) =>
    useQuery<CtfGrupoBotonesQuery, TError, TData>(
      ['CtfGrupoBotones', variables],
      customFetcher<CtfGrupoBotonesQuery, CtfGrupoBotonesQueryVariables>(CtfGrupoBotonesDocument, variables),
      options
    );

useCtfGrupoBotonesQuery.getKey = (variables: CtfGrupoBotonesQueryVariables) => ['CtfGrupoBotones', variables];
;

useCtfGrupoBotonesQuery.fetcher = (variables: CtfGrupoBotonesQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfGrupoBotonesQuery, CtfGrupoBotonesQueryVariables>(CtfGrupoBotonesDocument, variables, options);