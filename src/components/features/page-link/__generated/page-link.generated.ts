import * as Types from '../../../../lib/__generated/graphql.types';

export type PageLinkFieldsFragment = { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string } };

export const PageLinkFieldsFragmentDoc = `
    fragment PageLinkFields on Page {
  __typename
  slug
  sys {
    id
  }
  pageName
}
    `;