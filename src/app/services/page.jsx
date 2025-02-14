// "use client"
import Link from "next/link";

const  fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

const Services = async () => {
  const posts = await fetchData();
  return (
    <div>
      <h3>Service page</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((d) => (
          <Link href={`/services/${d.id}`} key={d?.id} className="border p-4 rounded-md">
            <h2>{d?.title}</h2>
            <p>{d?.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
