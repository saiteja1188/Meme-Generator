// Style your components here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MemeResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding: 24px 32px;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 1140px;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: roboto;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 36px;
  }
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`
export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const CustomInput = styled.input`
  font-family: roboto;
  font-size: 16px;
  color: #d7dfe9;
  padding: 8px 15px;
  margin-top: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
`

export const CustomLabel = styled.label`
  font-family: roboto;
  font-size: 14px;
  color: #7e858e;
  margin-top: 20px;
`
export const CustomSelect = styled.select`
  font-family: roboto;
  font-size: 16px;
  padding: 8px 15px;
  margin-top: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
`

export const CustomOption = styled.option``

export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px 30px;
  border: none;
  margin: 20px 0px;
  max-width: 150px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding: 12px 10px 0px 0px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 45%;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-family: open serif;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 500;
`
