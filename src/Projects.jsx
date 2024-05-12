import servicescape from './images/servicescape.png'
import rscraper from './images/rscraper.png'
import typing from './images/typing.png'
import pomodoro from './images/pomodoro.png'
import jokes from './images/jokes.png'
import drum from './images/drum.png'
import markdown from './images/markdown.png'
import calculator from './images/calculator.png'
import chloropleth from './images/chloropleth.png'
import heatmap from './images/heatmap.png'
import scatter from './images/scatter.png'
import barchart from './images/barchart.png'
import treemap from './images/treemap.png'
import product from './images/product.png'
import url from './images/url.png'
import sudoku from './images/sudoku.png'
import issue from './images/issue.png'
import library from './images/library.png'
function Projects() {
return (
    <section id='projects'>
            <h1 className='text-4xl bg-stone-800 font-bold text-center  text-yellow-50'>Projects</h1>
            <div className='bg-stone-800 flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3'>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={servicescape} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Full stack home service application</h1>
                            <p className='text-center text-yellow-50 p-2'>Build with node, express,html,css,ejs and mongodb allows user to book various home services and connect workers to users</p>
                            <p className='text-center'><a href="https://servicescape.onrender.com" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div> 
                    <div class='bg-stone-700 p-4 m-10 border-2   border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={rscraper} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Reddit image scraper</h1>
                            <p className='text-center text-yellow-50 p-2'>rscraper is a tool that uses reddit api to scrape reddit and give image results of a the user specified subreddit. </p>
                            <p className='text-center'><a href="https://rscraper.onrender.com" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={typing} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Typing speed tester</h1>
                            <p className='text-center text-yellow-50 p-2'>Typing blitz is a typing speed tester that uses different algorithms to compute wpm,cpm & no of mistakes of the user</p>
                            <p className='text-center'><a href="https://orionblaze.me/typer" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={url} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>url shortner api</h1>
                            <p className='text-center text-yellow-50 p-2'>url shortner api uses express and mongodb as backend to store various urls and provides with a short url json object in return</p>
                            <p className='text-center'><a href="https://url-shortnerfcc.onrender.com/" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={sudoku} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Sudoku solver</h1>
                            <p className='text-center text-yellow-50 p-2'>Sudoku solver uses backtracking algorithm to find out the solution.it takes in an array of integers as input and returns a visual representation</p>
                            <p className='text-center'><a href="https://sudoku-m45w.onrender.com/" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={issue} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>issue tracker backend api</h1>
                            <p className='text-center text-yellow-50 p-2'>Issue tracker is a backend api service that allows to  open ,resolve and close issues. it tracks details about the issue.</p>
                            <p className='text-center'><a href="https://issue-tracker-nva8.onrender.com/" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={library} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>library app backend api</h1>
                            <p className='text-center text-yellow-50 p-2'>This personal library api allows to track and submit books as well as keep infomation about the book that was submitted</p>
                            <p className='text-center'><a href="https://library-ynii.onrender.com/" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={pomodoro} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Pomodoro timer</h1>
                            <p className='text-center text-yellow-50 p-2'>The pomodoro timer is a productivity tool that is build with react which allows user to set the session and break lengths to be productive</p>
                            <p className='text-center'><a href="https://orionblaze.me/pomodoro" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={jokes} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Random joke generator</h1>
                            <p className='text-center text-yellow-50 p-2'>Random joke generator uses vanila javascript,html and css to fetch through an api and return a random joke.</p>
                            <p className='text-center'><a href="https://orionblaze.me/jokes" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={drum} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Drum machine</h1>
                            <p className='text-center text-yellow-50 p-2'>Drum machine is a fun project that outputs various drum sounds on various key presses.it can produce 9 types of drum snares</p>
                            <p className='text-center'><a href="htpps://orionblaze.me/drum-machine" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={markdown} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Markdown previewer</h1>
                            <p className='text-center text-yellow-50 p-2'>Markdown previewer produces a realtime update on how a markdown script looks like.it translates  markdown into plain text</p>
                            <p className='text-center'><a href="https://orionblaze.me/markdown" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div> 
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={calculator} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Calculator</h1>
                            <p className='text-center text-yellow-50 p-2'>This is a calculator app made completely with react. it can do basic arithemetic functions and comes with a responsive and elegant design</p>
                            <p className='text-center'><a href="https://orionblaze.me/calculator" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={chloropleth} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Data visualization-chloropleth</h1>
                            <p className='text-center text-yellow-50 p-2'>A choropleth map is a thematic map that is used to represent statistical data using the color mapping symbology technique.d3 js is used for the same</p>
                            <p className='text-center'><a href="https://orionblaze.me/chloropleth" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={heatmap} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Data visualization-heatmap</h1>
                            <p className='text-center text-yellow-50 p-2'>A heatmap (or heat map) is a graphical representation of data where values are depicted by color.D3 js is used for the visual representation</p>
                            <p className='text-center'><a href="https://orionblaze.me/heatmap" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div> 
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={scatter} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Data visualization-scatterplot</h1>
                            <p className='text-center text-yellow-50 p-2'>A scatter plot (aka scatter chart, scatter graph) uses dots to represent values for two different numeric variables.D3 js is used for the visual representation</p>
                            <p className='text-center'><a href="https://orionblaze.me/scatterplot" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={barchart} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Data visualization-barchart</h1>
                            <p className='text-center text-yellow-50 p-2'>This is a simple representation of a barchart with the help of D3 js which is used for data visualization.the data sample is of the U.S gdp over the past decades    </p>
                            <p className='text-center'><a href="https://orionblaze.me/barchart" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={treemap} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>Data visualization-treemap</h1>
                            <p className='text-center text-yellow-50 p-2'>The treemap functions as a visualization composed of nested rectangles.These rectangles represent certain categories within a selected dimension.</p>
                            <p className='text-center'><a href="your_project_link" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>
                    <div class='bg-stone-700 p-4 m-10 border-2  border-gray-500 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                            <img src={product} alt='servicescape' className=' w-full'/>
                            <h1 className='text-2xl text-center font-bold text-yellow-50'>product landing page</h1>
                            <p className='text-center text-yellow-50 p-2'>This is a product landing page demo which makes uses of flexbox and grid fundamentals to provide a responsive and elegant web design</p>
                            <p className='text-center'><a href="https://orionblaze.me/product-launch" className=" text-yellow-400 text-lg underline text-center">Check it out</a></p>
                    </div>                        
            </div>
    </section>
);
}

export default Projects;