// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox, FlexBoxProps, FlexBoxRef} from '../../FlexBox'

// Types
import {Omit, FlexDirection, AlignItems} from '../../../Types'

// Styles
import './ResourceCardMeta.scss'

export interface ResourceCardMetaProps
  extends Omit<
    FlexBoxProps,
    'stretchToFitWidth' | 'stretchToFitHeight' | 'margin'
  > {}

export type ResourceCardMetaRef = FlexBoxRef

export const ResourceCardMeta = forwardRef<
  ResourceCardMetaRef,
  ResourceCardMetaProps
>(
  (
    {
      id,
      style,
      testID = 'resource-list--meta',
      children,
      className,
      direction = FlexDirection.Row,
      alignItems = AlignItems.Center,
      justifyContent,
    },
    ref
  ) => {
    const resourceCardMetaClass = classnames('cf-resource-meta', {
      [`${className}`]: className,
    })

    let wrappedChildren

    if (React.Children.count(children) > 0) {
      const childArray = React.Children.map(children, child => (
        <div className="cf-resource-meta--item">{child}</div>
      ))

      wrappedChildren = <>{childArray}</>
    }

    return (
      <FlexBox.FlexBox
        id={id}
        ref={ref}
        style={style}
        testID={testID}
        direction={direction}
        className={resourceCardMetaClass}
        alignItems={alignItems}
        justifyContent={justifyContent}
      >
        {wrappedChildren}
      </FlexBox.FlexBox>
    )
  }
)

ResourceCardMeta.displayName = 'ResourceCardMeta'
