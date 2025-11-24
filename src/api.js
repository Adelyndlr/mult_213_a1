// API function to integrate with Open-Meteo Geocoding and Weather APIs
// Reference for the dogs api: https://medium.com/codex/15-fun-and-interesting-apis-to-use-for-your-next-coding-project-in-2022-86a4ff3a2742
//

//Was calling this function wrong catFact without the 'get'
//*****leave the parenthesis empty?
export async function getCatFact() {
  const res = await fetch(
    `https://catfact.ninja/fact`
  );

  const data = await res.json();

  console.log(data);

  //---return data.results || [];
  //******assistant suggested to change result for fact.
  return data.fact;
}

export async function getDogImage() {
  const res = await fetch(
    `https://dog.ceo/api/breeds/image/random`
  );

  const data = await res.json();

  console.log(data);

  return data.message;
  //---return data.dog_image ?? "N/A";
}
