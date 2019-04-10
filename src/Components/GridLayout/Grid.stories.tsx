import * as React from 'react'
import {storiesOf} from '@storybook/react'

import {Grid} from './Grid'
import {GridRow} from './GridRow'
import {GridColumn} from './GridColumn'

import {withKnobs, select} from '@storybook/addon-knobs'
import {Columns} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

const gridStories = storiesOf('Layout|Grid', module).addDecorator(withKnobs)

gridStories.add('Grid Component', () => (
  <Grid>
    <GridRow>
      <GridColumn
        widthXS={Columns[select('widthXS', mapEnumKeys(Columns), 'Five')]}
        widthSM={Columns[select('widthSM', mapEnumKeys(Columns), 'Five')]}
        widthMD={Columns[select('widthMD', mapEnumKeys(Columns), 'Five')]}
        widthLG={Columns[select('widthLG', mapEnumKeys(Columns), 'Five')]}
        offsetXS={Columns[select('offsetXS', mapEnumKeys(Columns), 'One')]}
        offsetSM={Columns[select('offsetSM', mapEnumKeys(Columns), 'One')]}
        offsetMD={Columns[select('offsetMD', mapEnumKeys(Columns), 'One')]}
        offsetLG={Columns[select('offsetLG', mapEnumKeys(Columns), 'One')]}
      >
        <div className="mockComponent stretch">stuff</div>
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn
        widthXS={Columns[select('widthXS', mapEnumKeys(Columns), 'Five')]}
      >
        <div className="mockComponent stretch">stuff</div>
      </GridColumn>
    </GridRow>
  </Grid>
))
