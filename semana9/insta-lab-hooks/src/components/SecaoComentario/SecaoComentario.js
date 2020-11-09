import React, { useState } from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	// EXERCÍCIO 19 - Implementação do código
	const [inputValue, setInputValue] = useState("")


	const onChangeComentario = (event) => {
		// EXERCÍCIO 19 - Implementação do código
		setInputValue(event.target.value)

	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputValue} // EXERCÍCIO 19 - Implementação do código
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(inputValue) }} >Enviar</button>
			                {/* // EXERCÍCIO 19 - Implementação do código */}
		</CommentContainer>
	)
}


export default SecaoComentario