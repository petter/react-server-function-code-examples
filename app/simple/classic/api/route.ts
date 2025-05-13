export async function POST(request: Request) {
  const json = await request.json();
  const name = json.name;
  //                ^ any 🤢
  console.log(name);
}
