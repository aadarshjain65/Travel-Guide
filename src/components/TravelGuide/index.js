import {Component} from 'react'
import Loader from 'react-loader-spinner'

import PackageItem from '../PackageItem'

import {
  AppContainer,
  TravelGuideContainer,
  TravelGuideHeading,
  PackagesListContainer,
  LoaderContainer,
} from './styledComponents'

class TravelGuide extends Component {
  state = {
    isLoading: false,
    packagesList: [],
  }

  componentDidMount() {
    this.getPackages()
  }

  getPackages = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachPackage => ({
        id: eachPackage.id,
        name: eachPackage.name,
        imageUrl: eachPackage.image_url,
        description: eachPackage.description,
      }))
      this.setState({
        packagesList: updatedData,
        isLoading: false,
      })
    }
  }

  renderPackagesList = () => {
    const {packagesList} = this.state
    return (
      <PackagesListContainer>
        {packagesList.map(eachPackage => (
          <PackageItem key={eachPackage.id} packageItemDetails={eachPackage} />
        ))}
      </PackagesListContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  render() {
    const {isLoading} = this.state

    return (
      <AppContainer>
        <TravelGuideContainer>
          <TravelGuideHeading>Travel Guide</TravelGuideHeading>
          {isLoading ? this.renderLoader() : this.renderPackagesList()}
        </TravelGuideContainer>
      </AppContainer>
    )
  }
}

export default TravelGuide
