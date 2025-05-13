export default function SimpleFunctionPage() {
  async function action(formData: FormData) {
    "use server";
    const name = formData.get("name");
    console.log(name);
  }

  return (
    <form action={action}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
