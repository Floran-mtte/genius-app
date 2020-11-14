import React from 'react'
import styled from 'styled-components'
import Cover from './../Cover'
import { Link } from "react-router-dom";
import PropsTypes from 'prop-types'

const AlbumRow = (props) => {

    const albumName = props.album.title
    const artist = props.album.artist.name
    const cover = props.album.cover_small
    const albumId = props.album.id
    return (
        <Link to={'/albums/'+ albumId}>
        <RowLayout index={props.index}>
                <Cover size={'small'} cover={cover} />
                <DescriptionLayout>
                    <AlbumTitle>{albumName}</AlbumTitle>
                    <AlbumDesc>Album · {artist}</AlbumDesc>
                </DescriptionLayout>
        </RowLayout>
        </Link>
    )
}

AlbumRow.propTypes = {
    index: PropsTypes.number,
    album: PropsTypes.object,
}

const RowLayout = styled.div`
  border-top: ${ props => props.index !== 0 ? '0.5px solid rgb(255, 255, 255, 0.1)' : 'none'};
  height: 56px;
  width: 325px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
`
const DescriptionLayout = styled.div`
  width: 259px;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const AlbumTitle = styled.span`
  color: #FFFFFFF2;
  font-size: 15px;
  line-height: 1.46667;
  font-weight: 400;
  letter-spacing: 0;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  max-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const AlbumDesc = styled.span`
  color: #EBEBF599;
  font-size: 15px;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  letter-spacing: 0;

`



export default AlbumRow
