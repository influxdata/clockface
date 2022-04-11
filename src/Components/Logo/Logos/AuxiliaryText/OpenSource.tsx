// Libraries
import React from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors} from '../../../../Types'

// Styles
import './InfluxData.scss'

export interface OpenSourceProps extends StandardFunctionProps {
  /** Coloration of the SVG image */
  fill?: InfluxColors | string
}

export const OpenSource = ({
  className = '',
  id = 'svg--influxdata',
  fill = InfluxColors.White,
  testID = 'svg--influxdata',
}) => {
  const logoClass = classnames('cf-logo--influxdata', {
    [`${className}`]: className,
  })

  const logoStyle = {fill, 'margin-top': '23px'}

  return (
    <svg
      version="1.1"
      id={id}
      data-testid={testID}
      style={logoStyle}
      x="0px"
      y="0px"
      viewBox="0 0 588 77"
      width="344"
      height="35"
    >
      <path
        className={logoClass}
        d="M26.392 53.611c-5.036 0-9.535-1.175-13.496-3.525-3.962-2.35-7.118-5.54-9.468-9.568C1.145 36.489.004 31.923.004 26.82c0-5.036 1.175-9.568 3.525-13.597 2.35-4.029 5.506-7.218 9.467-9.568C17.025 1.238 21.49.029 26.392.029c5.036 0 9.535 1.175 13.497 3.525 4.028 2.35 7.184 5.54 9.467 9.568 2.283 4.03 3.425 8.595 3.425 13.698 0 4.969-1.175 9.501-3.526 13.597-2.35 4.03-5.539 7.252-9.568 9.67-3.962 2.35-8.393 3.524-13.295 3.524Zm0-7.654c3.492 0 6.547-.806 9.166-2.417 2.618-1.612 4.666-3.861 6.143-6.749 1.545-2.887 2.317-6.21 2.317-9.97 0-3.761-.772-7.085-2.317-9.972-1.477-2.887-3.525-5.137-6.143-6.748-2.619-1.612-5.674-2.417-9.166-2.417-3.424 0-6.479.805-9.165 2.417-2.619 1.611-4.701 3.86-6.245 6.748-1.477 2.887-2.216 6.211-2.216 9.971s.739 7.084 2.216 9.971c1.544 2.888 3.626 5.137 6.245 6.749 2.686 1.611 5.741 2.417 9.165 2.417Zm40.972 30.719V1.64h8.057l.202 9.77c1.947-3.693 4.599-6.513 7.956-8.46C86.937 1.003 90.798.029 95.162.029c4.7 0 8.863 1.141 12.489 3.424 3.626 2.283 6.48 5.44 8.561 9.468 2.082 4.029 3.123 8.662 3.123 13.9 0 4.968-1.142 9.5-3.425 13.596-2.216 4.03-5.237 7.252-9.064 9.67-3.761 2.35-7.991 3.524-12.691 3.524-3.962 0-7.52-.906-10.676-2.719-3.089-1.88-5.607-4.532-7.554-7.957v33.741h-8.561Zm25.582-30.72c3.492 0 6.547-.805 9.166-2.416 2.618-1.612 4.666-3.861 6.144-6.749 1.544-2.887 2.316-6.21 2.316-9.97 0-3.761-.772-7.085-2.316-9.972-1.478-2.887-3.526-5.137-6.144-6.748-2.619-1.612-5.674-2.417-9.166-2.417-3.424 0-6.479.805-9.165 2.417-2.619 1.611-4.7 3.86-6.245 6.748-1.477 2.887-2.216 6.211-2.216 9.971s.739 7.084 2.216 9.971c1.545 2.888 3.626 5.137 6.245 6.749 2.686 1.611 5.741 2.417 9.165 2.417Zm65.872 7.655c-5.707 0-10.676-1.074-14.906-3.222-4.163-2.15-7.386-5.204-9.669-9.166-2.216-4.029-3.324-8.762-3.324-14.201 0-5.305 1.074-9.972 3.223-14 2.149-4.03 5.103-7.185 8.863-9.468 3.761-2.35 8.058-3.525 12.892-3.525 4.566 0 8.528 1.04 11.885 3.122 3.425 2.082 6.077 4.969 7.957 8.662 1.947 3.693 2.921 8.024 2.921 12.993 0 .873-.034 1.678-.101 2.417 0 .739-.033 1.51-.101 2.317h-39.079c.605 5.304 2.619 9.367 6.044 12.187 3.424 2.82 8.024 4.23 13.798 4.23 5.909 0 11.684-1.377 17.324-4.13l1.007 7.252c-2.283 1.41-5.103 2.518-8.46 3.324-3.291.806-6.715 1.209-10.274 1.209Zm-3.424-46.23c-4.365 0-7.957 1.377-10.777 4.13-2.82 2.686-4.533 6.446-5.137 11.28h30.921c0-.738-.067-1.443-.201-2.115-.538-4.297-2.116-7.587-4.734-9.87-2.552-2.283-5.909-3.425-10.072-3.425ZM194.246 52V1.64h8.058l.1 8.662c1.411-3.223 3.593-5.74 6.547-7.554 3.022-1.813 6.446-2.72 10.274-2.72 5.976 0 10.575 1.881 13.798 5.641 3.223 3.693 4.835 8.998 4.835 15.914V52h-8.562V23.094c0-10.34-4.028-15.511-12.086-15.511-4.499 0-8.024 1.477-10.575 4.431-2.552 2.955-3.828 7.017-3.828 12.188V52h-8.561Zm96.284 1.611c-3.156 0-6.312-.436-9.468-1.309-3.088-.873-5.573-2.014-7.453-3.424l1.309-7.554c2.149 1.544 4.633 2.786 7.454 3.726 2.887.94 5.606 1.41 8.158 1.41 3.76 0 6.681-.637 8.762-1.913 2.082-1.343 3.123-3.156 3.123-5.44 0-1.476-.336-2.685-1.007-3.625-.672-1.007-1.881-1.914-3.626-2.72-1.746-.872-4.264-1.779-7.554-2.719-5.641-1.678-9.669-3.693-12.087-6.043-2.417-2.35-3.626-5.405-3.626-9.165 0-4.566 1.679-8.159 5.036-10.777 3.425-2.686 8.058-4.03 13.9-4.03 2.753 0 5.539.404 8.359 1.21 2.821.738 5.103 1.678 6.849 2.82l-1.41 7.251c-4.297-2.753-8.964-4.129-14-4.129-3.357 0-5.942.604-7.755 1.813-1.813 1.141-2.72 2.787-2.72 4.935 0 2.082.773 3.727 2.317 4.935 1.544 1.209 4.398 2.418 8.561 3.626 6.446 1.88 10.945 4.029 13.496 6.446 2.619 2.418 3.929 5.64 3.929 9.67 0 4.498-1.881 8.124-5.641 10.877s-8.729 4.13-14.906 4.13Zm57.003 0c-5.036 0-9.535-1.175-13.496-3.525-3.962-2.35-7.118-5.54-9.468-9.568-2.283-4.029-3.424-8.595-3.424-13.698 0-5.036 1.175-9.568 3.525-13.597 2.35-4.029 5.506-7.218 9.467-9.568 4.029-2.417 8.494-3.626 13.396-3.626 5.036 0 9.535 1.175 13.496 3.525 4.029 2.35 7.185 5.54 9.468 9.568 2.283 4.03 3.424 8.595 3.424 13.698 0 4.969-1.175 9.501-3.525 13.597-2.35 4.03-5.539 7.252-9.568 9.67-3.962 2.35-8.393 3.524-13.295 3.524Zm0-7.654c3.492 0 6.547-.806 9.165-2.417 2.619-1.612 4.667-3.861 6.144-6.749 1.545-2.887 2.317-6.21 2.317-9.97 0-3.761-.772-7.085-2.317-9.972-1.477-2.887-3.525-5.137-6.144-6.748-2.618-1.612-5.673-2.417-9.165-2.417-3.424 0-6.48.805-9.165 2.417-2.619 1.611-4.701 3.86-6.245 6.748-1.477 2.887-2.216 6.211-2.216 9.971s.739 7.084 2.216 9.971c1.544 2.888 3.626 5.137 6.245 6.749 2.685 1.611 5.741 2.417 9.165 2.417Zm58.396 7.654c-5.708 0-10.106-1.712-13.194-5.136-3.022-3.492-4.533-8.46-4.533-14.907V1.64h8.561v29.511c0 5.305.94 9.132 2.821 11.482 1.88 2.283 4.968 3.425 9.266 3.425 4.364 0 7.789-1.478 10.273-4.432 2.552-3.022 3.827-7.084 3.827-12.187V1.64h8.562V52h-8.058l-.201-8.662c-1.343 3.29-3.526 5.842-6.547 7.655-3.022 1.746-6.614 2.618-10.777 2.618ZM449.684 52V1.64h8.057l.101 10.475c1.41-3.491 3.458-6.21 6.144-8.158 2.685-2.014 5.741-3.022 9.165-3.022 1.007 0 2.082.101 3.223.303 1.209.201 2.115.47 2.72.805l-.907 8.058a16.719 16.719 0 0 0-2.921-.806 12.853 12.853 0 0 0-3.122-.403c-4.297 0-7.688 1.612-10.173 4.835-2.484 3.223-3.726 7.721-3.726 13.496V52h-8.561Zm64.099 1.31c-5.574 0-10.408-1.075-14.504-3.224-4.096-2.148-7.285-5.17-9.568-9.064-2.216-3.962-3.324-8.595-3.324-13.9 0-5.304 1.141-9.97 3.424-14 2.283-4.028 5.473-7.15 9.569-9.366C503.476 1.473 508.243.33 513.682.33c2.619 0 5.237.336 7.856 1.007 2.619.672 4.969 1.578 7.05 2.72l-1.208 7.352c-1.88-1.007-4.096-1.813-6.648-2.417-2.551-.672-4.901-1.007-7.05-1.007-5.573 0-10.072 1.712-13.496 5.136-3.358 3.358-5.036 7.89-5.036 13.598 0 5.908 1.712 10.541 5.136 13.899 3.425 3.357 8.091 5.036 14 5.036a29.39 29.39 0 0 0 6.748-.806c2.35-.537 4.868-1.377 7.554-2.518l1.008 7.151c-2.149 1.209-4.634 2.149-7.454 2.82a35.154 35.154 0 0 1-8.359 1.007Zm54.307.301c-5.71 0-10.68-1.074-14.91-3.222-4.161-2.15-7.384-5.204-9.667-9.166-2.216-4.029-3.324-8.762-3.324-14.201 0-5.305 1.074-9.972 3.223-14 2.149-4.03 5.103-7.185 8.868-9.468 3.76-2.35 8.05-3.525 12.89-3.525 4.56 0 8.53 1.04 11.88 3.122 3.43 2.082 6.08 4.969 7.96 8.662 1.95 3.693 2.92 8.024 2.92 12.993 0 .873-.03 1.678-.1 2.417 0 .739-.03 1.51-.1 2.317h-39.08c.604 5.304 2.62 9.367 6.04 12.187 3.43 2.82 8.03 4.23 13.8 4.23 5.91 0 11.68-1.377 17.32-4.13l1.01 7.252c-2.28 1.41-5.1 2.518-8.46 3.324-3.29.806-6.71 1.209-10.27 1.209Zm-3.43-46.23c-4.36 0-7.95 1.377-10.77 4.13-2.82 2.686-4.535 6.446-5.14 11.28h30.92c0-.738-.07-1.443-.2-2.115-.54-4.297-2.12-7.587-4.73-9.87-2.56-2.283-5.91-3.425-10.08-3.425Z"
      />
    </svg>
  )
}

OpenSource.displayName = 'OpenSource'
