const verseButton = document.getElementById("verse");
const container = document.getElementById("evangelize");

verse.addEventListener('click', getVerse);




async function getVerse(){
    try{
        let result = await fetch('https://bible-api.com/?random=verse');
        let data = await result.json();
        console.log(data);
        
        const verseContainer = document.createElement('div');
        verseContainer.className = 'verse-container';
        
        const [{ book_id, book_name, chapter, verse, text }] = data.verses;

        let passage = document.createElement('p');
        passage.id = 'verse-text';
        passage.textContent = text;

        let details = document.createElement('p');
        details.className = 'verse-details';
        details.textContent = `${book_name} ${chapter}:${verse}`;

        verseContainer.appendChild(passage);
        verseContainer.appendChild(details);

        container.innerHTML = "";
        container.appendChild(verseContainer); 
        
    } catch(error){
        console.error('Error fetching verse:', error);

        const errorElement = document.createElement('div');
        errorElement.textContent = 'Unable to fetch verse. Please try again later.';
        errorElement.style.color = '#e74c3c';
        
        container.innerHTML = '';
        container.appendChild(errorElement);
    }
    
}


