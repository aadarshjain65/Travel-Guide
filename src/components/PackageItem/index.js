import {
  PackagesListItem,
  PackageImage,
  ContentSection,
  PackageName,
  PackageDescription,
} from './styledComponents'

const PackageItem = props => {
  const {packageItemDetails} = props
  const {name, imageUrl, description} = packageItemDetails

  return (
    <PackagesListItem>
      <PackageImage src={imageUrl} alt={name} />
      <ContentSection>
        <PackageName>{name}</PackageName>
        <PackageDescription>{description}</PackageDescription>
      </ContentSection>
    </PackagesListItem>
  )
}

export default PackageItem
