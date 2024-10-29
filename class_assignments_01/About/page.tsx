export default async function About(){ 
        await new Promise(resolve => {
          setTimeout(resolve, 2000);  // Resolves the promise after 2 seconds
        });
    return(
    <div className="flex items-centre justify-center text-4xl mt-8rem  "> This is about page.. </div>
    
    )
}