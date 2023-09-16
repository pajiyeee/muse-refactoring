import styled from '@emotion/styled'
import BgImg from './UI/BgImg'
import { FontBody1, FontBody3 } from '../Components/UI/Text'
import { LockAlt, LockOpenAlt } from '@emotion-icons/boxicons-regular'
import { Search } from '@emotion-icons/boxicons-regular'
import { Ticket } from '@emotion-icons/heroicons-outline'
import { absolute, flexBox } from '@/styles/mixin'
import { theme } from '@/styles/theme'
import { useState } from 'react'

const Nav = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchFocus, setSearchFocus] = useState(false)
  return (
    <Wrap>
      <section>
        <section>
          <BgImg backgroundImage={'/muse-logo-purple.png'} height={'50px'} />
          <SearchForm>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocus((prev) => !prev)}
            />
            <SearchInput>
              {!searchFocus && <FontBody3>어떤 공연을 찾으시나요?</FontBody3>}
              <Icon24>
                <SearchIcon isActive={searchValue !== ''} />
              </Icon24>
            </SearchInput>
          </SearchForm>
        </section>
        <section>
          <Menu>
            <Icon20>
              <LockAlt />
            </Icon20>
            <FontBody3>로그인</FontBody3>
            <Icon20>
              <Ticket />
            </Icon20>
            <FontBody3>예매하기</FontBody3>
          </Menu>
        </section>
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
  padding: 20px 0;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 10;

  section {
    width: 80%;
    margin: 0 auto;
    ${flexBox('row', 'nowrap', 'space-between')};

    section {
      ${flexBox('row', 'nowrap', 'start')};
    }
  }
`

const SearchForm = styled.div`
  position: relative;
  ${flexBox('row', 'wrap', 'end')};
  width: 100%;

  input {
    width: 300px;
    margin: 0 20px;
    padding: 8px 12px;
    background-color: transparent;
  }

  p {
    padding: 0;
    color: ${({ theme }) => theme.color.gray_600};
  }
`

const SearchInput = styled.div`
  ${absolute('0', '0', '0', '0')};
  ${flexBox()};
  width: 100%;
`

const Menu = styled.div`
  ${flexBox('row', 'nowrap', 'end')};
  margin: 0;
  width: 100%;
  text-align: center;

  p {
    display: inline;
    margin: 0 16px 0 0;
    padding: 0 6px;
    color: ${({ theme }) => theme.color.gray_800};
  }
`

const Icon24 = styled.div`
  width: 24px;
`

const SearchIcon = styled(Search)`
  color: ${({ isActive, theme }) =>
    isActive === true ? theme.color.primary_normal : theme.color.gray_600};
`

const Icon20 = styled.div`
  width: 20px;
  color: ${({ theme }) => theme.color.gray_600};
`
