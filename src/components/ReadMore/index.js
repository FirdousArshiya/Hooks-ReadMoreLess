import {useState} from 'react'

import {
  MainContainer,
  ContentContainer,
  Title,
  Subtitle,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)
  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const onClickButton = () => setIsReadMore(prevStatus => !prevStatus)

  return (
    <MainContainer>
      <ContentContainer>
        <Title>React Hooks</Title>
        <Subtitle>Hooks are a new addition to React</Subtitle>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </ContentContainer>
    </MainContainer>
  )
}

export default ReadMore


/* MY OWN CODE:-

index.js:-

import {useState} from 'react'

import {
  BgCont,
  Heading,
  Para,
  ImageElement,
  Description,
  ReadButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isReadMore, setReadMore] = useState(false)

  const onClickRead = () => {
    setReadMore(prevState => !prevState)
  }

  const slicedText = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <>
      <BgCont>
        <Heading>React Hooks</Heading>
        <Para>Hooks are a new addition to React</Para>
        <ImageElement
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{slicedText}</Description>
        <ReadButton type="submit" onClick={onClickRead}>
          {isReadMore ? 'Read Less' : 'Read More'}
        </ReadButton>
      </BgCont>
    </>
  )
}
export default ReadMore

  CSS:-


  import styled from 'styled-components'

export const BgCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffffff;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 27px;
  color: #1e293b;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 23px;
  color: #334155;
`
export const ImageElement = styled.img`
  width: 320px;
  height: 320px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #334155;
`
export const ReadButton = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  padding: 7px;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
`
*/
