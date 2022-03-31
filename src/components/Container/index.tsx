import IntroWrapper from 'components/IntroWrapper/IntroWrapper'
import LoginWrapper from '../LoginWrapper/LoginWrapper'
import { Wrapper } from '../../css/Container/Wrapper'
// import { LeftCard } from '../../css/IntroWrapper/index'

// import '../../App.css'

const Container = () => {
  return (
    <Wrapper>
      <IntroWrapper></IntroWrapper> <LoginWrapper></LoginWrapper>
    </Wrapper>
  )
}

export default Container
