window.getDataFromJSON = async function(filename) {
    const response = await fetch(filename);
    const result = await response.json()
    return result;
}