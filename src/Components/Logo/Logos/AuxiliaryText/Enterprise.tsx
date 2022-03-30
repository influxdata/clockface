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

  const logoStyle = {fill}

  return (
    <svg
      version="1.1"
      id={id}
      data-testid={testID}
      style={logoStyle}
      x="0px"
      y="0px"
      viewBox="0 0 496 101"
      width="270"
      height="45"
    >
      <path
        className={logoClass}
        d="M28.104 77.61c-5.701 0-10.663-1.073-14.888-3.22-4.158-2.145-7.377-5.197-9.657-9.153-2.213-4.024-3.32-8.752-3.32-14.184 0-5.298 1.073-9.959 3.219-13.983 2.146-4.023 5.097-7.175 8.853-9.456 3.755-2.347 8.047-3.52 12.876-3.52 4.56 0 8.517 1.04 11.87 3.118 3.42 2.079 6.069 4.963 7.947 8.651 1.944 3.688 2.917 8.014 2.917 12.977 0 .871-.034 1.676-.101 2.414 0 .738-.033 1.509-.1 2.314H8.689c.604 5.298 2.616 9.355 6.036 12.172 3.42 2.816 8.014 4.224 13.781 4.224 5.902 0 11.669-1.374 17.302-4.124l1.006 7.243c-2.28 1.408-5.097 2.515-8.45 3.32-3.286.804-6.706 1.206-10.26 1.206Zm-3.42-46.173c-4.359 0-7.947 1.375-10.764 4.124C11.103 38.244 9.393 42 8.79 46.828h30.882c0-.738-.067-1.442-.201-2.113-.537-4.292-2.113-7.578-4.728-9.858-2.548-2.28-5.902-3.42-10.059-3.42ZM63.488 76V25.703h8.047l.101 8.651c1.408-3.219 3.588-5.734 6.538-7.544 3.018-1.811 6.438-2.716 10.261-2.716 5.968 0 10.562 1.877 13.781 5.633 3.219 3.688 4.829 8.986 4.829 15.894V76h-8.551V47.13c0-10.328-4.023-15.492-12.071-15.492-4.493 0-8.014 1.476-10.562 4.426-2.549 2.951-3.823 7.008-3.823 12.172V76h-8.55Zm81.415 1.61c-5.7 0-9.891-1.51-12.574-4.527-2.682-3.085-4.024-7.88-4.024-14.385V33.047h-11.467v-7.344h11.467V11.218h8.551v14.485h17.604v7.344h-17.604v24.947c0 4.292.738 7.41 2.213 9.355 1.542 1.878 3.99 2.817 7.343 2.817 3.219 0 6.539-.872 9.959-2.616l1.006 7.142c-1.542.94-3.42 1.643-5.633 2.113-2.146.536-4.426.804-6.841.804Zm47.943 0c-5.701 0-10.663-1.073-14.888-3.22-4.158-2.145-7.377-5.197-9.657-9.153-2.213-4.024-3.32-8.752-3.32-14.184 0-5.298 1.073-9.959 3.219-13.983 2.146-4.023 5.097-7.175 8.853-9.456 3.755-2.347 8.047-3.52 12.876-3.52 4.56 0 8.517 1.04 11.87 3.118 3.42 2.079 6.069 4.963 7.947 8.651 1.944 3.688 2.917 8.014 2.917 12.977 0 .871-.034 1.676-.101 2.414 0 .738-.033 1.509-.1 2.314h-39.031c.604 5.298 2.616 9.355 6.036 12.172 3.42 2.816 8.014 4.224 13.781 4.224 5.902 0 11.669-1.374 17.302-4.124l1.006 7.243c-2.28 1.408-5.096 2.515-8.45 3.32-3.286.804-6.706 1.206-10.26 1.206Zm-3.42-46.173c-4.359 0-7.947 1.375-10.764 4.124-2.817 2.683-4.527 6.438-5.13 11.267h30.882c0-.738-.067-1.442-.201-2.113-.537-4.292-2.113-7.578-4.728-9.858-2.548-2.28-5.901-3.42-10.059-3.42ZM228.23 76V25.703h8.047l.101 10.462c1.408-3.487 3.453-6.203 6.136-8.148 2.682-2.012 5.734-3.018 9.154-3.018 1.006 0 2.079.1 3.219.302 1.207.2 2.112.47 2.716.805l-.905 8.047a16.715 16.715 0 0 0-2.918-.805 12.835 12.835 0 0 0-3.118-.402c-4.292 0-7.679 1.61-10.16 4.828-2.481 3.22-3.722 7.713-3.722 13.48V76h-8.55Zm41.946 24.646V25.703h8.048l.201 9.758c1.945-3.689 4.594-6.505 7.947-8.45 3.353-1.945 7.209-2.917 11.568-2.917 4.695 0 8.853 1.14 12.474 3.42 3.621 2.28 6.472 5.432 8.55 9.456 2.079 4.023 3.119 8.65 3.119 13.882 0 4.962-1.14 9.489-3.42 13.58-2.213 4.023-5.231 7.242-9.054 9.657-3.755 2.347-7.98 3.52-12.675 3.52-3.956 0-7.511-.905-10.663-2.715-3.084-1.878-5.599-4.527-7.544-7.947v33.699h-8.551Zm25.551-30.682c3.488 0 6.539-.804 9.154-2.414 2.616-1.61 4.661-3.856 6.137-6.74 1.542-2.883 2.313-6.203 2.313-9.958 0-3.756-.771-7.075-2.313-9.96-1.476-2.883-3.521-5.13-6.137-6.739-2.615-1.61-5.666-2.414-9.154-2.414-3.42 0-6.471.805-9.154 2.414-2.615 1.61-4.694 3.856-6.237 6.74-1.475 2.883-2.213 6.203-2.213 9.959 0 3.755.738 7.075 2.213 9.958 1.543 2.884 3.622 5.13 6.237 6.74 2.683 1.61 5.734 2.414 9.154 2.414ZM336.682 76V25.703h8.048l.1 10.462c1.409-3.487 3.454-6.203 6.137-8.148 2.682-2.012 5.734-3.018 9.154-3.018 1.006 0 2.079.1 3.219.302 1.207.2 2.112.47 2.716.805l-.906 8.047a16.68 16.68 0 0 0-2.917-.805 12.835 12.835 0 0 0-3.118-.402c-4.292 0-7.679 1.61-10.16 4.828-2.482 3.22-3.722 7.713-3.722 13.48V76h-8.551Zm46.172-63.776c-1.676 0-3.085-.57-4.225-1.71-1.073-1.14-1.609-2.583-1.609-4.326 0-1.744.536-3.186 1.609-4.326 1.14-1.14 2.549-1.71 4.225-1.71 1.744 0 3.152.57 4.225 1.71 1.073 1.14 1.61 2.582 1.61 4.326 0 1.743-.537 3.185-1.61 4.326-1.073 1.14-2.481 1.71-4.225 1.71ZM378.629 76V25.703h8.551V76h-8.551Zm38.794 1.61c-3.152 0-6.304-.436-9.456-1.308-3.085-.872-5.566-2.012-7.444-3.42l1.308-7.545c2.146 1.542 4.627 2.783 7.444 3.722 2.884.939 5.6 1.408 8.148 1.408 3.756 0 6.673-.637 8.752-1.91 2.079-1.342 3.118-3.153 3.118-5.433 0-1.475-.335-2.683-1.006-3.621-.67-1.006-1.878-1.912-3.621-2.716-1.744-.872-4.259-1.777-7.545-2.716-5.633-1.677-9.657-3.689-12.071-6.036-2.414-2.347-3.621-5.399-3.621-9.154 0-4.56 1.676-8.148 5.029-10.764 3.421-2.682 8.048-4.023 13.882-4.023 2.75 0 5.533.402 8.35 1.207 2.816.737 5.096 1.676 6.84 2.816l-1.408 7.243c-4.292-2.75-8.953-4.124-13.983-4.124-3.353 0-5.935.603-7.746 1.81-1.81 1.14-2.716 2.784-2.716 4.93 0 2.078.772 3.721 2.314 4.929 1.542 1.207 4.393 2.414 8.55 3.621 6.438 1.878 10.932 4.024 13.48 6.438 2.615 2.414 3.923 5.633 3.923 9.657 0 4.493-1.878 8.115-5.633 10.864-3.756 2.75-8.718 4.124-14.888 4.124Zm58.441 0c-5.7 0-10.663-1.073-14.888-3.22-4.158-2.145-7.377-5.197-9.657-9.153-2.213-4.024-3.319-8.752-3.319-14.184 0-5.298 1.073-9.959 3.219-13.983 2.146-4.023 5.096-7.175 8.852-9.456 3.755-2.347 8.047-3.52 12.876-3.52 4.56 0 8.517 1.04 11.87 3.118 3.42 2.079 6.069 4.963 7.947 8.651 1.945 3.688 2.917 8.014 2.917 12.977 0 .871-.033 1.676-.1 2.414 0 .738-.034 1.509-.101 2.314h-39.03c.603 5.298 2.615 9.355 6.035 12.172 3.42 2.816 8.014 4.224 13.782 4.224 5.901 0 11.668-1.374 17.302-4.124l1.006 7.243c-2.281 1.408-5.097 2.515-8.45 3.32-3.286.804-6.707 1.206-10.261 1.206Zm-3.42-46.173c-4.359 0-7.947 1.375-10.764 4.124-2.816 2.683-4.526 6.438-5.13 11.267h30.882c0-.738-.067-1.442-.201-2.113-.536-4.292-2.112-7.578-4.728-9.858-2.548-2.28-5.901-3.42-10.059-3.42Z"
      />
    </svg>
  )
}

Enterprise.displayName = 'Enterprise'
