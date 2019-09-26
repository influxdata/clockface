// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Grid} from '../'

// Types
import {Columns} from '../../../Types'

// Notes
import GridReadme from './Grid.md'

const gridStories = storiesOf('Layout|12 Column Grid', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

gridStories.add(
  'Grid',
  () => (
    <div className="story--example">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <h3 className="text-center">Even Divisions</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">4/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">4/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">4/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.Six}>
            <div className="mockComponent stretch grid-example">6/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Six}>
            <div className="mockComponent stretch grid-example">6/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <hr />
            <h3 className="text-center">Uneven Divisions</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.One}>
            <div className="mockComponent stretch grid-example">1/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Eleven}>
            <div className="mockComponent stretch grid-example">11/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">2/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Ten}>
            <div className="mockComponent stretch grid-example">10/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Nine}>
            <div className="mockComponent stretch grid-example">9/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">4/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Eight}>
            <div className="mockComponent stretch grid-example">8/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.Five}>
            <div className="mockComponent stretch grid-example">5/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Seven}>
            <div className="mockComponent stretch grid-example">7/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <hr />
            <h3 className="text-center">Offsets</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.Four} offsetXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">
              4/12 + 4/12
            </div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Four}>
            <div className="mockComponent stretch grid-example">4/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Three} offsetXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">
              3/12 + 3/12
            </div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Three}>
            <div className="mockComponent stretch grid-example">3/12</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column widthXS={Columns.Eight}>
            <div className="mockComponent stretch grid-example">8/12</div>
          </Grid.Column>
          <Grid.Column widthXS={Columns.Two} offsetXS={Columns.Two}>
            <div className="mockComponent stretch grid-example">
              2/12 + 2/12
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <hr />
            <h3 className="text-center">Responsive Columns</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </Grid.Column>
          <Grid.Column
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </Grid.Column>
          <Grid.Column
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </Grid.Column>
          <Grid.Column
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </Grid.Column>
          <Grid.Column
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </Grid.Column>
          <Grid.Column
            widthXS={Columns.Six}
            widthSM={Columns.Four}
            widthMD={Columns.Three}
            widthLG={Columns.Two}
          >
            <div className="mockComponent stretch grid-example">
              XS 6/12
              <br />
              SM 4/12
              <br />
              MD 3/12
              <br />
              LG 2/12
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <hr />
            <h3 className="text-center">Playground (Use Knobs)</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column
            widthXS={Columns[select('widthXS', mapEnumKeys(Columns), 'Twelve')]}
            widthSM={Columns[select('widthSM', mapEnumKeys(Columns), 'Twelve')]}
            widthMD={Columns[select('widthMD', mapEnumKeys(Columns), 'Twelve')]}
            widthLG={Columns[select('widthLG', mapEnumKeys(Columns), 'Twelve')]}
            offsetXS={
              Columns[
                select(
                  'offsetXS',
                  {None: 'None', ...mapEnumKeys(Columns)},
                  'None'
                )
              ]
            }
            offsetSM={
              Columns[
                select(
                  'offsetSM',
                  {None: 'None', ...mapEnumKeys(Columns)},
                  'None'
                )
              ]
            }
            offsetMD={
              Columns[
                select(
                  'offsetMD',
                  {None: 'None', ...mapEnumKeys(Columns)},
                  'None'
                )
              ]
            }
            offsetLG={
              Columns[
                select(
                  'offsetLG',
                  {None: 'None', ...mapEnumKeys(Columns)},
                  'None'
                )
              ]
            }
          >
            <div className="mockComponent stretch grid-example alt-color">
              {`XS ${
                Columns[select('widthXS', mapEnumKeys(Columns), 'Twelve')]
              }/12`}
              <br />
              {`SM ${
                Columns[select('widthSM', mapEnumKeys(Columns), 'Twelve')]
              }/12`}
              <br />
              {`MD ${
                Columns[select('widthMD', mapEnumKeys(Columns), 'Twelve')]
              }/12`}
              <br />
              {`LG ${
                Columns[select('widthLG', mapEnumKeys(Columns), 'Twelve')]
              }/12`}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  ),
  {
    readme: {
      content: marked(GridReadme),
    },
  }
)
