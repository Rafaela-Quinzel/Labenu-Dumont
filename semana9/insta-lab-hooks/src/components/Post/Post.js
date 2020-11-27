import React, { useState } from 'react' // EXERCÍCIO 4 - Implementação do código
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  // EXERCÍCIO 5 e 7 - Implementação do código
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])



  const onClickCurtida = () => {
    // EXERCÍCIO 10 - Implementação do código
    if(curtido) {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  };

  
  const onClickComentario = () => {
    // EXERCÍCIO 14 - Implementação do código
    setComentando(!comentando)
  };

  const enviarComentario = (comentario) => {
    // EXERCÍCIO 17 - Implementação do código
    const listaDeComentarios = [...comentarios, comentario]

    setComentarios(listaDeComentarios)
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }


  // EXERCÍCIO 11 - Implementação do código
  const iconeCurtida = numeroCurtidas ? (iconeCoracaoPreto) : (iconeCoracaoBranco)


  // EXERCÍCIO 16 - Implementação do código
  const caixaDeComentario = comentando ? (
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )
  



  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
          // EXERCÍCIO 18 - Implementação do código
        />

        <IconeComContador
          icone={iconeComentario} // EXERCÍCIO 11 - Implementação do código
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
          // EXERCÍCIO 18 - Implementação do código
        />
      </PostFooter>
      {/* // EXERCÍCIO 16 - Implementação do código */}
      {caixaDeComentario} 
    </PostContainer>
  )
}

export default Post