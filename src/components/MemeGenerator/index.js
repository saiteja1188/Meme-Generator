import {Component} from 'react'

import {
  AppContainer,
  MemeResponseContainer,
  Heading,
  MemeGeneratorForm,
  FormAndMemeContainer,
  CustomInput,
  CustomLabel,
  CustomSelect,
  CustomOption,
  CustomButton,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    activeFontSizeOptionId: fontSizesOptionsList[0].id,
    topTextInput: '',
    bottomTextInput: '',
    backgroundImageUrlInput: '',
    backgroundImageUlr: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeFontSizeOptionId = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onChangeInputTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeInputBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeInputBackgroundImageUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeFontSizeOptionId = event => {
    this.setState({activeFontSizeId: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {
      activeFontSizeOptionId,
      topTextInput,
      bottomTextInput,
      backgroundImageUrlInput,
    } = this.state

    this.setState({
      backgroundImageUlr: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderFormGeneratorMeme = () => {
    const {
      activeFontSizeOptionId,
      topTextInput,
      bottomTextInput,
      backgroundImageUrlInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.submitForm}>
        <CustomLabel htmlFor="backgroundImageUrl">Image Url</CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImageUrl"
          placeholder="Enter the Image Url"
          onChange={this.onChangeInputBackgroundImageUrl}
          value={backgroundImageUrlInput}
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          placeholder="Enter the Top Text"
          onChange={this.onChangeInputTopText}
          value={topTextInput}
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          placeholder="Enter the Bottom Text"
          onChange={this.onChangeInputBottomText}
          value={bottomTextInput}
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeOptionId}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <CustomButton type="submit">Generator</CustomButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {
      backgroundImageUlr,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state
    console.log(activeFontSizeId)
    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUlr}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeResponseContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderFormGeneratorMeme()}
          </FormAndMemeContainer>
        </MemeResponseContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
