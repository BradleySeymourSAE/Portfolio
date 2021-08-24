import styled from 'styled-components/macro';


const SectionHeader = styled.header
`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.darken};
`;

const SectionLayout = styled.section
`
    background-color: ${({ theme }) => theme.colors.darken};
    color: ${({ theme }) => theme.colors.darken};
`;


const SectionTitle = styled.h2
`
  color: ${({ theme }) => theme.colors.lighten};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 2.4rem;
  margin-bottom: 30px;
`;

const SectionContent = styled.div
`
    font-family: 'Poppins', sans-serif;
    height: auto;
    font-size: 1.35em;
    line-height: 200%;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.darkenAccent};
    color: ${({ theme }) => theme.colors.lighten};
`;

const SectionFooter = styled.footer
`


`;


export { SectionHeader, SectionLayout, SectionTitle, SectionContent, SectionFooter };