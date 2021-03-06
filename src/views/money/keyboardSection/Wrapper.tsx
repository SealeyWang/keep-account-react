import styled from "styled-components";


const Wrapper = styled.section`
  > .output {
    font-size: 36px;
    line-height: 72px;
    margin-right: 26px;
    text-align: right;
  }
  
  > .keyboard {
    float:left;
    width: 100%;
    & > button {
      border: none;

      height: 64px;
      line-height:64px;
      width: 25%;
      font-size: 18px;

      &:nth-child(1){
        background:#f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#B8B8B8;
      }
      &:nth-child(12) {
        background:#9A9A9A;
      }
      &:nth-child(14) {
        background:#A9A9A9;
      }
      
    }
    
    & > .ok {
      line-height:128px;
      height:128px;
      float: right;
      
    }
    
    & > .zero {
      width: calc(25% * 2)
    }
    
   
    
  }
  
  
`

export {Wrapper}
