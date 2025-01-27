import ProductDataTable from '@/components/shop/drop-pet/ProductTable';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Persona, getAllMyPersonas } from '@gitanimals/api';
import { LoaderFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Flex } from '_panda/jsx';

export const loader: LoaderFunction = async ({ request }) => {
  const { personas } = await getAllMyPersonas('git-good-w');
  return json({ personas });
};

function ShopDropPetPage() {
  const data = useLoaderData<typeof loader>();

  const personas: Persona[] = data.personas;

  return (
    <Flex p={4}>
      <Card>
        <CardHeader>
          <CardTitle>상점 펫 판매</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductDataTable data={personas} />
        </CardContent>
      </Card>
    </Flex>
  );
}

export default ShopDropPetPage;
