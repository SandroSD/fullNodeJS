const fetchPets = async () => {
    const url ="url";
    const response = await fetch(url);
    const josn = await response.json()

    return json
}

window.onload = () => {
    console.log(await fetchPets());
}