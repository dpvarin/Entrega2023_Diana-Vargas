import {useState} from 'react'
import Card from './Card'

const Formulario = () => {

    const [cancion, setCancion] = useState("")
    const [genero, setGenero] = useState("")
        
    const handleSubmit = e => {
        e.preventDefault()

        const validateCancion = (cancion) => {
            if (cancion.length >= 3 && cancion.trim() === '') {
                return true
            } else
            return false
        }
        
        const validateGenero = (genero) => {
            if (genero.length >= 6) {
                return true
            } else 
            return false
            }

        const isCancionValid = validateCancion(cancion) 
        const isGeneroValid = validateGenero(genero)  

        if  (!isCancionValid || !isGeneroValid) {
            alert ("Por favor chequea que la información sea correcta")
        }else {
            <Card/>
        }
        

        }
        
    
    return (
    <>
        <h2>Formulario</h2>
        <form
            onSubmit={handleSubmit}>
            <label htmlFor="cancion">Canción</label>
            <input 
                type="text" 
                placeholder="Ingresar nombre canción"   
                id='cancion'
                value={cancion}
                onChange={e => setCancion(e.target.value)}
            />
            
            <label htmlFor="genero">Categoría</label>
            <input 
                type="text" 
                placeholder="Ingresar género"  
                id='genero'
                value={genero}
                onChange={e => setGenero(e.target.value)}  
            />
            
            <button type="submit">Enviar</button>

        </form>
    </>
    )
}


export default Formulario