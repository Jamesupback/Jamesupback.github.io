import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Contact(){
    return (
        <section id='footer' className='bg-stone-800 p-1'>
            <h1 className='text-4xl font-bold text-white text-center'>Contact</h1>
            <div className='bg-stone-800 text-white flex justify-center'>
                <div className='p-7 '>
                    <i className="fa-brands fa-github text-4xl"></i>
               
                </div>
                <div className='p-7 '>
                    <i className="fa-brands fa-instagram text-4xl"></i>
            
                </div>
                 <div className='p-7 '>
                    <i className="fa-solid fa-envelope text-4xl"></i>
              
                </div>
                <div className='p-7'>
                    <i className="fa-solid fa-globe text-4xl"></i>
                 
                </div>
            </div>    
        </section>
    )
}

export default Contact