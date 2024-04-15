import React from 'react';
import ReactIframe from 'react-iframe';

function DiscordWidget() {
 return (
    <ReactIframe
      url="https://discord.com/widget?id=1229366295175237663&theme=dark"
      width="350px"
      height="500px"
      display="initial"
      position="relative"
      allowFullScreen
    />
 );
}

export default DiscordWidget;
