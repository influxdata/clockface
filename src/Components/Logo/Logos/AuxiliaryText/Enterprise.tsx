// Libraries
import React from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors} from '../../../../Types'

// Styles
import './InfluxData.scss'

export interface EnterpriseProps extends StandardFunctionProps {
  /** Coloration of the SVG image */
  fill?: InfluxColors | string
}

export const Enterprise = ({
  className = '',
  id = 'svg--influxdata',
  fill = InfluxColors.White,
  testID = 'svg--influxdata',
}) => {
  const logoClass = classnames('cf-logo--influxdata', {
    [`${className}`]: className,
  })

  const logoStyle = {fill, 'margin-top': '20px'}

  return (
    <svg
      version="1.1"
      id={id}
      data-testid={testID}
      style={logoStyle}
      x="0px"
      y="0px"
      viewBox="0 0 496 102"
      width="221"
      height="45"
    >
      <path
        className={logoClass}
        d="M27.957 78.094c-5.7 0-10.663-1.073-14.888-3.22-4.158-2.145-7.377-5.197-9.657-9.154C1.199 61.697.092 56.97.092 51.537c0-5.298 1.073-9.96 3.22-13.983 2.145-4.024 5.096-7.176 8.852-9.456 3.755-2.347 8.047-3.52 12.876-3.52 4.56 0 8.517 1.039 11.87 3.118 3.42 2.079 6.069 4.963 7.947 8.651 1.944 3.688 2.917 8.014 2.917 12.977 0 .872-.034 1.676-.1 2.414 0 .738-.034 1.509-.101 2.313H8.543c.603 5.298 2.615 9.356 6.035 12.172 3.42 2.817 8.014 4.225 13.781 4.225 5.902 0 11.67-1.374 17.302-4.124l1.006 7.243c-2.28 1.408-5.096 2.515-8.45 3.32-3.286.804-6.706 1.207-10.26 1.207Zm-3.42-46.173c-4.36 0-7.947 1.375-10.764 4.124-2.816 2.683-4.527 6.438-5.13 11.267h30.882c0-.738-.067-1.442-.201-2.113-.536-4.292-2.112-7.578-4.728-9.858-2.548-2.28-5.901-3.42-10.06-3.42ZM63.34 76.484V26.187h8.047l.1 8.651c1.41-3.219 3.589-5.734 6.54-7.544 3.017-1.811 6.438-2.716 10.26-2.716 5.969 0 10.562 1.877 13.781 5.633 3.219 3.688 4.829 8.986 4.829 15.894v30.379h-8.55v-28.87c0-10.328-4.024-15.492-12.072-15.492-4.493 0-8.014 1.475-10.562 4.426-2.549 2.951-3.823 7.008-3.823 12.172v27.764h-8.55Zm81.416 1.61c-5.701 0-9.892-1.51-12.575-4.527-2.682-3.085-4.023-7.88-4.023-14.385V33.53h-11.468v-7.343h11.468V11.702h8.55v14.485h17.604v7.343h-17.604v24.948c0 4.292.738 7.41 2.213 9.355 1.543 1.878 3.99 2.817 7.343 2.817 3.219 0 6.539-.872 9.959-2.616l1.006 7.142c-1.542.94-3.42 1.643-5.633 2.113-2.146.536-4.426.805-6.84.805Zm47.942 0c-5.7 0-10.663-1.073-14.888-3.22-4.158-2.145-7.377-5.197-9.657-9.154-2.213-4.023-3.32-8.751-3.32-14.183 0-5.298 1.073-9.96 3.219-13.983 2.146-4.024 5.097-7.176 8.853-9.456 3.755-2.347 8.047-3.52 12.876-3.52 4.56 0 8.517 1.039 11.87 3.118 3.42 2.079 6.069 4.963 7.947 8.651 1.945 3.688 2.917 8.014 2.917 12.977 0 .872-.034 1.676-.101 2.414 0 .738-.033 1.509-.1 2.313h-39.031c.604 5.298 2.616 9.356 6.036 12.172 3.42 2.817 8.014 4.225 13.781 4.225 5.902 0 11.669-1.374 17.302-4.124l1.006 7.243c-2.28 1.408-5.096 2.515-8.449 3.32-3.286.804-6.707 1.207-10.261 1.207Zm-3.42-46.173c-4.359 0-7.947 1.375-10.764 4.124-2.816 2.683-4.526 6.438-5.13 11.267h30.882c0-.738-.067-1.442-.201-2.113-.536-4.292-2.112-7.578-4.728-9.858-2.548-2.28-5.901-3.42-10.059-3.42Zm38.804 44.563V26.187h8.047l.101 10.462c1.408-3.487 3.454-6.204 6.136-8.148 2.683-2.012 5.734-3.018 9.154-3.018 1.006 0 2.079.1 3.219.302 1.207.2 2.113.47 2.716.804l-.905 8.048a16.703 16.703 0 0 0-2.917-.805 12.847 12.847 0 0 0-3.119-.402c-4.292 0-7.678 1.61-10.16 4.828-2.481 3.22-3.722 7.712-3.722 13.48v24.746h-8.55Zm41.947 24.645V26.187h8.047l.201 9.758c1.945-3.689 4.594-6.505 7.947-8.45 3.353-1.945 7.209-2.917 11.569-2.917 4.694 0 8.852 1.14 12.473 3.42 3.622 2.28 6.472 5.432 8.551 9.456 2.079 4.023 3.118 8.65 3.118 13.882 0 4.962-1.14 9.489-3.42 13.58-2.213 4.023-5.231 7.242-9.054 9.657-3.755 2.347-7.98 3.52-12.674 3.52-3.957 0-7.511-.905-10.663-2.716-3.085-1.877-5.6-4.526-7.545-7.947v33.699h-8.55Zm25.55-30.68c3.488 0 6.539-.805 9.154-2.415 2.616-1.61 4.661-3.856 6.137-6.74 1.542-2.883 2.313-6.203 2.313-9.958 0-3.756-.771-7.076-2.313-9.96-1.476-2.883-3.521-5.13-6.137-6.739-2.615-1.61-5.666-2.414-9.154-2.414-3.42 0-6.471.805-9.154 2.414-2.615 1.61-4.694 3.856-6.236 6.74-1.476 2.883-2.213 6.203-2.213 9.959 0 3.755.737 7.075 2.213 9.958 1.542 2.884 3.621 5.13 6.236 6.74 2.683 1.61 5.734 2.414 9.154 2.414Zm40.955 6.035V26.187h8.048l.101 10.462c1.408-3.487 3.453-6.204 6.136-8.148 2.682-2.012 5.734-3.018 9.154-3.018 1.006 0 2.079.1 3.219.302 1.207.2 2.112.47 2.716.804l-.905 8.048a16.715 16.715 0 0 0-2.918-.805 12.84 12.84 0 0 0-3.118-.402c-4.292 0-7.679 1.61-10.16 4.828-2.481 3.22-3.722 7.712-3.722 13.48v24.746h-8.551Zm46.172-63.776c-1.676 0-3.085-.57-4.225-1.71-1.073-1.14-1.609-2.582-1.609-4.326 0-1.744.536-3.186 1.609-4.326 1.14-1.14 2.549-1.71 4.225-1.71 1.744 0 3.152.57 4.225 1.71 1.073 1.14 1.61 2.582 1.61 4.326 0 1.744-.537 3.185-1.61 4.325-1.073 1.14-2.481 1.71-4.225 1.71Zm-4.225 63.776V26.187h8.551v50.297h-8.551Zm38.794 1.61c-3.152 0-6.304-.436-9.456-1.308-3.084-.872-5.566-2.012-7.444-3.42l1.308-7.545c2.146 1.543 4.627 2.783 7.444 3.722 2.884.939 5.6 1.408 8.148 1.408 3.756 0 6.673-.637 8.752-1.911 2.079-1.341 3.118-3.152 3.118-5.432 0-1.475-.335-2.682-1.006-3.621-.67-1.006-1.877-1.912-3.621-2.716-1.744-.872-4.259-1.778-7.545-2.717-5.633-1.676-9.657-3.688-12.071-6.035-2.414-2.347-3.621-5.399-3.621-9.154 0-4.56 1.676-8.148 5.029-10.764 3.421-2.682 8.048-4.023 13.882-4.023 2.75 0 5.533.402 8.35 1.207 2.816.737 5.096 1.676 6.84 2.816l-1.408 7.243c-4.292-2.75-8.953-4.124-13.983-4.124-3.353 0-5.935.603-7.746 1.81-1.81 1.14-2.716 2.783-2.716 4.93 0 2.078.772 3.721 2.314 4.929 1.543 1.207 4.393 2.414 8.551 3.621 6.438 1.878 10.931 4.024 13.479 6.438 2.616 2.414 3.923 5.633 3.923 9.657 0 4.493-1.877 8.115-5.633 10.864-3.755 2.75-8.718 4.125-14.888 4.125Zm58.441 0c-5.7 0-10.663-1.073-14.888-3.22-4.158-2.145-7.377-5.197-9.657-9.154-2.213-4.023-3.319-8.751-3.319-14.183 0-5.298 1.073-9.96 3.219-13.983 2.146-4.024 5.097-7.176 8.852-9.456 3.756-2.347 8.048-3.52 12.876-3.52 4.56 0 8.517 1.039 11.87 3.118 3.42 2.079 6.069 4.963 7.947 8.651 1.945 3.688 2.917 8.014 2.917 12.977 0 .872-.033 1.676-.1 2.414 0 .738-.034 1.509-.101 2.313h-39.03c.603 5.298 2.615 9.356 6.035 12.172 3.42 2.817 8.014 4.225 13.782 4.225 5.901 0 11.668-1.374 17.302-4.124l1.006 7.243c-2.28 1.408-5.097 2.515-8.45 3.32-3.286.804-6.706 1.207-10.261 1.207Zm-3.42-46.173c-4.359 0-7.947 1.375-10.763 4.124-2.817 2.683-4.527 6.438-5.131 11.267h30.882c0-.738-.067-1.442-.201-2.113-.536-4.292-2.112-7.578-4.728-9.858-2.548-2.28-5.901-3.42-10.059-3.42Z"
      />
    </svg>
  )
}

Enterprise.displayName = 'Enterprise'
