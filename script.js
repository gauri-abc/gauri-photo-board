// Open popup form when "Add New Board" button is clicked
document.getElementById("addBoardBtn").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "flex";
});

// Close popup form when close button is clicked
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none";
});

// Handle form submission to create a new board
document.getElementById("boardForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const boardName = document.getElementById("boardName").value;
    const boardImage = document.getElementById("boardImage").files[0];
    
    if (boardName && boardImage) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const boardContainer = document.createElement("div");
            boardContainer.className = "board";
            
            const imgElement = document.createElement("img");
            imgElement.src = event.target.result;
            
            const titleElement = document.createElement("h2");
            titleElement.textContent = boardName;
            
            boardContainer.appendChild(imgElement);
            boardContainer.appendChild(titleElement);
            
            document.getElementById("boardsContainer").appendChild(boardContainer);
        }
        
        reader.readAsDataURL(boardImage);
        
        // Reset form and close popup
        document.getElementById("boardForm").reset();
        document.getElementById("popupForm").style.display = "none";
    }
});

// Redirect to 'personal.html' when "Me Being Me" button is clicked
document.getElementById("meBeingMeBtn").addEventListener("click", function() {
    window.location.href = "personal.html"; // Replace 'personal.html' with the correct file name if different
});
