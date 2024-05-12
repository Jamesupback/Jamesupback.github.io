
import responsive from './images/responsive.png';
import javascript from './images/javascript.png';
import frontend from './images/frontend.png';
import data from './images/data.png';
import relational from './images/relational.png';
import backend from './images/backend.png';
import quality from './images/quality.png';

function Certifications(){
    return(
        <section id='certifications' className='bg-stone-800 p-1'>
            <h1 className='text-4xl font-bold text-white text-center'>Skill Certifications</h1>
            <div className='flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-stone-800 '>
                <div className='rounded-xl bg-stone-700 border-2 border-gray-400 m-10'>
                    <img src={responsive} alt="certification" className=' w-fit p-2'/>
                     <h1 className='text-2xl text-center font-bold p-3 text-yellow-50'>Responsive Web Design</h1>
                </div>
            </div>
            <div className='bg-stone-800 '>
                <div className='rounded-xl bg-stone-700 border-2 border-gray-400 m-10'>
                    <img src={javascript} alt="certification" className=' w-fit p-2'/>
                     <h1 className='text-2xl text-center font-bold p-3 text-yellow-50'>JS Algorithms And Data Structures</h1>
                </div>
            </div>
            <div className='bg-stone-800 '>
                <div className='rounded-xl bg-stone-700 border-2 border-gray-400 m-10'>
                    <img src={frontend} alt="certification" className=' w-fit p-2'/>
                     <h1 className='text-2xl text-center font-bold p-3 text-yellow-50'>Front-end libraries</h1>
                </div>
            </div>
           
            <div className='bg-stone-800 '>
                <div className='rounded-xl bg-stone-700 border-2 border-gray-400 m-10'>
                    <img src={data} alt="certification" className=' w-fit p-2'/>
                     <h1 className='text-2xl text-center font-bold p-3 text-yellow-50'>Data Vizualization</h1>
                </div>
            </div>
            <div className='bg-stone-800'>
                <div className='rounded-xl bg-stone-700 border-2 border-gray-400 m-10'>
                    <img src={relational} alt="certification" className=' w-fit p-2'/>
                     <h1 className='text-2xl text-center font-bold p-3 text-yellow-50'>Relational Database</h1>
                </div>
            </div>
            <div className='bg-stone-800 '>
                <div className='rounded-xl bg-stone-700 border-2 border-gray-400 m-10'>
                    <img src={backend} alt="certification" className=' w-fit p-2'/>
                     <h1 className='text-2xl text-center font-bold p-3 text-yellow-50'>Backend Development & APIs</h1>
                </div>
            </div>
            <div className='bg-stone-800 '>
                <div className='rounded-xl bg-stone-700 border-2 border-gray-400 m-10'>
                    <img src={quality} alt="certification" className=' w-fit p-2'/>
                     <h1 className='text-2xl text-center font-bold p-3 text-yellow-50'>Quality Assurance</h1>
                </div>
            </div>
            </div>
          
           
        </section>
    )
}

export default Certifications;