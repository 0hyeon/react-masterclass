
import styled , { keyframes } from "styled-components"

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width:100vw;
  justify-content: center;
  align-items: center;
`
// const BoxOne = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
// `
// const BoxTwo = styled.div`
//   background-color: teal;
//   width: 100px;
//   height: 100px;
// `

//1.스타일링 props, 상속
const Box2 = styled.div`
  background-color: ${props => props.bgColor};//props를 통해 컴포넌트를 설정하는방법
  width: 100px;
  height: 100px;
`
const Text = styled.span`
  color:white;
`
const Circle =styled(Box2)`//그냥 복사하는게 아라 기존 컴포넌트를 활용해서 코드를 재사용
  border-radius: 50px;
`
const Btn = styled.button`
  color:white;
  background-color: tomato;
  border:0;
  border-radius: 15px;
`
const Input = styled.input.attrs({ required : true, minLength:10 })`//굉장히 편리한 기능 밑에 컴포넌트마다 추가해야할것을 줄여주고, 이것때문에 스타일 컴포넌트가 사랑받는 이유.
  background-color: tomato;
`
const Emoji = styled.div`
  font-size: 36px;
`


// 2.애니메이션 
const rolationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`
const Box = styled.div`
  height:200px;
  width:200px;
  background-color:tomato;
  animation: ${rolationAnimation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span { //스타일컴포넌트 안에 html태그를 선택자로 선택해서 스타일링가능
    font-size:16px;
    &:hover {// &는 span을 한번더 호명해주는것과 같고 span:hover와 똑같다. 
      font-size: 40px;
    }
    &:active {// &는 span을 한번더 호명해주는것과 같고 span:hover와 똑같다. 
      opacity: 0;
    }
  }
  ${Emoji}:hover {//가상선택자 선택가능
    font-size: 90px;
  }
  
`
function App() {
  return(
    <Wrapper>
      {/* <div style={{background:"teal",width:100,height:100}}></div>
      <div style={{background:"tomato",width:100,height:100}}></div> */}
      {/* <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo /> */}
      {/* <Box2 bgColor="teal" />
      <Circle bgColor="tomato" />
      <Btn as="a" href="/">Login</Btn> */}
      {/* 원한다면 여기서 html태그의 속성을 사용할수 있다. */}
      
      {/* <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input /> */}
      <Box>
        <span style={{color:'white'}}>😍임유리</span>
        <Emoji>😍</Emoji>
      </Box>
    </Wrapper>
  )
}

export default App;
