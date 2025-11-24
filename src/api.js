//Reference for cat fact api: https://catfact.ninja/ from a open source api list
// Reference for the dogs api: https://medium.com/codex/15-fun-and-interesting-apis-to-use-for-your-next-coding-project-in-2022-86a4ff3a2742
//

//Was calling this async wrong --> catFact, without the 'get'
//This is how I had it: export async function getCatFact() 
export const getCatFact = async () => {
  const res = await fetch(
    `https://catfact.ninja/fact`
  );

  const data = await res.json();

  console.log(data);

  //---return data.results || [];
  //******assistant suggested to change result for fact.
  return data.fact;
}

//This is how I had it: export async function getDogImage() 
export const getDogImage = async () => {
  const res = await fetch(
    `https://dog.ceo/api/breeds/image/random`
  );

  const data = await res.json();

  console.log(data);

  return data.message;
  //---return data.dog_image ?? "N/A";
}
