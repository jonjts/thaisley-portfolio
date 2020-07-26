import styled from 'styled-components';
import RootCol from 'react-bootstrap/Col'
import RootRow from 'react-bootstrap/Row'


export const CardRow = styled(RootRow)`
   margin: 0px
`

export const CardColumn = styled(RootCol)`

    @media (min-width:  768px) {
        margin-bottom: 40px
      
    }

    @media (max-width: 768px) {
        margin-bottom: 24px
    }

    justify-content: center;
    display: flex;
    padding: 0px;
    margin: 0px;
`

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-content: center;
   flex-direction: column;
`

export const CardContainer = styled.div`
    @media (min-width:  768px) {
      padding: 53px 15% 40px 15%;
      
    }

    @media (max-width: 768px) {
        padding: 35px 24px 24px 24px;
    }

    min-height: 600px;
 
`

export const HeaderContainer = styled.div`
    @media (min-width:  768px) {
      
      
    }

    @media (max-width: 768px) {
        
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
