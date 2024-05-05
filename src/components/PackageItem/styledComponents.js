import styled from 'styled-components'

export const PackagesListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  width: 40%;
`

export const PackageImage = styled.img`
  width: 100%;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const PackageName = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #475569;
  font-weight: 400px;
  margin-top: 0;
`

export const PackageDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  font-weight: 400;
  line-height: 1.3;
  margin-top: 0;
`
