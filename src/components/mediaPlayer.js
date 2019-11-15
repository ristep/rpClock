import React from 'react'
import styled from "styled-components";
import ReactPlayer from 'react-player'

const Div = styled.div`
	position: relative;
	padding-bottom: 56.25%; 
	padding-top: 25;
	height: 0;
`;

const Player = styled(ReactPlayer)`
position: fixed; 
/* position: absolute; */
right: 0;
bottom: 0;
top: 0;
left: 0;
width: 100%;
height: 100%;
min-width: 100%;
min-height: 100%;
/* z-index: -100; */
background-size: cover;
`;

const MediaPlayer = () => {
	const videoID = "lSzICmwmRsA"; // https://youtu.be/lSzICmwmRsA?list=RDlSzICmwmRsA&t=12
	const videoLink = "https://www.youtube.com/embed/"+videoID+"?list=RDlSzICmwmRsA&t=12"; //+"?autoplay=1&playsinline=1&fullscreen=1";
	return (
			<Div>
				 <Player url={videoLink} playing />
			</Div>
	)
}

export default MediaPlayer;
// {/* <Iframe src={videoLink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen " ></Iframe> */}

// import { Media, Player, controls } from 'react-media-player';
// import { Fullscreen } from "react-media-player/lib/controls";
// import { visible } from "ansi-colors";

// {/* <Media>
// 	<div className="media" style={{ display: 'block'  }}>
// 		<div className="media-player">
// 			 <Player autoPlay={false} src="http://www.youtube.com/embed/h3YVKTxTOgU" /> 
// 			<Player autoPlay={true} src="https://vimeo.com/258982350" /> 
// 		</div>
// 		<div className="media-controls">
// 			<PlayPause />
// 			<MuteUnmute />
// 			<Fullscreen />
// 		</div>
// 	</div>
// </Media> */}

// <div className="media">
// <div className="media-player">
// 	<Player src="https://www.youtube.com/watch?v=QK-Z1K67uaA" />
// </div>
// <div className="media-controls">
// 	<PlayPause />
// 	<MuteUnmute />
// 	<Fullscreen />
// </div>
// </div>
