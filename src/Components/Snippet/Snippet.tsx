// Libraries
import React, {forwardRef, useEffect, useRef} from 'react'
import classnames from 'classnames'
import Prism from 'prismjs'

// Non-Standard Prism Languages
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

// Styles
import './Snippet.scss'

// Types
import {StandardFunctionProps} from '../../Types'

export type Language = 'markup' | 'css' | 'clike' | 'javascript' | 'go' | 'java' | 'markdown' | 'python' | 'json' | 'jsx' | 'tsx'

export interface SnippetProps extends StandardFunctionProps {
  /** Language */
  language: Language
  /** Contents of snippet */
  text: string
}

export type SnippetRef = HTMLDivElement

export const Snippet = forwardRef<SnippetRef, SnippetProps>(
  ({ id, style, testID = 'snippet', className, language, text}, ref) => {
    const snippetRef = useRef<HTMLPreElement>(null)
    const snippetClassName = classnames('cf-snippet', {
      [`${className}`]: className,
    })

    const codeClassName = `language-${language}`

    useEffect((): (() => void) => {
      if (snippetRef.current) {
        Prism.highlightElement(snippetRef.current)
      }

      return (): void => {
        return
      }
    }, [])

    return (
      <div
        data-testid={testID}
        className={snippetClassName}
        style={style}
        ref={ref}
        id={id}
      >
        <pre>
          <code className={codeClassName} ref={snippetRef}>
            {text}
          </code>
        </pre>
      </div>
    )
  }
)

Snippet.displayName = 'Snippet'
