import * as React from 'react'
import {storiesOf} from '@storybook/react'

import {DapperScrollbars} from './DapperScrollbars'

import {withKnobs, boolean, color} from '@storybook/addon-knobs'

const scrollbarStories = storiesOf('Scrollbars', module).addDecorator(withKnobs)

scrollbarStories.add('DapperScrollbars Component', () => (
  <div className="scroll--container">
    <DapperScrollbars
      removeTracksWhenNotUsed={boolean('removeTracksWhenNotUsed', false)}
      removeTrackYWhenNotUsed={boolean('removeTrackYWhenNotUsed', false)}
      removeTrackXWhenNotUsed={boolean('removeTrackXWhenNotUsed', false)}
      noScrollX={boolean('noScrollX', false)}
      noScrollY={boolean('noScrollY', false)}
      noScroll={boolean('noScroll', false)}
      autoHide={boolean('autoHide', false)}
      autoSize={boolean('autoSize', false)}
      thumbStartColor={color('thumbStartColor', '#00C9FF')}
      thumbStopColor={color('thumbStopColor', '#9394FF')}
    >
      <div>
        <p>
          Lorem ipsum dolor amet bitters normcore godard ethical blog
          single-origin coffee pickled hella master cleanse. Artisan hell of
          photo booth cardigan pok pok post-ironic ethical readymade poutine
          flexitarian brooklyn cronut semiotics. Poutine kinfolk hot chicken
          tofu deep v yr bespoke copper mug blog whatever street art beard
          affogato. Meditation unicorn kogi sartorial, quinoa raclette neutra
          bushwick. Copper mug sartorial prism readymade hella asymmetrical swag
          scenester cray venmo humblebrag messenger bag lumbersexual biodiesel.
        </p>
        <div className="mockComponent wide">
          <p>
            Poutine ethical etsy hot chicken selfies. Cray hashtag vice kitsch.
            Kickstarter enamel pin hashtag twee tousled stumptown. Swag bushwick
            etsy, next level affogato hammock shaman church-key coloring book
            direct trade raw denim forage letterpress tumeric green juice.
            Jianbing hashtag authentic, ethical kitsch single-origin coffee
            brunch shabby chic coloring book 90's kombucha iPhone. Twee af
            chambray offal bitters air plant ethical cornhole artisan ennui man
            braid gentrify art party. Hot chicken chambray chia messenger bag.
          </p>
        </div>
        <p>
          Tbh paleo pop-up, coloring book unicorn four dollar toast snackwave
          fashion axe jean shorts hot chicken tumeric lumbersexual meggings
          fingerstache. Tilde echo park church-key taxidermy, keffiyeh everyday
          carry narwhal kinfolk slow-carb man bun +1 four dollar toast. Cronut
          distillery organic sartorial raw denim chambray, mumblecore photo
          booth listicle. Williamsburg kale chips roof party microdosing
          farm-to-table locavore. Trust fund locavore polaroid ethical fashion
          axe twee pork belly hammock yuccie pop-up.
        </p>
        <p>
          Vice migas church-key subway tile cornhole asymmetrical chartreuse
          hammock pug. Fam kogi banh mi williamsburg umami, godard succulents
          chicharrones gluten-free bushwick photo booth humblebrag crucifix.
          Aesthetic coloring book neutra man braid scenester echo park chia banh
          mi helvetica. Poke yr taiyaki, pop-up 90's selfies next level roof
          party green juice celiac hot chicken everyday carry. Four loko
          stumptown sriracha vaporware tilde tofu sustainable thundercats
          chartreuse af distillery.
        </p>
        <p>
          Distillery health goth tumeric 8-bit forage hashtag. Taiyaki flannel
          man bun meggings brunch vice. Green juice gastropub food truck edison
          bulb gochujang. Irony everyday carry keytar taxidermy affogato. Copper
          mug echo park umami slow-carb. Pork belly shabby chic artisan etsy.
        </p>
        <p>Oh. You need a little dummy text for your mockup? How quaint.</p>
        <p>I bet you’re still using Bootstrap too…</p>
      </div>
    </DapperScrollbars>
  </div>
))
