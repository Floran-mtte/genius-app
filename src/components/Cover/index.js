import React from 'react';
import styled from 'styled-components'
import PropsTypes from 'prop-types'

const Cover = (props) => {
    const cover = props.cover
    let size = 56

    if(props.size === 'large') size = 295

    return (
        <ArtworkCoverLayout size={size}>
            <ImageCover alt={'cover'} src={cover} />
        </ArtworkCoverLayout>
    );
};

Cover.propsTypes = {
    cover: PropsTypes.string
}

const ArtworkCoverLayout = styled.div`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  margin-inline-end: 10px;
`


const ImageCover = styled.img`
  z-index: 1001;
  height: inherit;
  width: inherit;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.1), 0 10px 13px 0 rgba(0,0,0,.11);
  transition: background-color .1s ease-in;
`

export default Cover;
