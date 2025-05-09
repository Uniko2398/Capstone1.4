import { useEffect, useState } from "react";
import client from "../sanity/client"; 
import { Product } from "../context/CartContext";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "product"]
            {
              _id,
              title,
              item,
              "image": image.asset->url,
              price,
              oldPrice,
              rating,
              badges,
              category,
              specsTelefonia,
              specsComputer,
              specsConsole,
              specsTV,
              specsPeriferiche,
              specsGrandiElettrodomestici,
              specsPiccoliElettrodomestici,
              specsMobilita,
              
            }`, );
        const formatted: Product[] = data.map((p: any) => {
          const specs =
            p.specsTelefonia ||
            p.specsComputer ||
            p.specsConsole ||
            p.specsTV ||
            p.specsPeriferiche ||
            p.specsGrandiElettrodomestici ||
            p.specsPiccoliElettrodomestici ||
            p.specsMobilita ||
            {};

          return {
            id: p._id, 
            title: p.title,
            category: p.category,
            item: p.item,
            price: p.price,
            oldPrice: p.oldPrice,
            rating: p.rating,
            badges: p.badges || [],
            image: p.image,
            specs,
          };
        });

        setProducts(formatted);
      } catch (err) {
        console.error("Errore nel fetch dei prodotti da Sanity:", err);
      }
    };

    fetchData();
  }, []);

  return products;
}
