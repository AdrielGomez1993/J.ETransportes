document.getElementById("newcards-form").addEventListener("submit",function(event) {
    event.preventDefault();

    const title = document.getElementById("newcards-title").value;
    const bgColor = document.getElementById("newcards-bg-color").value;
    const borderColor = document.getElementById("newcards-border-color").value;
    const kilometraje = document.getElementById("newcards-kilometraje").value;
    const horario = document.getElementById("newcards-horario").value;
    const contacto = document.getElementById("newcards-contact").value;
    const imageUrl = document.getElementById("newcards-image").value || "https://picsum.photos/200";

    console.log({
        title,
        bgColor,
        borderColor,
        kilometraje,
        horario,
        contacto,
        imageUrl,
    })

    const newcardsContainer = document.getElementById("newcards-container");
    const newCard = document.createElement("div");
    newCard.className = "nwcard";
    newCard.style.backgroundColor = bgColor;
    newCard.style.borderColor = borderColor;

    newCard.innerHTML = `
    <img src= "${imageUrl}" alt="newCard image">
    <div class="newCard-content">
        <p>${title}</p>
        <p>${kilometraje}</p>
        <p>${horario}</p>
        <p>${contacto}</p>
    </div>
    `;

    newcardsContainer.appendChild(newCard);

    document.getElementById("newcards-form").reset();

});