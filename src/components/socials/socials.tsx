import React, { Component } from 'react';
import SocialButton from './social-button';
import './socials.scss';

class SocialsView extends Component {
  render() {
    return (
      <div className="socials__view">
        <SocialButton href="https://www.twitch.tv/vic10usx" icon="twitch"/>
        <SocialButton href="https://www.github.com/vic10us" icon="github"/>
        <SocialButton href="https://www.facebook.com/vic10usx" icon="facebook-f"/>
        <SocialButton href="https://www.youtube.com/vic10us" icon="youtube"/>
      </div>
    );
  }
}

export default SocialsView;