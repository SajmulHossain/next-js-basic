
const fetchData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

const ServiceDetails = async ({ params }) => {
  const { id } = params;

  const singleData = await fetchData(id);
  return (
    <div>
      <h3>Service Details Page {id}</h3>

      <div className="border p-4 w-fit">
        <h3>{singleData?.name}</h3>
        <img src={singleData?.image} alt="" />
        <p>{singleData.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
