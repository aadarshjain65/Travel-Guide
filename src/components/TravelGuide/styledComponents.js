import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #eef4f7;
`

export const TravelGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`

export const TravelGuideHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: #334155;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 3px solid #52bbf0;
`

export const PackagesListContainer = styled.ul`
  padding-left: 0;
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
