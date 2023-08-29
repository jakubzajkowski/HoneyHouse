import React from 'react'
import {Wallpapar,WallpaparContainer,WallpaparText} from '../../styles'

interface WallpaperProps {
    img: string,
    text: string,
}

const Wallpaper:React.FC<WallpaperProps> = ({img,text}) => {
  return (
    <WallpaparContainer>
        <Wallpapar src={img} alt='wallpaper' loading='lazy'/>
        <WallpaparText>{text}</WallpaparText>
    </WallpaparContainer>
  )
}

export default Wallpaper