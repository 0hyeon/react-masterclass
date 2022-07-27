
import styled from "styled-components"

const Father = styled.div`
  display: flex;
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
const Box = styled.div`
  background-color: ${props => props.bgColor};//props를 통해 컴포넌트를 설정하는방법
  width: 100px;
  height: 100px;
`
const Text = styled.span`
  color:white;
`
const Circle =styled(Box)`//그냥 복사하는게 아라 기존 컴포넌트를 활용해서 코드를 재사용
  border-radius: 50px;
`
function App() {
  return(
    <Father>
      {/* <div style={{background:"teal",width:100,height:100}}></div>
      <div style={{background:"tomato",width:100,height:100}}></div> */}
      {/* <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo /> */}
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      
    </Father>
  )
}

export default App;
