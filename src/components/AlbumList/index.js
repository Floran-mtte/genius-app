import React from 'react'
import AlbumRow from "../AlbumRow";
import PropTypes from 'prop-types'


const AlbumList = (props) => {
    return props.album_list.map((item, i) => (
        <AlbumRow key={i} album={item} index={i}/>
    ))
}

AlbumList.propTypes = {
    album_list: PropTypes.array
}

export default AlbumList
