import profile from './images/profile.jpg';
function Details(){
    return (
        <section id='details' className=' bg-stone-800 flex flex-col sm:flex-row sm:justify-center pt-24 p-5 items-center'>
            <img src={profile} alt='details' className=' filter saturate-150 rounded-full w-40 h-40 md:w-80 md:h-80 object-cover m-5 '/>
            <div className='flex flex-col items-center  mt-5 sm:w-2/5'>
                <h1 className='text-4xl font-bold text-yellow-50'>Hello there!</h1>
                <p className='text-center text-yellow-50 p-6 sm:text-lg '>Hi, I am James Sajan, a third-year B.Tech computer science student. I have strong web development skills and extensive knowledge in JavaScript and its frameworks. I am proficient in managing full-stack applications and have experience with Git and GitHub for version control. Additionally, I have expertise in testing using the Mocha Chai library and data visualization using D3.js.</p>
            </div>
        </section>
    )
}

export default Details;