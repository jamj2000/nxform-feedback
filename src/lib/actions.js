'use server'



export async function realAction1(prevState, formData) {
    console.log('ACTION1', prevState)

    // Simulamos un tiempo de respuesta
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Unas veces devolvemos mensaje de error y otras mensaje de success
    if (Math.random() > 0.5)
        return { error: 'Vaya fracaso 1' }
    else
        return { success: 'Estupendo, sigue asi 1' }
}


export async function realAction2(prevState, formData) {
    console.log('ACTION2', prevState)

    // Simulamos un tiempo de respuesta
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Unas veces devolvemos mensaje de error y otras mensaje de success
    if (Math.random() > 0.5)
        return { error: 'Vaya mierda error 2' }
    else
        return { success: 'Genial, sigue asi 2' }
}


export async function realAction3(prevState, formData) {
    console.log('ACTION3', prevState)

    // Simulamos un tiempo de respuesta
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Unas veces devolvemos mensaje de error y otras mensaje de success
    if (Math.random() > 0.5)
        return { error: 'Mala suerte 3' }
    else
        return { success: 'Felicidades 3' }
}


