import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={250}
    height={346}
    viewBox="0 0 250 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="61" y="178" rx="3" ry="3" width="131" height="15" /> 
    <circle cx="128" cy="85" r="76" /> 
    <rect x="73" y="201" rx="0" ry="0" width="112" height="9" /> 
    <rect x="67" y="232" rx="18" ry="18" width="122" height="35" /> 
    <rect x="138" y="246" rx="0" ry="0" width="2" height="8" /> 
    <rect x="24" y="294" rx="0" ry="0" width="50" height="8" /> 
    <rect x="104" y="294" rx="0" ry="0" width="50" height="8" /> 
    <rect x="176" y="294" rx="0" ry="0" width="50" height="8" /> 
    <rect x="33" y="313" rx="0" ry="0" width="37" height="20" /> 
    <rect x="113" y="314" rx="0" ry="0" width="37" height="20" /> 
    <rect x="181" y="313" rx="0" ry="0" width="37" height="20" />
  </ContentLoader>
)

export default MyLoader