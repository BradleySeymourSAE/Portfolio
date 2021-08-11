import styled from 'styled-components/macro';


const SectionHeader = styled.header
`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.darken};
`;

const SectionLayout = styled.section
`
    background-color: ${({ theme }) => theme.colors.lighten};
    color: ${({ theme }) => theme.colors.darken};
`;


const SectionTitle = styled.h2
`
  color: ${(p) => (p.color ? p.color : 900)};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 2.4rem;
  margin-bottom: 30px;
`;

const SectionContent = styled.div
`
`;

const SectionFooter = styled.footer
`


`;


export { SectionHeader, SectionLayout, SectionTitle, SectionContent, SectionFooter };