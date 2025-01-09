'use client'
import { realAction1, realAction2, realAction3 } from "@/lib/actions";
import { useActionState, useEffect } from "react";
import { CircleCheck, CircleAlert,  BicepsFlexed,Cat} from 'lucide-react'
import { toast } from "sonner";




function Formulario() {

    const [state1, action1, pending1] = useActionState(realAction1, {})
    const [state2, action2, pending2] = useActionState(realAction2, {})
    // const [state3, action3, pending3] = useActionState(realAction3, {})

    useEffect(() => {
        if (state1.error) toast.error(state1.error, { closeButton: true })       // duration: 4000
        if (state1.success) toast.success(state1.success, { closeButton: true }) // duration: 4000
    }, [state1])

    useEffect(() => {
        if (state2.error) toast.error(state2.error, { duration: 2000 })
        if (state2.success) toast.success(state2.success, { duration: 2000 })
    }, [state2])

    // useEffect(() => {
    //     if (state3.error) toast.error(state3.error, { closeButton: true, duration: 2000 })
    //     if (state3.success) toast.success(state3.success, { closeButton: true, duration: 2000 })
    // }, [state3])


    return (
        <form className="my-20 border-2 p-4 flex flex-col gap-4">
            <h1 className="text-center text-xl">Formulario</h1>
            <div className="flex justify-between">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" />
            </div>
            <div className="flex justify-between">
                <label htmlFor="fecha_nacimiento">Fecha nacimento:</label>
                <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" />
            </div>
            <div className="flex justify-between">
                <label htmlFor="Email">Email:</label>
                <input type="text" id="email" name="email" />
            </div>

            {/* Si el botón no tiene propiedad formAction, 
            entonces usa la action indicada en etiqueta form */}
            <button
                formAction={action1}
                disabled={pending1}
                className="disabled:bg-slate-600 bg-blue-600 text-white rounded-lg py-2" >
                {pending1 ? < BicepsFlexed className="inline animate-spin size-4" /> : 'Action 1'}
            </button>


            {state1?.error && !pending1 &&
                < div className="text-sm font-medium text-red-600 bg-red-50 rounded-md flex items-center border">
                    {<Cat className="inline m-4 mr-2 size-4" />} {state1.error}
                </div>
            }
            {state1?.success && !pending1 &&
                <div className="text-sm font-medium text-green-600 bg-green-50 rounded-md flex items-center border">
                    {<Cat className="inline m-4 mr-2 size-4" />} {state1.success}
                </div>
            }

            <button
                formAction={action2}
                disabled={pending2}
                className="disabled:bg-slate-600 bg-blue-600 text-white rounded-lg py-2" >
                {pending2 ? < BicepsFlexed className="inline animate-spin size-4" /> : 'Action 2'}
            </button>
            {state2?.error && !pending2 &&
                <div className="text-sm font-medium text-red-600 bg-red-50 rounded-md flex items-center border">
                    {<CircleAlert className="inline m-4 mr-2 size-4" />} {state2.error}
                </div>
            }
            {state2?.success && !pending2 &&
                <div className="text-sm font-medium text-green-600 bg-green-50 rounded-md flex items-center border">
                    {<CircleCheck className="inline m-4 mr-2 size-4" />} {state2.success}
                </div>
            }

      
        </form >
    );
}

export default Formulario;