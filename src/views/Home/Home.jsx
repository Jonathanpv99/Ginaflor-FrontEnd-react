import angeles from '../../assets/angeles.png'
import florero from '../../assets/florero.png'
import girasoles from '../../assets/girasoles.png'
import rosal from '../../assets/rosa.png'
export const Home = () => {
    return (
        <>
        <div className="h-full w-full text-center">
            <div className='m-4 border-b-4 border-custom-drakEarth'>
            <h1 className='text-custom-drakGreen text-4xl'> Ginaflor </h1>
            <p className='text-justify mb-7'>consectetur adipiscing elit. Sed rutrum urna sem, ut pulvinar sapien egestas at. Mauris 
            sit amet mauris at neque vulputate interdum. Donec in massa tortor. Nam luctus lacinia libero rhoncus tincidunt. Donec dui ex, hendrerit at ullamcorper vel, rhoncus ultricies ante. Fusce ac 
            vehicula justo. Nam nibh velit, lobortis eget libero nec, blandit vestibulum erat. Pellentesque libero elit, mollis in libero eget, lobortis luctus lacus. Sed nec purus hendrerit, euismod ligula nec, aliquam turpis. 
            In pellentesque dapibus bibendum. Vestibulum mi eros, pretium id libero ac, porta suscipit tellus. </p>
            </div>
            
            <div className=' grid 3xl:grid-rows-2 md:grid-cols-4 text-center items-center m-3 border-b-4 border-custom-drakEarth'>
                <div className='text-center border-8 border-custom-drakEarth mb-3'>
                    <img src={angeles} alt="templos" />
                </div>
                <div className='md:col-span-3 m-2'>
                    <p className='text-justify'>ivamus vel mauris a velit condimentum mattis vitae vitae odio. In scelerisque, ante in porttitor malesuada, odio massa tincidunt mi, ac euismod tellus augue sed ligula. Cras imperdiet ligula est, non semper lectus elementum rutrum. Maecenas malesuada cursus placerat. Fusce venenatis laoreet nibh, ut rutrum purus malesuada id. Duis placerat libero a ornare maximus. Pellentesque aliquam, quam in lacinia facilisis, libero justo varius urna,</p>
                </div>
            </div>

            <div className='grid 3xl:grid md:grid-cols-4 text-center items-center m-3 border-b-4 border-custom-drakEarth'>
                <div className='md:col-span-3 m-2'>
                    <p className='text-justify'>ivamus vel mauris a velit condimentum mattis vitae vitae odio. In scelerisque, ante in porttitor malesuada, odio massa tincidunt mi, ac euismod tellus augue sed ligula. Cras imperdiet ligula est, non semper lectus elementum rutrum. Maecenas malesuada cursus placerat. Fusce venenatis laoreet nibh, ut rutrum purus malesuada id. Duis placerat libero a ornare maximus. Pellentesque aliquam, quam in lacinia facilisis, libero justo varius urna,</p>
                </div>
                <div className='text-center border-8 border-custom-drakEarth mb-3 row-start-1 md:col-start-4'>
                    <img src={florero} alt="florero" />
                </div>
            </div>
            
            <div className='grid 3xl:grid-rows-2 md:grid-cols-4 text-center items-center m-3 border-b-4 border-custom-drakEarth'>
                <div className='text-center border-8 border-custom-drakEarth mb-3'>
                    <img src={girasoles} alt="girasoles" />
                </div>
                <div className='md:col-span-3 font m-2'>
                    <p className='text-justify'>ivamus vel mauris a velit condimentum mattis vitae vitae odio. In scelerisque, ante in porttitor malesuada, odio massa tincidunt mi, ac euismod tellus augue sed ligula. Cras imperdiet ligula est, non semper lectus elementum rutrum. Maecenas malesuada cursus placerat. Fusce venenatis laoreet nibh, ut rutrum purus malesuada id. Duis placerat libero a ornare maximus. Pellentesque aliquam, quam in lacinia facilisis, libero justo varius urna,</p>
                </div>
            </div>

            <div className='grid 3xl:grid-rows-2 md:grid-cols-4 text-center items-center m-3'>
                <div className='md:col-span-3'>
                    <p className=' text-center'>!!! Visitamos y conoce todo lo que tenemos para ti ¡¡¡</p>
                </div>
                <div className='text-center border-8 border-custom-drakEarth row-start-1 md:col-start-4'>
                    <img src={rosal} alt="rosal" />
                </div>
            </div>
        </div>
        
        </>
    )
}