export default function Brewery({ breweryId }) {
  // Here you can fetch the details of the brewery using the breweryId

  return <main>Brewery {breweryId}</main>;
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      breweryId: params.breweryId,
    },
  };
}
