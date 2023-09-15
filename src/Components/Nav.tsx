import styled from '@emotion/styled'
import BgImg from './UI/BgImg'
import { FontBody3 } from '../Components/UI/Text'
import { LockAlt } from '@emotion-icons/boxicons-regular/LockAlt'
import { flexBox } from '@/styles/mixin'
import { theme } from '@/styles/theme'

const Nav = () => {
  return (
    <Wrap>
      <section>
        <BgImg backgroundImage={'/muse-logo-purple.png'} height={'50px'} />

        <Login>
          <LoginIcon />
          <FontBody3 color={theme.color.gray_600}>로그인</FontBody3>
        </Login>
      </section>
    </Wrap>
  )
}

export default Nav

const Wrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_200};
  padding: 30px 0;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 10;

  section {
    width: 80%;
    ${flexBox('row', 'nowrap', 'space-between')};
  }
`

const Login = styled.div`
  ${flexBox('column')};
  margin: 0 auto;
  width: 100%;
  text-align: center;

  p {
    display: inline-block;
  }
`

const LoginIcon = styled(LockAlt)`
  width: 20px;
  color: ${({ theme }) => theme.color.gray_600};
`
