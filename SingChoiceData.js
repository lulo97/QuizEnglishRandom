async function loadJsonFile(path) {
  try {
    const response = await fetch(path);
    const data = await response.json();

    return data;
  } catch (err) {
    console.error("Error loading JSON:", err);
  }
}

const SingleChoiceData = await loadJsonFile("./data/SingleChoice.json");

export {
    SingleChoiceData
}
