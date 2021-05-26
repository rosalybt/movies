import React from 'react';
import styled from 'styled-components'
import Button from './Button'
import SearchIcon from '@material-ui/icons/Search';


const InputBase = styled.input`
padding: 2px 4px;
width: 50vw;
border: none;
font-size: medium;
margin-left: 5px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex-direction: row;
padding:40px;
`
const Form = styled.form`
display: flex;
align-content: center;
border-radius: 5px;
box-shadow: 2px 2px 2px -2px rgba(0,0,0,0.8);
border: 1px solid #e8e8e8; 
padding: 10px;
`

export default function CustomizedInputBase() {

    return (

        <Container>
            <Form >
                <InputBase
                    placeholder="Buscar peliculas"
                    aria-label="Buscar Peliculas"
                />
                <Button
                    type="submit"
                    icon={<SearchIcon />}
                    aria-label="Buscar" />
            </Form>
        </Container>
    );
}