import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'

const AlbumDescription = (props) => {

    return (
        <div>
                <div>
                    <AlbumTitle>{props.album.data.title}</AlbumTitle>
                   <ArtistName>{props.album.data.artist.name}</ArtistName>
                    {props.album.data.genres.data.map((genre,i) => (<AlbumGenre key={i}>{genre.name}</AlbumGenre>))}
                   <SongListContainer>
                       {props.album.data.tracks.data.map((track, i) => (
                           <SongRow key={i}>
                               <TrackNumber>{i + 1}</TrackNumber>
                               <TrackTitle>{ track.title }</TrackTitle>
                               <TrackDuration>{ formatToMinute(track.duration)}</TrackDuration>
                           </SongRow>
                       ))}
                   </SongListContainer>
                </div>
        </div>
    )
}

AlbumDescription.propTypes = {
    album: PropTypes.object
}

const formatToMinute = (second) => {
    let min = ~~((second % 3600) / 60);
    let secs = ~~second % 60;

    let ret = "";

    ret += "" + min + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

const AlbumTitle = styled.h3`
  margin: 0;
  line-height: 1.16667;
  letter-spacing: .007em;
  font-size: 24px;
  font-weight: 600;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
  text-align: left;
  color: #ffffff;
  
`

const AlbumGenre = styled.h4`
  padding: 0;
  margin: 4px 0 0;
  color: #EBEBF599;
  font-size: 11px;
  line-height: 1.18182;
  font-weight: 500;
  letter-spacing: .006em;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
  text-transform: uppercase;
`

const ArtistName = styled.h3`
  margin: 0;
  color: #fa2d48;
  line-height: 1.16667;
  letter-spacing: .007em;
  font-size: 24px;
  font-weight: 600;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
  text-align: left;
`

const SongListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  color: rgb(255, 255, 255, 0.95);
  font-size: 14px;
  font-weight: 600;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
  margin-left: 17px;
  margin-right: 17px;
`

const SongRow = styled.div`
  border-top: ${ props => props.index !== 0 ? '0.5px solid rgb(255, 255, 255, 0.1)' : 'none'};
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-inline-end: 5px;
  padding-inline-start: 2px;
  width: 304px;
  height: 55px;
`

const TrackNumber = styled.span`
  color: #EBEBF599;
  width: 27px;
`

const TrackTitle = styled.div`
  width: 208px;
`
const TrackDuration = styled.span`
  display: flex;
  justify-content: flex-end;
   width: 70px;
   color: #EBEBF599;
`

export default AlbumDescription;
