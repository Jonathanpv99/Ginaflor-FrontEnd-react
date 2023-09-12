
export const Sidebar = () => {

    return (
        <>
            <div className="bg-custom-drakGreen w-full h-full text-center text-custom-bone font-bold border border-solid border-custom-opaqueEarth flex-row">
                <div className="m-3">
                    <h3 className="text-2xl mb-8">Opciones</h3>
                </div>

                <div className=" m-3 grid grid-rows-3 border-t-2 border-b-2 border-custom-opaqueEarth">
                    <a href="" className="m-3 hover:text-custom-gray">Home</a>
                    <a href="" className="m-3">Templos</a>
                    <a href="" className="m-3">Comentarios</a>
                </div>

                <div className=" mt-10 ">
                    <h3 className="text-xl">Contactanos</h3>

                    <div className="m-3 grid grid-cols-3 mt-4">
                        <div>icon</div>
                        <div>icon</div>
                        <div>icon</div>
                    </div>
                </div>
            </div>
        </>
        
    )
}