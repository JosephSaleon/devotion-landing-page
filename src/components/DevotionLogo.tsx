
type props = {
    row?: boolean
}


const DevotionLogo = ({row = false}:props) => {
    // Add your component logic here
    const logo = <> 
        <h1 class="bg-gradient-to-r from-purple-900 via-purple-500 to-red-400 inline-block text-transparent bg-clip-text">dev</h1>
        <div class="-ml-1 h-8 rounded-full flex items-center justify-center text-current">otion</div>
    </>
    return (
        <>
            { 
                row && 
                    <div class="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold">
                        <a href="/" class="flex gap-1 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out">
                            {logo}
                        </a>
                    </div>
            }
            {
                !row &&
                    <div class=" font-semibold flex gap-1 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out">
                        {logo}
                    </div>
            }       
            
        </>
    )
}

export default DevotionLogo