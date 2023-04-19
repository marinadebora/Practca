import styled from 'styled-components'
const colores={
    borde:'#0075FF',
    error:'#bb2929',
    exito:'#1ed12d'
}
const Formulario= styled.form`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap:2px;
@media (max-width:800px){
    grid-template-columns: 1fr
}
`;

const GrupoInput=styled.div`
position:relative;
z-index:90
`;

const Input =styled.input`
whidth:100%;
backgroun:#fff;
border-radius:3px;
heigth:45px;
padding: 0 40px 0 10px;
transition:.3s ease all;
border: 3px solid tranparent;

&:focus{
    border:3px solid ${colores.borde};
    outline:none;
    box-shadow:3px 0 30px rgba(163, 163, 163,0.4 )
}
`
const LeyendaError=styled.p`
font-size:12px;
margin-bottom:0;
color:${colores.error};
/* display:none */

`
const IconValidacion=styled.p`
position:absolute;
right:10px;
bottom:-10px;
z-index:100;
font-size:12px;
/* opacity:0 */

`
const IconoError=styled.p`
position:absolute;
right:10px;
bottom:-10px;
z-index:100;
font-size:12px;
/* opacity:0 */
`
export {Formulario,GrupoInput,Input,LeyendaError,IconValidacion,IconoError}