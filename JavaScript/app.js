// Variables used

let bioContainer = document.getElementById('bio')

let bioData = {
    fullName: 'Utomudo okiemute',
    height: 152.3,
    country: "Nigeria",
}

bioContainer.innerHTML = `
<p>name ${bioData.fullName}</p>
        <p>Height ${bioData.height}</p>
        <p>Country ${bioData.country}</p>
`