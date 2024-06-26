async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  console.log(data);
  return data;
}

async function Page() {
  let products = await fetchData();
  console.log(products);

  return (
    <div>
      <h1>Here is the list of Products:</h1>
      {products?.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}

export default Page;
