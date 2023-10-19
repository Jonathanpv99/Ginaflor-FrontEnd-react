import girasol from '../../assets/girasol.png'
export const Header = () => {
    return (
        <>
            
            <div  className="bg-custom-drakGreen p-4 text-custom-opaqueEarth text-center border border-solid border-custom-opaqueEarth grid grid-cols-4 items-center">
                <div className='hidden md:grid grid-cols-3'>
                    <div>
                        <p>icon</p>
                    </div>
                    <div className='col-span-2'>

                    </div>
                    
                </div>
                <div className='text-center col-span-4 md:col-span-3 flex justify-evenly  items-center'>
                    <div>
                        <h1 className=" text-3xl md:text-4xl font-bold">Floreria Gina Flor P.V.</h1>
                    </div>
                   <div className='border-4 border-custom-opaqueEarth'>
                    <img src={girasol} alt="logo" className='w-[65px] md:w-[90px]' /> 
                   </div>
                </div>

                <div className='md:hidden mt-3 grid grid-cols-3 items-center text-center col-span-4'>
                    <a href="" className="m-3 hover:text-custom-gray">Home</a>
                    <a href="" className="m-3">Templos</a>
                    <a href="" className="m-3">Comentarios</a>
                </div>
                
            </div>
        </>
        
    )
}